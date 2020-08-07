import React from "react";
import { Layout, Popconfirm, message } from "antd";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userActions";
const { Header } = Layout;

const Title = ({ title, logoutUser }) => {
  function confirm() {
    logoutUser();
    message.success("Logged out successfully");
  }
  return (
    <div className="d-flex align-items-center justify-content-between">
      <Header className="text-dark">{title}</Header>
      <Popconfirm
        title="Are you sure to logout?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <span style={{ cursor: "pointer" }} className="mr-4 text-danger">
          Logout
        </span>
      </Popconfirm>
    </div>
  );
};
const mapActionsToProps = {
  logoutUser,
};
export default connect(null, mapActionsToProps)(Title);
