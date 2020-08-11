import React, { useEffect, useState } from "react";
import { Card, Popover, Divider, Button, Avatar, Badge } from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
  MoreOutlined,
  HeartFilled,
} from "@ant-design/icons";
import moment from "moment";
import { connect } from "react-redux";

import { likePost, unlikePost, getPost } from "../../redux/actions/dataActions";
import Modal from "antd/lib/modal/Modal";
import PostDetails from "../PostDetails/PostDetails";
const { Meta } = Card;

const Post = ({ post, user, likePost, unlikePost, getPost }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {}, [post.likeCount]);
  const likedPost = () => {
    if (
      user.likes.length !== 0 &&
      user.likes.find((like) => like.postId === post.postId)
    )
      return true;
    else return false;
  };

  // const likePost = () => {
  //   likePost(postId);
  // };
  // const unlikePost = () => {
  //   unlikePost(postId);
  // };
  const content = (
    <div className="d-flex flex-column">
      <Button size="small" type="text">
        Edit
      </Button>
      <Button size="small" type="text">
        Delete
      </Button>
      <Button size="small" type="text">
        Save
      </Button>
    </div>
  );
  return (
    <>
      <Modal
        style={{ top: 20 }}
        visible={visible}
        onCancel={() => setVisible(false)}
        className="post__modal"
      >
        <PostDetails />
      </Modal>
      <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
        <Meta
          avatar={<Avatar src={post.userImage} />}
          title={post.userHandle}
          description={post.body}
        />
        <small className="ml-5 mt-4 font-italic">
          - Posted
          <span className="ml-1">
            {moment(post.createdAt).startOf("minutes").fromNow()}
          </span>
        </small>
        <Divider />
        <div className="actions">
          <div className="d-flex">
            {likedPost() === true ? (
              <Badge count={post.likeCount}>
                <HeartFilled
                  disabled={true}
                  style={{ fontSize: "20px" }}
                  onClick={() => unlikePost(post.postId)}
                />
              </Badge>
            ) : (
              <Badge showZero count={post.likeCount}>
                <HeartOutlined
                  style={{ fontSize: "20px" }}
                  onClick={() => likePost(post.postId)}
                />
              </Badge>
            )}
          </div>

          <div
            className="d-flex"
            onClick={() => {
              setVisible(true);
              getPost(post.postId);
            }}
          >
            <Badge showZero count={post.commentCount}>
              <MessageOutlined style={{ fontSize: "20px" }} />
            </Badge>
          </div>
          <ShareAltOutlined style={{ fontSize: "20px" }} />

          <Popover content={content} trigger="hover">
            <MoreOutlined style={{ fontSize: "20px" }} />
          </Popover>
        </div>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  };
};
const mapActionsToProps = {
  likePost,
  unlikePost,
  getPost,
};

export default connect(mapStateToProps, mapActionsToProps)(Post);
