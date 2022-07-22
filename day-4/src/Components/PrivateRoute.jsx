import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  // logic to check if a user is auth
  const { state } = useContext(AuthContext);

  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
}

export default PrivateRoute;
