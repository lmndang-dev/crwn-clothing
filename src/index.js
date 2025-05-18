import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* The BrowserRouter component wraps the entire application, enabling routing functionality */}
    {/* This allows the app to use React Router for navigation and routing */}
    {/* The BrowserRouter component is imported from the react-router-dom library */}
    <BrowserRouter>
      {/* The UserProvider component wraps the App component, providing the user context to all components within the app */}
      {/* This allows any component in the app to access the user context using the useContext hook */}
      {/* The UserProvider component is imported from the user.context file */}
      <UserProvider>
        {/* The ProductsProvider component wraps the App component, providing the products context to all components within the app */}
        {/* This allows any component in the app to access the products context using the useContext hook */}
        {/* The ProductsProvider component is imported from the products.context file */}
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
