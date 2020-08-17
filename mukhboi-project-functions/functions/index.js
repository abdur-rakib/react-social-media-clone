const functions = require("firebase-functions");

const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
  getUserDetails,
  markNotificationOnRead,
} = require("./handlers/users");
const {
  getPosts,
  createPost,
  getSinglePost,
  commentOnPost,
  likePost,
  unlikePost,
  deletePost,
} = require("./handlers/posts");
const FBAuth = require("./util/FBAuth");
const { db, timeStamp } = require("./util/admin");

// Express staff
const app = require("express")();

// User Routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);
app.get("/user/:handle", FBAuth, getUserDetails);
app.post("/notifications", FBAuth, markNotificationOnRead);

// Posts Route
app.get("/posts", getPosts);
app.post("/createPost", FBAuth, createPost);
app.get("/posts/:postId", FBAuth, getSinglePost);
app.post("/post/:postId/comment", FBAuth, commentOnPost);
app.get("/post/:postId/like", FBAuth, likePost);
app.get("/post/:postId/unlike", FBAuth, unlikePost);
app.delete("/post/:postId", FBAuth, deletePost);

exports.api = functions.https.onRequest(app);

// Create Notification on like
exports.createNotificationOnLike = functions.firestore
  .document("likes/{id}")
  .onCreate((snapshot) => {
    return db
      .doc(`/posts/${snapshot.data().postId}`)
      .get()
      .then((doc) => {
        if (
          doc.exists &&
          doc.data().userHandle !== snapshot.data().userHandle
        ) {
          return db
            .doc(`/notifications/${snapshot.id}`)
            .set({
              createdAt: timeStamp,
              recipient: doc.data().userHandle,
              sender: snapshot.data().userHandle,
              type: "like",
              read: false,
              postId: doc.id,
            })
            .then(() => {
              return;
            });
        }
      })
      .catch((err) => console.error(err));
  });

// Delete notification on unlike
exports.deleteNotificationOnUnLike = functions.firestore
  .document("likes/{id}")
  .onDelete((snapshot) => {
    return db
      .doc(`/notifications/${snapshot.id}`)
      .delete()
      .catch((err) => {
        console.error(err);
        return;
      });
  });
// Create Notification on Comment
exports.createNotificationOnComment = functions.firestore
  .document("comments/{id}")
  .onCreate((snapshot) => {
    return db
      .doc(`/posts/${snapshot.data().postId}`)
      .get()
      .then((doc) => {
        if (
          doc.exists &&
          doc.data().userHandle !== snapshot.data().userHandle
        ) {
          return db
            .doc(`/notifications/${snapshot.id}`)
            .set({
              createdAt: timeStamp,
              recipient: doc.data().userHandle,
              sender: snapshot.data().userHandle,
              type: "comment",
              read: false,
              postId: doc.id,
            })
            .then(() => {
              return;
            });
        }
      })
      .catch((err) => console.error(err));
  });

// On post Delete
exports.onPostDelete = functions.firestore
  .document("/posts/{postId}")
  .onDelete((snapshot, context) => {
    const postId = context.params.postId;
    const batch = db.batch();
    return db
      .collection("comments")
      .where("postId", "==", postId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          batch.delete(db.doc(`/comments/${doc.id}`));
        });
        return db
          .collection("notifications")
          .where("postId", "==", postId)
          .get();
      })
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.doc(`/notifications/${doc.id}`));
        });
        return db.collection("likes").where("postId", "==", postId).get();
        // return batch.commit();
      })
      .then((data) => {
        data.forEach((doc) => {
          batch.delete(db.doc(`/likes/${doc.id}`));
        });
        return batch.commit();
      })
      .catch((err) => console.error(err));
  });

// On User Image Change
exports.onUserImageChange = functions.firestore
  .document("/users/{userId}")
  .onUpdate((change) => {
    // console.log(change.before.data());
    // console.log(change.after.data());
    if (change.before.data().imageUrl !== change.after.data().imageUrl) {
      // console.log("image has changed");
      const batch = db.batch();
      return db
        .collection("posts")
        .where("userHandle", "==", change.before.data().handle)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            const post = db.doc(`/posts/${doc.id}`);
            batch.update(post, { userImage: change.after.data().imageUrl });
          });
          return db
            .collection("comments")
            .where("userHandle", "==", change.before.data().handle)
            .get();
        })
        .then((data) => {
          data.forEach((doc) => {
            const comment = db.doc(`/comments/${doc.id}`);
            batch.update(comment, { userImage: change.after.data().imageUrl });
          });
          return batch.commit();
        });
    } else return true;
  });
