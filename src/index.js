import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import PageWrapper from "./components/wrappers/PageWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PageWrapper>
        <App />
      </PageWrapper>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
