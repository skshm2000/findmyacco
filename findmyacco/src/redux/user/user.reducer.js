import { LOGIN, BUTTONLOADING, ERROR } from "./user.types";

const initState = {
  isButtonLoading: false,
  isError: false,
  isLogin: true,
  ErrorMsg: "",
};

export const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case BUTTONLOADING: {
      return {
        ...state,
        isButtonLoading: true,
        ErrorMsg: "",
        isError: false,
      };
    }
    case LOGIN: {
      return {
        ...initState,
        isLogin: true,
        ErrorMsg: "",
        isError: false,
        isButtonLoading: false,
      };
    }
    case ERROR: {
      return {
        ...state,
        isButtonLoading: false,
        isError: true,
        ErrorMsg: payload,
      };
    }
    default: {
      return state;
    }
  }
};
