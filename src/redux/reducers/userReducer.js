import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  SET_USERS,
  LIKE_POST,
  UNLIKE_POST,
  CHANGE_IMAGE,
} from "../types";

const initialState = {
  authenticated: false,
  credentials: {},
  likes: [],
  posts: [],
  notifications: [],
  users: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LIKE_POST:
      let index_like = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[index_like] = action.payload;
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: action.payload.handle,
            postId: action.payload.postId,
          },
        ],
      };
    case UNLIKE_POST:
      let index_unlike = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[index_unlike] = action.payload;
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.postId !== action.payload.postId
        ),
      };
    case CHANGE_IMAGE:
      return {
        ...state,
        credentials: { ...state.credentials, imageUrl: action.payload },
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
