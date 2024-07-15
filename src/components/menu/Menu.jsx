import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa";
import "./menu.scss";

function Menu({ setClose }) {
  return (
    <div className="products__top">
      <div className="products__top__left">
        <button onClick={() => setClose((p) => !p)}>
          <TfiMenu />
        </button>
        {/* <div>
          <input type="text" />
        </div> */}
      </div>

      <div className="products__top__right">
        <p className="products__top__title">John doe</p>
        <FaRegUserCircle />
      </div>
    </div>
  );
}

export default Menu;
