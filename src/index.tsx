import { createRoot } from "react-dom/client";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import PageWrapper from "./components/wrappers/PageWrapper";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PageWrapper>
          <App />
        </PageWrapper>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
reportWebVitals(undefined);
