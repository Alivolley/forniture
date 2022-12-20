import Cookies from "js-cookie";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./DashboardCollapse.css";

export default function DashboardCollapse() {
   const navigate = useNavigate();
   let firstClass = "dashboard-collapse__items";

   const logout = () => {
      Cookies.remove("login");
      navigate("/");
   };
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
            <div className={firstClass} onClick={logout}>
               خروج از حساب کاربری
            </div>
         </ul>
      </div>
   );
}
