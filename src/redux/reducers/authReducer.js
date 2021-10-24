const initState = {
  isLogged: false,
  user: null,
  error: null,
};

export const auth = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case "LOGIN_ERR":
      return {
        ...state,
        error: (state.error = action.payload),
      };
    case "REGISTER":
      return state;

    case "SET_USER":
      return {
        user: (state.user = action.payload),
      };
    case "DEL_USER":
      return {
        user: (state.user = null),
      };
    default:
      return state;
  }
};
