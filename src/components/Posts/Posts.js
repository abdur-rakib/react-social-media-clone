import React, { useEffect } from "react";
import Post from "../Post/Post";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/dataActions";
import PostsSkeleton from "../../util/PostsSkeleton";

const Posts = (props) => {
  useEffect(() => {
    props.getPosts();
    // eslint-disable-next-line
  }, []);
  // console.log(props.user);
  const renderPosts = props.data.posts ? (
    props.data.posts.length !== 0 ? (
      props.data.posts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      <h5 className="text-center mt-1">No posts to show</h5>
    )
  ) : (
    <PostsSkeleton />
  );
  return renderPosts;
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  };
};
const mapActionsToProps = { getPosts };

export default connect(mapStateToProps, mapActionsToProps)(Posts);
