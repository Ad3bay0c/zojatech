import { useContext, useEffect } from "react";
import AuthContext from "../../context/Auth/AuthContext";
const Alert = () => {
  const { alert, LoadOrganization } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.token) {
      LoadOrganization();
    }
    // eslint-disable-next-line
  }, []);
  return alert !== null ? (
    <div
      className={`alert alert-${alert.type}`}
      style={{ position: "fixed", top: "50px", right: "15px", zIndex: "10000" }}
    >
      {alert.msg}
    </div>
  ) : null;
};

export default Alert;
