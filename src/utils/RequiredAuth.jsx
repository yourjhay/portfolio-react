import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, Navigate } from "react-router-dom";

const RequiredAuth = (props) => {
  const auth = useContext(AuthContext);
  const location = useLocation();

  if (!auth.authUser) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }

  return props.children;
};

export default RequiredAuth;
