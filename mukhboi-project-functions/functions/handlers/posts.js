const { db, timeStamp } = require("../util/admin");
exports.getPosts = (req, res) => {
  db.collection("posts")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      let posts = [];
      snapshot.forEach((doc) => {
        posts.push({
          postId: doc.id,
          ...doc.data(),
        });
      });
      return res.json(posts);
    });
};

// Create post
exports.createPost = (req, res) => {
  const newPost = {
    userHandle: req.user.handle,
    userImage: req.user.imageUrl,
    body: req.body.body,
    createdAt: new Date().toISOString(),
    likeCount: 0,
    commentCount: 0,
  };
  db.collection("posts")
    .add(newPost)
    .then((doc) => {
      const resPost = newPost;
      resPost.postId = doc.id;
      return res.json(resPost);
    })
    .catch((err) => {
      return res.status(500).json({ error: "Something went wrong" });
    });
};

// Get single post
exports.getSinglePost = (req, res) => {
  let postData = {};
  db.doc(`posts/${req.params.postId}`)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Post not found" });
      } else {
        postData = doc.data();
        postData.postId = doc.id;
        return db
          .collection("comments")
          .where("postId", "==", req.params.postId)
          .orderBy("createdAt", "desc")
          .get();
      }
    })
    .then((querySnapshot) => {
      postData.comments = [];
      querySnapshot.forEach((doc) => {
        postData.comments.push(doc.data());
      });
      return res.json(postData);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

// Comment on Scream
exports.commentOnPost = (req, res) => {
  if (req.body.body.trim() === "") {
    return res.status(400).json({ error: "Must not be empty" });
  } else {
    const newComment = {
      body: req.body.body,
      createdAt: new Date().toISOString(),
      postId: req.params.postId,
      userHandle: req.user.handle,
      userImage: req.user.imageUrl,
    };
    db.doc(`/posts/${req.params.postId}`)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return response.status(404).json({ error: "Post Not found" });
        }
        return doc.ref.update({ commentCount: doc.data().commentCount + 1 });
      })
      .then(() => {
        return db.collection("comments").add(newComment);
      })
      .then(() => {
        return res.json(newComment);
      });
  }
};

// Like a post
exports.likePost = (req, res) => {
  const likeDocument = db
    .collection("likes")
    .where("userHandle", "==", req.user.handle)
	.where("postId", "==", req.params.postId)
    .limit(1);
  const postDocument = db.doc(`/posts/${req.params.postId}`);
  let postData;
  postDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        postData = doc.data();
        postData.postId = doc.id;
        return likeDocument.get();
      } else {
        return res.status(404).json({ error: "post not found" });
      }
    })
    .then((data) => {
      if (data.empty) {
        return db
          .collection("likes")
          .add({
            userHandle: req.user.handle,
            postId: req.params.postId,
          })
          .then(() => {
            postData.likeCount++;
            return postDocument.update({ likeCount: postData.likeCount });
          })
          .then(() => {
            return res.json(postData);
          });
      } else {
        return res.status(400).json({ error: "Post already liked" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
// Unlike a post
exports.unlikePost = (req, res) => {
  const likeDocument = db
    .collection("likes")
    .where("userHandle", "==", req.user.handle)
	.where("postId", "==", req.params.postId)
    .limit(1);
  const postDocument = db.doc(`/posts/${req.params.postId}`);

  let postData;
  postDocument
    .get()
    .then((doc) => {
      if (doc.exists) {
        postData = doc.data();
        postData.postId = doc.id;
        return likeDocument.get();
      }
    })
    .then((data) => {
      if (data.empty) {
        return res.status(400).json({ error: "Post not liked" });
      } else {
        return db
          .doc(`/likes/${data.docs[0].id}`)
          .delete()
          .then(() => {
            postData.likeCount--;
            return postDocument.update({ likeCount: postData.likeCount });
          })
          .then(() => {
            return res.json(postData);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Post
exports.deletePost = (req, res) => {
  const document = db.doc(`posts/${req.params.postId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Post not found" });
      }
      if (doc.data().userHandle !== req.user.handle) {
        return res.status(403).json({ error: "Unauthorized" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "Post deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
