const initialState = {
  isAuth: false,
  accessToken: null,
  userId: null,
  isError: false,
  isAuthLoading: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export { reducer };
