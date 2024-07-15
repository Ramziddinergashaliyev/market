import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { FaRegUserCircle, FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "./menu.scss";

function Menu({ setClose }) {
  return (
    <div className="products__top">
      <div className="products__top__left">
        <button onClick={() => setClose((p) => !p)}>
          <TfiMenu />
        </button>
        <div className="products__top__left-form">
          <CiSearch />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="products__top__right">
        <FaBell />
        <select name="" id="">
          <option value="Uzb">Uzb</option>
          <option value="Eng">Eng</option>
          <option value="Rus">Rus</option>
        </select>
        <div className="products__top__right__acc">
          <FaRegUserCircle />
          <p className="products__top__title">John doe</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
