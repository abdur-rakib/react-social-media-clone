import axios from "axios";
import {
  SET_LOADING,
  SET_USER,
  CLEAR_LOADING,
  SET_UNAUTHENTICATED,
  SET_ERRORS,
  SET_AUTHENTICATED,
  SET_USERS,
  MARK_NOTIFICATIONS_READ,
  SET_OTHER_USER,
} from "../types";
import { message } from "antd";

import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDw6YTwGIpB98XJlIijYL7Id3drBBzxn1I",
  authDomain: "react-mukh-boi-project.firebaseapp.com",
  databaseURL: "https://react-mukh-boi-project.firebaseio.com",
  projectId: "react-mukh-boi-project",
  storageBucket: "react-mukh-boi-project.appspot.com",
  messagingSenderId: "168073080597",
  appId: "1:168073080597:web:9f280162311bef3a2d831c",
};

firebase.initializeApp(config);
const storage = firebase.storage();
export const db = firebase.firestore();

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
  // dispatch({ type: SET_LOADING });
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

export const uploadImage = (file, handle) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  const storageRef = storage.ref(file.name);
  const docRef = db.doc(`users/${handle}`);
  storageRef.put(file).on(
    "state_changed",
    (snapshot) => {
      dispatch(getUserData());
    },
    (err) => {},
    () => {
      storageRef.getDownloadURL().then((url) => {
        dispatch(getUserData());
        docRef.update({ imageUrl: url });
        message.success("Profile Picture Changed");
        dispatch({ type: CLEAR_LOADING });
      });
    }
  );
};

export const allUsers = (currentUser) => (dispatch) => {
  db.collection("users")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        if (doc.data().handle !== currentUser) {
          users.push(doc.data());
        }
      });
      dispatch({ type: SET_USERS, payload: users });
    });
};

export const markNotificationsRead = (notificationIds) => (dispatch) => {
  axios
    .post("/notifications", notificationIds)
    .then((res) => {
      console.log(res);
      dispatch({ type: MARK_NOTIFICATIONS_READ });
    })
    .catch((err) => console.log(err));
};

// get other user details
export const getOtherUser = (handle) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get(`/user/${handle}`)
    .then((res) => {
      dispatch({ type: SET_OTHER_USER, payload: res.data });
      dispatch({ type: CLEAR_LOADING });
    })
    .catch((err) => console.log(err));
};

export const createMessage = (handle, image, body) => {
  db.collection("messages")
    .add({
      userHandler: handle,
      body: body,
      userImage: image,
      createdAt: new Date().toISOString(),
    })
    .then((res) => console.log(res.data));
};
