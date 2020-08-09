import React from "react";
import { Card, Skeleton } from "antd";
import Users from "../Users/Users";
import Search from "../Search/Search";
import { connect } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
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
          {props.credentials.imageUrl ? (
            <>
              <Avatar
                src={imageUrl}
                className="img-fluid  rounded-circle"
                style={{ width: "40px" }}
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
