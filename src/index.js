import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import App from "./app/app";
=======
import App from "./App";
import { BrowserRouter } from "react-router-dom";
>>>>>>> 1f0ea68e52a4e91bc48c664679b329828d373f8a
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 // <React.StrictMode>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
//  </React.StrictMode>
);
