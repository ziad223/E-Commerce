import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store = {store}>
  <Auth0Provider
    domain="dev-dtic1at3lbrbq21y.us.auth0.com"
    clientId="6NVOgYoEJqyif0yTkQ1G1kFdJSu0RBYR"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
  </Provider>
);
