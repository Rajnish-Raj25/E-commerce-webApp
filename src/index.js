import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-k06d1n84r6f0aj56.us.auth0.com

//WRz8e9T0rTwN45h1BBO5Lr7scpft9OT2

ReactDOM.render(
  <Auth0Provider
    domain="dev-k06d1n84r6f0aj56.us.auth0.com"
    clientId="WRz8e9T0rTwN45h1BBO5Lr7scpft9OT2"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
