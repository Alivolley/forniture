import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./CollapseMenu.css";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

export default function CollapseMenu(props) {
   const [showCat, setShowCat] = useState(false);

   const closeMenu = () => {
      props.setShowState();
   };

   return (
      <section className={`hamber-menu ${props.showState ? "hamber-menu__open" : null}`}>
         <img className="hamber-menu-logo" src="/pics/logo.png" alt="" />
         <RiDeleteBack2Fill className="hember-menu-closer" onClick={closeMenu}></RiDeleteBack2Fill>
         <ul className="hember-menu__list">
            <li className="hamber-menu__items">
               <NavLink to="/" className="hamber-menu__link">
                  صفحه اصلی
               </NavLink>
            </li>
            <li className="hamber-menu__items">
               <NavLink to="/allproducts" className="hamber-menu__link">
                  محصولات
               </NavLink>
            </li>
            <li className="hamber-menu__items">
               <button to="/" className="hamber-menu__select" onClick={() => setShowCat((prev) => (prev = !prev))}>
                  <IoMdArrowDropdown className="hamber-menu__select--icon"></IoMdArrowDropdown> دسته بندی ها
                  {showCat && (
                     <div className="hamber-menu__options">
                        <Link to="/rahati">
                           <option value="راحتی" className="hamber-menu__option">
                              راحتی
                           </option>
                        </Link>
                        <hr />
                        <Link to="/saltanati">
                           <option value="سلطنتی" className="hamber-menu__option">
                              سلطنتی
                           </option>
                        </Link>
                        <hr />
                        <Link to="/classic">
                           <option value="کلاسیک" className="hamber-menu__option">
                              کلاسیک
                           </option>
                        </Link>
                     </div>
                  )}
               </button>
            </li>
            <li className="hamber-menu__items">
               <NavLink to="/contact-us" className="hamber-menu__link">
                  تماس با ما
               </NavLink>
            </li>
         </ul>
      </section>
   );
}
