import React from "react";
import { Card, Alert } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";

import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import PostDetails from "../PostDetails/PostDetails";
import { getPost } from "../../redux/actions/dataActions";
import { markNotificationsRead } from "../../redux/actions/userActions";
import moment from "moment";
const Notifications = (props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log(props.user.notifications);
    // eslint-disable-next-line
  }, []);

  const readNotification = (id) => {
    setVisible(true);
    props.getPost(id);
    props.markNotificationsRead([id]);
  };
  return (
    <div>
      <Modal
        style={{ top: 20 }}
        visible={visible}
        onCancel={() => setVisible(false)}
        className="post__modal"
      >
        <PostDetails />
      </Modal>
      <Card className="mb-2 ml-4 mr-4 mr-md-0" style={{ minHeight: "100vh" }}>
        {props.user.notifications?.map((notification, index) => (
          <Alert
            onClick={() => readNotification(notification.postId)}
            key={index}
            message={`${notification.sender} ${
              notification.type === "like" ? "liked" : "commented on"
            } your post (${moment(notification.createdAt)
              .startOf("seconds")
              .fromNow()})`}
            type="success"
          />
        ))}
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionsToProps = {
  getPost,
  markNotificationsRead,
};
export default connect(mapStateToProps, mapActionsToProps)(Notifications);
