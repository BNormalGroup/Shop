import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IUserAuth } from "../Authorization/types/types.ts";
import { store } from "../../app/store.ts";
import { auth, logout } from "../../redux/userSlice.ts";
import { jwtDecode } from "jwt-decode";
import { deleteLocalStorage } from "../../utils/localStorageUtils.ts";

const AuthVerifyComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("authToken");
      if (typeof token === "string") {
        const { exp } = jwtDecode(token);
        if (exp) {
          const expirationTime = exp * 1000 - 60000;
          if (!(Date.now() >= expirationTime)) {
            const decoded = jwtDecode<IUserAuth>(token);
            store.dispatch(auth(decoded));
          } else {
            store.dispatch(logout());
            deleteLocalStorage("authToken");
          }
        }
      }
    };

    checkToken();
  }, [location, navigate]);

  return <div></div>;
};

export default AuthVerifyComponent;
