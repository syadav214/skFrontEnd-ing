import React from "react";
import ReactDOM from "react-dom";
import { Ship, Cost } from "./src";

ReactDOM.render(
  <React.Fragment>
    <Ship />
    <br />
    <Cost />
  </React.Fragment>,
  document.getElementById("root")
);
