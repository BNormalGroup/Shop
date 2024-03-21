import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./utils/i18n.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<>...</>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </Suspense>,
);
