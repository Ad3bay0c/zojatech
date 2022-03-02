import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useLayoutEffect } from "react";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Signin from "./pages/Auth/signin";
import Successful from "./pages/Auth/registration_successful";
import AuthState from "./context/Auth/AuthState";
import Alert from "./components/Alert/Alert";
import Error from "./components/Alert/Error";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./context/Auth/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthState>
        <Alert></Alert>
        <Error></Error>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/successful" element={<Successful />} />
        </Routes>
      </AuthState>
    </Router>
  );
};

export default App;
