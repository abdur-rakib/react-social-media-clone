import { SET_POSTS } from "../types";

const initialState = {
  posts: [],
  post: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}
