import React, { useState } from "react";
import Post from "../Post/Post";
import { Divider, Input, Comment, List, Button } from "antd";
import { connect } from "react-redux";
import PostsSkeleton from "../../util/PostsSkeleton";
import moment from "moment";
import { submitComment } from "../../redux/actions/dataActions";

const PostDetails = (props) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      setErrors("Write something");
      setTimeout(() => {
        setErrors("");
      }, 2000);
    } else {
      const newComment = { body: comment };
      props.submitComment(props.post.postId, newComment);
      setLoading(true);
      setTimeout(() => {
        setComment("");
        setLoading(false);
      }, 2000);
    }
  };
  const renderPost = props.UI.loading ? (
    <PostsSkeleton />
  ) : (
    <>
      <Post post={props.post} />
      <div className="ml-4 pl-2 mr-4 pr-2">
        <div className="comment__details">
          <div className="comments">
            {props.post.comments && (
              <List
                className="comment-list"
                header={`${props.post.comments.length} ${
                  props.post.comments.length > 1 ? "comments" : "comment"
                }`}
                itemLayout="horizontal"
                dataSource={props.post.comments}
                renderItem={(item) => (
                  <li>
                    <Comment
                      author={item.userHandle}
                      avatar={item.userImage}
                      content={item.body}
                      datetime={moment(item.createdAt)
                        .startOf("seconds")
                        .fromNow()}
                    />
                  </li>
                )}
              />
            )}
          </div>
          <div className="comment-form">
            <Divider />
            <div className="d-flex">
              <Input
                onChange={(e) => setComment(e.target.value)}
                size="default"
                allowClear
                placeholder="type comment"
                value={comment}
              />
              <Button disabled={loading} onClick={handleSubmit}>
                Submit
              </Button>
            </div>
            {errors && <span className="text-danger">{errors}</span>}
          </div>
        </div>
      </div>
    </>
  );
  return renderPost;
};

const mapStateToProps = (state) => {
  return {
    post: state.data.post,
    posts: state.data.posts,
    UI: state.UI,
  };
};

const mapActionsToProps = { submitComment };

export default connect(mapStateToProps, mapActionsToProps)(PostDetails);
