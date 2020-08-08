import axios from "axios";
import {
  SET_LOADING,
  SET_USER,
  CLEAR_LOADING,
  SET_UNAUTHENTICATED,
  SET_ERRORS,
  SET_AUTHENTICATED,
} from "../types";
import { message } from "antd";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: SET_AUTHENTICATED });
      history.push("/");
      message.success("Logged in successfully");
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .post("/signup", newUserData)
    .then((res) => {
      // setAuthorizationHeader(res.data.token);
      // dispatch(getUserData());
      history.push("/login");
      message.success("Registered successfully");
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getUserData = () => (dispatch) => {
  axios
    .get("/user")
    .then((res) => {
      dispatch({ type: SET_USER, payload: res.data });
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => console.log(err));
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

// edit user details
export const editUserDetails = (userDetails) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .post("/user", userDetails)
    .then(() => {
      dispatch(getUserData());
      message.success("User details updated successfully");
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
