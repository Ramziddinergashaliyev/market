import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import { MdDashboard, MdOutlineRestore } from "react-icons/md";
import { GiSilverBullet } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { LuUserPlus } from "react-icons/lu";
import { useGetAdminsQuery } from "../../context/api/adminApi";
import { CiMenuKebab } from "react-icons/ci";
import { LiaWarehouseSolid } from "react-icons/lia";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const { data: prifile } = useGetAdminsQuery();
  console.log(prifile?.innerData?.user);

  let prifileData = prifile?.innerData?.user;

  return (
    <section className="sidebar">
      <div>
        <div className="sidebar__top">
          <button>{prifileData?.fname.slice(0, 1)}</button>
          <div className="sidebar__top__full">
            <h2>{prifileData?.fname}</h2>
            <button>
              <CiMenuKebab />
            </button>
          </div>
        </div>
        <ul className="sidebar__item">
          <li className="sidebar__list">
            <NavLink to={"customer"} className={"sidebar__left__text"}>
              <FaRegUser />
              Mijoz
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"create"} className={"sidebar__left__text"}>
              <LuUserPlus />
              Mijoz Yaratish
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"seller"} className={"sidebar__left__text"}>
              <GiSilverBullet />
              Sotuvchi
            </NavLink>
          </li>
          <li className="sidebar__list">
            <NavLink to={"store"} className={"sidebar__left__text"}>
              <LiaWarehouseSolid />
              Ombor
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar__btns">
        <div className="sidebar__btns__title">
          <IoMdSettings />
          <p>Sozlamalar</p>
        </div>
        <div className="sidebar__btns__title" onClick={handleLogout}>
          <CiLogout />
          <p>Chiqish</p>
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
