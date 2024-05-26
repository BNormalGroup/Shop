import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./utils/i18n.ts";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallBack from "./pages/default/errorBoundary/ErrorBoundaryFallBack.tsx";
import { addUserProducts } from "./redux/bagSlice.ts";
import AuthVerifyComponent from "./components/Authverify/Authverify.tsx";

const storedProductsInBag = localStorage.getItem("productsInBag");
if (storedProductsInBag) {
  store.dispatch(addUserProducts(JSON.parse(storedProductsInBag)));
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<>...</>}>
    <ErrorBoundary fallback={<ErrorBoundaryFallBack />}>
      <BrowserRouter>
        <Provider store={store}>
          <AuthVerifyComponent />
          <App />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </Suspense>,
);
