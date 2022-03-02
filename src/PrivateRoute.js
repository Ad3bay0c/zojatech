import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./context/Auth/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, token } = useContext(AuthContext);

  if (token === null) {
    return <Navigate to="/login" />;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
