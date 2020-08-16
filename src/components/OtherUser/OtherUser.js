import React from "react";
import { connect } from "react-redux";
import { Skeleton, Button } from "antd";
import {
  EnvironmentOutlined,
  MonitorOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import moment from "moment";
import Post from "../Post/Post";
import { useEffect } from "react";

const OtherUser = (props) => {
  useEffect(() => {
    return () => {
      console.log("Unmount user");
    };
  }, []);
  return (
    <div>
      {!props.otherUser ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <>
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-sm-6 col-lg-3">
              <div>
                <img
                  src={props.otherUser.credentials.imageUrl}
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <small className="text-center my-2 d-block">
                  <CalendarOutlined /> Joined{" "}
                  {moment(props.otherUser.credentials.createdAt).format(
                    "MMM Do YY"
                  )}
                </small>
              </div>
            </div>
            <div className="col-lg-7 ml-3">
              <div className="user__info">
                <div className="user__name d-flex justify-content-center">
                  <h4 className="mr-2">{props.otherUser.credentials.handle}</h4>
                  <Button size="small" type="primary">
                    Send Message
                  </Button>
                </div>
                <div className="others__info d-flex justify-content-between mx-5 mx-md-4">
                  <p>
                    <span className="font-weight-bold">40</span> posts
                  </p>
                  <p>
                    <span className="font-weight-bold">154</span> followers
                  </p>
                  <p>
                    <span className="font-weight-bold">256</span> following
                  </p>
                </div>
                {props.otherUser.credentials.bio && (
                  <div className="user__bio " style={{ marginTop: "-15px" }}>
                    {props.otherUser.credentials.bio}
                  </div>
                )}

                {props.otherUser.credentials.website && (
                  <div className="user__website d-flex align-items-center justify-content-center">
                    <MonitorOutlined />
                    <a className="ml-1" href="abdur-rakib.github.io/portfolio">
                      {props.otherUser.credentials.website}
                    </a>
                  </div>
                )}
                {props.otherUser.credentials.location && (
                  <div className="user__location d-flex align-items-center justify-content-center">
                    <EnvironmentOutlined />
                    <span className="ml-1">
                      {props.otherUser.credentials.location}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {props.otherUser.credentials ? (
            <div className="mt-3">
              <h4 className="mx-auto text-center">
                {props.otherUser.credentials.handle}'s post
              </h4>
              {props.otherUser.posts?.length === 0 ? (
                <h5 className="text-center mt-2">
                  {props.otherUser.credentials.handle} has no posts
                </h5>
              ) : (
                props.otherUser.posts?.map((otherPost) => (
                  <Post
                    key={otherPost.postId}
                    post={props.data.posts.find(
                      (post) => post.postId === otherPost.postId
                    )}
                  />
                ))
              )}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    otherUser: state.user.otherUser,
    UI: state.UI,
    data: state.data,
  };
};

export default connect(mapStateToProps)(OtherUser);
