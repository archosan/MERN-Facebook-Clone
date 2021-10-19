import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import {AuthProvider} from './context/authContext';

ReactDom.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
