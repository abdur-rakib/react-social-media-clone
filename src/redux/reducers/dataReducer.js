import {
  SET_POSTS,
  CREATE_POST,
  LIKE_POST,
  UNLIKE_POST,
  SET_POST,
  SUBMIT_COMMENT,
} from "../types";

const initialState = {
  posts: null,
  post: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case LIKE_POST:
    case UNLIKE_POST:
      let index = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[index] = action.payload;
      return { ...state };
    case SET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments],
        },
      };
    default:
      return state;
  }
}
