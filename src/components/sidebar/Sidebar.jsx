import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import { MdDashboard, MdOutlineRestore } from "react-icons/md";
import { GiSilverBullet } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineCustomerService } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <section className="sidebar">
      <div>
        <div className="sidebar__top">
          <MdDashboard />
          <h1>Dashboard</h1>
        </div>
        <ul className="sidebar__item">
          <li className="sidebar__list">
            <NavLink to={"customer"} className={"sidebar__left__text"}>
              <AiOutlineCustomerService />
              Customer
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"seller"} className={"sidebar__left__text"}>
              <GiSilverBullet />
              Seller
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"store"} className={"sidebar__left__text"}>
              <MdOutlineRestore />
              Store
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"create"} className={"sidebar__left__text"}>
              <MdOutlineRestore />
              Create
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar__btns">
        <div className="sidebar__btns__title">
          <IoMdSettings />
          <p>Settings</p>
        </div>
        <div className="sidebar__btns__title" onClick={handleLogout}>
          <CiLogout />
          <p>Login out</p>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
