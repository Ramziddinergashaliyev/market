import React from "react";
import "./module.scss";

function Module({ children, width, close, bg }) {
  return (
    <>
      <div
        style={{ backgroundColor: bg }}
        onClick={() => close(false)}
        className="overlay"
      ></div>
      <div style={{ width }} className="model">
        {children}
      </div>
    </>
  );
}

export default Module;
