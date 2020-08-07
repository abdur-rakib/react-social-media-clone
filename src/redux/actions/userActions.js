import axios from "axios";
import { SET_LOADING, SET_USER, CLEAR_LOADING } from "../types";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .post("/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      history.push("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios.post("/signup", newUserData).then((res) => {
    setAuthorizationHeader(res.data.token);
    dispatch(getUserData());
    history.push("/");
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

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
