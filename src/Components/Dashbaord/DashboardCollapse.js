import React from "react";
import { NavLink } from "react-router-dom";
import "./DashboardCollapse.css";

export default function DashboardCollapse() {
   return (
      <div className="dashboard-collapse">
         <ul className="dashboard-collapse__list">
            <NavLink to="/dashboard" className="dashboard-collapse__items dashboard-collapse__items--active">
               مدیر سایت
            </NavLink>
            <NavLink to="/dashboard" className="dashboard-collapse__items">
               لیست محصولات
            </NavLink>
            <NavLink to="/dashboard" className="dashboard-collapse__items">
               اضافه کردن محصول جدید
            </NavLink>
            <NavLink to="/dashboard" className="dashboard-collapse__items">
               ویرایش کردن محصول
            </NavLink>
            <NavLink to="/dashboard" className="dashboard-collapse__items">
               حذف کردن یک محصول
            </NavLink>
         </ul>
      </div>
   );
}
