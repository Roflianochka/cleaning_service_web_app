import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import ServiceStore from "./store/ServiceStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
export const Context = createContext(null);

root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      service: new ServiceStore(),
    }}
  >
    <App />
  </Context.Provider>
);
