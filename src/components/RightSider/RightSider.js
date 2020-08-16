import React from "react";
import { Card, Skeleton, Button } from "antd";
import Search from "../Search/Search";
import { connect } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
import { useEffect } from "react";
import { allUsers, getOtherUser } from "../../redux/actions/userActions";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";
import OtherUser from "../OtherUser/OtherUser";
import store from "../../redux/store";
import { CLEAR_USER } from "../../redux/types";

const RightSider = (props) => {
  const { handle, imageUrl } = props.credentials;

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (handle) {
      props.allUsers(handle);
    }
    // eslint-disable-next-line
  }, [handle]);
  const getUserDetails = (handle) => {
    props.getOtherUser(handle);
  };

  const clearUser = () => {
    setVisible(false);
    store.dispatch({ type: CLEAR_USER });
  };

  const users = props.user.users ? (
    props.user.users.map((user) => (
      <div
        key={user.handle}
        style={{ cursor: "pointer" }}
        className="user mx-4 mb-2 d-flex align-items-center justify-content-between"
      >
        <div className="d-flex align-items-center">
          <Avatar src={user.imageUrl} />
          <span
            onClick={() => {
              getUserDetails(user.handle);
              setVisible(true);
            }}
            className="user__name ml-1"
          >
            {user.handle}
          </span>
        </div>
        <div className="user__follow">
          <Button size="small">Follow</Button>
        </div>
      </div>
    ))
  ) : (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
  return (
    <div className="ml-4 ml-md-2">
      <Modal
        style={{ top: 20 }}
        visible={visible}
        onCancel={clearUser}
        className="post__modal"
      >
        <OtherUser />
      </Modal>
      <Card
        bordered={false}
        className="py-3 "
        style={{ minHeight: "200vh", position: "fixed" }}
      >
        <div className="text-center mb-4">
          <Search />
        </div>
        <div className="myProfile d-flex align-items-center justify-content-center">
          {props.credentials.imageUrl ? (
            <>
              <Avatar
                src={imageUrl}
                className="img-fluid  rounded-circle"
                style={{ width: "50px", height: "50px" }}
              />
              <h5 className="ml-3">{handle}</h5>
            </>
          ) : (
            <>
              <Skeleton.Button
                active
                size="large"
                shape="circle"
                className="mr-2"
              />
              <Skeleton.Button active size="large" shape="round" />
            </>
          )}
        </div>

        <div className="users">
          <h6 className="mt-2 mb-3 font-weight-light text-center mt-3">
            People you may know
          </h6>
          {users}
        </div>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    credentials: state.user.credentials,
    user: state.user,
  };
};

const mapActionsToProps = {
  allUsers,
  getOtherUser,
};

export default connect(mapStateToProps, mapActionsToProps)(RightSider);
