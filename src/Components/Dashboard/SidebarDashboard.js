import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarDashboard.css";

export default function SidebarDashboard() {
   return (
      <div className="dashboard-side">
         <ul className="dashboard-sidebar__list">
            {/* want to add dashboard-sidebar__items--active */}

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
         </ul>
      </div>
   );
}
