import {
  SET_LOADING,
  SET_POSTS,
  CREATE_POST,
  SET_ERRORS,
  CLEAR_LOADING,
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
