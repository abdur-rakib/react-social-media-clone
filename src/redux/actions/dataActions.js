import {
  SET_LOADING,
  SET_POSTS,
  CREATE_POST,
  SET_ERRORS,
  CLEAR_LOADING,
  LIKE_POST,
  UNLIKE_POST,
} from "../types";
import axios from "axios";
import { message } from "antd";

export const getPosts = () => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get("/posts")
    .then((res) => {
      dispatch({ type: SET_POSTS, payload: res.data });
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createPost = (newPost) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .post("/createPost", newPost)
    .then((res) => {
      dispatch({ type: CREATE_POST, payload: res.data });
      dispatch({ type: CLEAR_LOADING });
      message.success("Posted successfully");
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const likePost = (postId) => (dispatch) => {
  console.log("liked");
  axios
    .get(`/post/${postId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
export const unlikePost = (postId) => (dispatch) => {
  console.log("unliked");
  axios
    .get(`/post/${postId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_POST,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
