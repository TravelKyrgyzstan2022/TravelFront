import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SideBar from "./components/SideBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <Navbar /> */}
        <div className="side-bar">
        <SideBar/>
          <div className="dashboard">
        <App />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
