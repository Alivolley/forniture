import React from "react";
import { NavLink } from "react-router-dom";
import "./DashboardCollapse.css";

export default function DashboardCollapse() {
   let firstClass = "dashboard-collapse__items";
   return (
      <div className="dashboard-collapse">
         <ul className="dashboard-collapse__list">
            <NavLink
               to="/dashboard"
               className={(some) => {
                  return some.isActive ? "dashboard-collapse__items active" : "dashboard-collapse__items";
               }}
            >
               مدیر سایت
            </NavLink>
            <NavLink to="/dashboard-productlist" className={firstClass}>
               لیست محصولات
            </NavLink>
            <NavLink to="/dashboard-productadd" className={firstClass}>
               اضافه کردن محصول جدید
            </NavLink>
            <NavLink to="/dashboard-productedit" className={firstClass}>
               ویرایش کردن محصول
            </NavLink>
            <NavLink to="/dashboard-productdelete" className={firstClass}>
               حذف کردن یک محصول
            </NavLink>
         </ul>
      </div>
   );
}
