import { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";
const Error = () => {
  const { errors } = useContext(AuthContext);
  
  return errors && (
    <div
      className={`alert alert-danger`}
      style={{ position: "fixed", top: "50px", right: "15px", zIndex: "10000" }}
    >
      {Object
        .keys(errors)
        .map((key) => errors[key][0])
        .join("\n")}
    </div>
  );
};

export default Error;
