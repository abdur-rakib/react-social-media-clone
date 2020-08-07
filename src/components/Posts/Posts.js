import React, { useEffect } from "react";
import Post from "../Post/Post";
import Axios from "axios";
import { connect } from "react-redux";

const Posts = (props) => {
  // useEffect(() => {
  //   Axios.get(
  //     "https://cors-anywhere.herokuapp.com/https://us-central1-react-mukh-boi-project.cloudfunctions.net/api/posts"
  //   ).then((res) => {
  //     // console.log(res.data);
  //   });
  // }, []);
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
