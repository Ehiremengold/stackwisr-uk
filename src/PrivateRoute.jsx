import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.signIn.isAuthenticated);
  console.log("Authenticated:", isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/auth/login" />;
};

export default PrivateRoute;