import Cookies from "js-cookie";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SidebarDashboard.css";

export default function SidebarDashboard() {
   const navigate = useNavigate();

   const logout = () => {
      Cookies.remove("login");
      navigate("/");
   };
   return (
      <div className="dashboard-side">
         <ul className="dashboard-sidebar__list">
            <NavLink to="/dashboard" className="dashboard-sidebar__items">
               مدیر سایت
            </NavLink>
            <NavLink to="/dashboard-productlist" className="dashboard-sidebar__items">
               لیست محصولات
            </NavLink>
            <NavLink to="/dashboard-productadd" className="dashboard-sidebar__items">
               اضافه کردن محصول جدید
            </NavLink>
            <NavLink to="/dashboard-productedit" className="dashboard-sidebar__items">
               ویرایش کردن محصول
            </NavLink>
            <NavLink to="/dashboard-productdelete" className="dashboard-sidebar__items">
               حذف کردن یک محصول
            </NavLink>
            <div className="dashboard-sidebar__items" onClick={logout}>
               {" "}
               خروج از حساب کاربری
            </div>
         </ul>
      </div>
   );
}
