import React from "react";
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

import { likePost, unlikePost } from "../../redux/actions/dataActions";
const { Meta } = Card;

const Post = ({
  post: {
    userHandle,
    likeCount,
    commentCount,
    body,
    createdAt,
    userImage,
    postId,
  },
  user,
  likePost,
  unlikePost,
}) => {
  const likedPost = () => {
    if (
      user.likes.length !== 0 &&
      user.likes.find((like) => like.postId === postId)
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
    <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
      <Meta
        avatar={<Avatar src={userImage} />}
        title={userHandle}
        description={body}
      />
      <small className="ml-5 mt-4 font-italic">
        - Posted
        <span className="ml-1">
          {moment(createdAt).startOf("minutes").fromNow()}
        </span>
      </small>
      <Divider />
      <div className="actions">
        <div className="d-flex">
          {likedPost() === true ? (
            <Badge count={likeCount}>
              <HeartFilled
                style={{ fontSize: "20px" }}
                onClick={() => unlikePost(postId)}
              />
            </Badge>
          ) : (
            <Badge showZero count={likeCount}>
              <HeartOutlined
                style={{ fontSize: "20px" }}
                onClick={() => likePost(postId)}
              />
            </Badge>
          )}
        </div>

        <div className="d-flex">
          <Badge showZero count={commentCount}>
            <MessageOutlined style={{ fontSize: "20px" }} />
          </Badge>
        </div>
        <ShareAltOutlined style={{ fontSize: "20px" }} />

        <Popover content={content} trigger="hover">
          <MoreOutlined style={{ fontSize: "20px" }} />
        </Popover>
      </div>
    </Card>
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
};

export default connect(mapStateToProps, mapActionsToProps)(Post);
