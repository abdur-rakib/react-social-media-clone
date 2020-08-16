import React from "react";
import { Card, Alert } from "antd";
import { connect } from "react-redux";

import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import PostDetails from "../PostDetails/PostDetails";
import { getPost } from "../../redux/actions/dataActions";
import {
  markNotificationsRead,
  getUserData,
} from "../../redux/actions/userActions";
import moment from "moment";
import { useEffect } from "react";
import store from "../../redux/store";
const Notifications = (props) => {
  const [visible, setVisible] = useState(false);

  const readNotification = (postId, notId) => {
    setVisible(true);
    props.getPost(postId);
    props.markNotificationsRead([notId]);
  };
  useEffect(() => {
    store.dispatch(getUserData());
  }, []);

  const cancel = () => {
    store.dispatch(getUserData());
    setVisible(false);
  };

  const unReadNotifications = props.user.notifications?.filter(
    (not) => not.read === false
  );
  // console.log(unReadNotifications);
  return (
    <div>
      <Modal
        style={{ top: 20 }}
        visible={visible}
        onCancel={cancel}
        className="post__modal"
      >
        <PostDetails />
      </Modal>
      <Card className="mb-2 ml-4 mr-4 mr-md-0" style={{ minHeight: "100vh" }}>
        {unReadNotifications.length === 0 ? (
          <>
            <h4 className="text-center">No new notifications</h4>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-mukh-boi-project.appspot.com/o/undraw_new_notifications_fhvw.png?alt=media&token=59c56d2f-87d3-43e7-926b-12abcf05e8d4"
              className="img-fluid"
              alt=""
            />
          </>
        ) : (
          unReadNotifications?.map((notification) => (
            <Alert
              onClick={() =>
                readNotification(notification.postId, notification.id)
              }
              key={notification.id}
              message={`${notification.sender} ${
                notification.type === "like" ? "liked" : "commented on"
              } your post (${moment(notification.createdAt)
                .startOf("seconds")
                .fromNow()})`}
              type="success"
            />
          ))
        )}
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
  getUserData,
};
export default connect(mapStateToProps, mapActionsToProps)(Notifications);
