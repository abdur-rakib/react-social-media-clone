import { SET_LOADING, SET_POSTS } from "../types";
import axios from "axios";

export const getPosts = () => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get("/posts")
    .then((res) => {
      dispatch({ type: SET_POSTS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
