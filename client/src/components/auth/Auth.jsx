import { Navigate } from "react-router-dom";

function Auth({ element: Component, isAuthenticated, ...rest }) {
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
}

export default Auth;
