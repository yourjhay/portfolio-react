import React, { createContext, useState } from "react";
import Cookies from "js-cookie";
import { Singin } from "../api/api";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [authUser, setUserAuth] = useState(Cookies.get("user_logged_in"));

  const signin = async (user, callback) => {
    let data = {
      username: user.username,
      password: user.password,
    };
    await Singin(data)
      .then((res) => {
        setUserAuth(res);
        Cookies.set("user_logged_in", true);
        Cookies.set("auth_token", res.token);
        callback();
      })
      .catch((error) => {
        alert("Error Signing in: " + error.response?.data?.message);
      });
  };

  const contextValue = {
    authUser,
    signin,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
