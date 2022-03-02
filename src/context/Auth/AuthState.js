import { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
  LOAD_ORGANIZATION,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REMOVE_ALERT,
  REMOVE_ERROR,
  SET_ALERT,
  SET_ERROR,
} from "../type";
import axios from "../../axios";
import { Navigate, useNavigate } from "react-router-dom";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: false,
    user: {},
    alert: null,
    errors: null,
    token: null,
  };

  const navigate = useNavigate();
  // Login User
  const LoginUser = async (email, password) => {
    try {
      const res = await axios.post("/user-login ", { email, password });
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      setTimeout(() => {
        dispatch({
          type: REMOVE_ALERT,
        });
        navigate("/");
      }, 2000);
    } catch (err) {
      dispatch({
        type: SET_ALERT,
        payload: { msg: err.response.data.message, type: "danger" },
      });
      setTimeout(() => {
        dispatch({
          type: REMOVE_ALERT,
        });
      }, 3000);
    }
  };
  // Register User
  const RegisterUser = async (user) => {
    try {
      const res = await axios.post("/register", user);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      setTimeout(() => {
        dispatch({
          type: REMOVE_ALERT,
        });
        navigate("/successful");
      }, 2000);
    } catch (err) {
      console.log(err.response.data.errors);
      dispatch({
        type: SET_ERROR,
        payload: err.response.data.errors,
      });

      setTimeout(() => {
        dispatch({
          type: REMOVE_ERROR,
        });
      }, 3000);
    }
  };
  // Logout User
  const LogoutUser = () => {
    dispatch({
      type: LOGOUT,
    });
    Navigate("/login");
  };

  // Load User
  const LoadOrganization = async () => {
    try {
      const res = await axios.get(
        `/settings/get-organization/${localStorage.getItem("p")}`
      );
      console.log(res.data);
      // dispatch({
      //   type: LOAD_ORGANIZATION,
      //   payload: res.data,
      // });
    } catch (err) {
      console.log(err.response);
    }
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        alert: state.alert,
        errors: state.errors,
        token: state.token,
        RegisterUser,
        LoginUser,
        LogoutUser,
        LoadOrganization,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
