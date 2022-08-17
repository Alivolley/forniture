import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CollapseMenu.css";
import { RiDeleteBack2Fill } from "react-icons/ri";

export default function CollapseMenu(props) {
   const closeMenu = () => {
      props.setShowState();
   };

   return (
      <section className={`hamber-menu ${props.showState ? "hamber-menu__open" : null}`}>
         <img className="hamber-menu-logo" src="pics/logo.png" alt="" />
         <RiDeleteBack2Fill className="hember-menu-closer" onClick={closeMenu}></RiDeleteBack2Fill>
         <ul className="hember-menu__list">
            <li className="hamber-menu__items">
               <NavLink to="/" className="hamber-menu__link">
                  صفحه اصلی
               </NavLink>
            </li>
            <li className="hamber-menu__items">
               <NavLink to="/" className="hamber-menu__link">
                  محصولات
               </NavLink>
            </li>
            <li className="hamber-menu__items">
               <NavLink to="/" className="hamber-menu__link">
                  دسته بندی ها
               </NavLink>
            </li>
            <li className="hamber-menu__items">
               <NavLink to="/" className="hamber-menu__link">
                  تماس با ما
               </NavLink>
            </li>
            <li className="hamber-menu__items">
               <NavLink to="/" className="hamber-menu__link">
                  درباره ما
               </NavLink>
            </li>
         </ul>
      </section>
   );
}
