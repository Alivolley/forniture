import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarDashboard.css";

export default function SidebarDashboard() {
   return (
      <div className="dashboard-side">
         <ul className="dashboard-sidebar__list">
            <NavLink to="/dashboard" className="dashboard-sidebar__items dashboard-sidebar__items--active">
               مدیر سایت
            </NavLink>
            <NavLink to="/dashboard" className="dashboard-sidebar__items">
               لیست محصولات
            </NavLink>
            <NavLink to="/dashboard" className="dashboard-sidebar__items">
               اضافه کردن محصول جدید
            </NavLink>
            <NavLink to="/dashboard" className="dashboard-sidebar__items">
               ویرایش کردن محصول
            </NavLink>
            <NavLink to="/dashboard" className="dashboard-sidebar__items">
               حذف کردن یک محصول
            </NavLink>
         </ul>
      </div>
   );
}
