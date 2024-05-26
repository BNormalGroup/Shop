import { createContext, useContext } from "react";

export const LoginModalContext = createContext({
  openLoginModal: () => {},
});

export const useLoginModal = () => useContext(LoginModalContext);
