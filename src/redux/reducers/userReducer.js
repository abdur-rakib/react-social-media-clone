const initialState = {
  authenticated: true,
  credentials: {},
  loading: false,
  likes: [],
  posts: [],
  notifications: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
