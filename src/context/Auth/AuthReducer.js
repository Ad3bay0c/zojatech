import {
  LOAD_ORGANIZATION,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REMOVE_ALERT,
  REMOVE_ERROR,
  SET_ALERT,
  SET_ERROR,
} from "../type";

const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ORGANIZATION:
      return {
        ...state,
        user: action.payload,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        alert: {
          msg: action.payload.message,
          type: "success",
        },
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("p", action.payload.data.user.id);
      return {
        ...state,
        user: action.payload.data.user,
        alert: {
          msg: "Login Successful",
          type: "success",
        },
        isAuthenticated: true,
        token: action.payload.data.token,
        id: action.payload.data.user.id,
      };
    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
