import {
  SET_POSTS,
  CREATE_POST,
  LIKE_POST,
  UNLIKE_POST,
  SET_POST,
  SUBMIT_COMMENT,
  DELETE_POST,
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
      state.post = { ...state.post, likeCount: action.payload.likeCount };
      return { ...state };
    case SET_POST:
      return {
        ...state,
        post: action.payload,
      };

    case SUBMIT_COMMENT:
      let index_comment = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[index_comment] = {
        ...state.posts[index_comment],
        commentCount: state.posts[index_comment].commentCount + 1,
      };
      state.post = {
        ...state.post,
        commentCount: state.posts[index_comment].commentCount,
      };
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments],
        },
      };
    case DELETE_POST:
      let deleted_index = state.posts.findIndex(
        (post) => post.postId === action.payload
      );
      state.posts.splice(deleted_index, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
}
