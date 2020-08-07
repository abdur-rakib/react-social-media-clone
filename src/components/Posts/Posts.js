import React, { useEffect } from "react";
import Post from "../Post/Post";
import { connect } from "react-redux";

const Posts = (props) => {
  console.log(props.user);
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Posts);
