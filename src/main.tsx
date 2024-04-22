import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./utils/i18n.ts";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { auth } from "./redux/userSlice.ts";
import { jwtDecode } from "jwt-decode";
import { IUserAuth } from "./components/Authorization/types/types.ts";

const token = localStorage.getItem("authToken");
if (typeof token === "string") {
  const decoded = jwtDecode<IUserAuth>(token);
  store.dispatch(auth(decoded));
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<>...</>}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>,
);
