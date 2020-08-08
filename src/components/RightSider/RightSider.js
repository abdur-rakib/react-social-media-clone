import React from "react";
import { Card } from "antd";
import Users from "../Users/Users";
import Search from "../Search/Search";
import { connect } from "react-redux";
const RightSider = (props) => {
  const { handle, imageUrl } = props.credentials;
  return (
    <div className="ml-4 ml-md-2">
      <Card
        bordered={false}
        className="py-3 "
        style={{ minHeight: "200vh", position: "fixed" }}
      >
        <div className="text-center mb-4">
          <Search />
        </div>
        <div className="myProfile d-flex align-items-center justify-content-center">
          <img
            src={imageUrl}
            alt=""
            className="img-fluid  rounded-circle"
            style={{ width: "60px" }}
          />
          <h5 className="ml-3">{handle}</h5>
        </div>

        <Users />
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    credentials: state.user.credentials,
  };
};

export default connect(mapStateToProps)(RightSider);
