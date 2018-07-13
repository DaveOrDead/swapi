// Vendor
import React from "react";
import ReactDOM from "react-dom";
// Assets
import "normalize.css";
import "./assets/css/reset.css";
import "./assets/css/helpers.css";
import "./assets/css/index.css";
// Containers
import { App } from "./containers";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
