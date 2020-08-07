import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER } from "../types";

const initialState = {
  authenticated: false,
  credentials: {},
  likes: [],
  posts: [],
  notifications: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      };
    case SET_USER:
      return {
        authenticated: true,
        ...action.payload,
      };
    default:
      return state;
  }
}