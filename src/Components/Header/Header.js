import React, { useState } from "react";
import "./Header.css";
import { AiOutlineInstagram, AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuMotion } from "react-icons/cg";
import { FaTwitter, FaUserAlt } from "react-icons/fa";
import { BsWhatsapp, BsTelegram, BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import CollapseMenu from "./CollapseMenu";

export default function Header() {
   const [show, setShow] = useState(false);
   const openTheMenu = () => {
      setShow(true);
   };
   const closeMenu = () => {
      setShow(false);
   };

   return (
      <>
         <header className="header">
            <div className="social">
               <section className="social-nav containers">
                  <div className="social_icons">
                     <a href="#" className="social-nav__link">
                        <AiOutlineInstagram className="social-nav_icon" />
                     </a>
                     <a href="#" className="social-nav__link">
                        <FaTwitter className="social-nav_icon" />
                     </a>
                     <a href="#" className="social-nav__link">
                        <BsWhatsapp className="social-nav_icon" />
                     </a>
                     <a href="#" className="social-nav__link">
                        <BsTelegram className="social-nav_icon" />
                     </a>
                  </div>

                  <div className="address-phone">
                     <p className="address-text">
                        کرمانشاه ، شهرک صنعتی بیستون
                        <HiOutlineLocationMarker className="address-icon" />
                     </p>
                     <p className="phone-text">
                        ۰۹۳۸۳۹۳۵۷۱۹
                        <BsFillTelephoneFill className="phone-icon" />
                     </p>
                  </div>
               </section>
            </div>
            <section className="menu containers">
               <ul className="menu-leftSide">
                  <li className="menu-leftSide__items">
                     <button className="menu-leftSide__btn">
                        <BsSearch className="menu-leftSide__icon" />
                     </button>
                  </li>
                  <li className="menu-leftSide__items">
                     <Link to="/">
                        <button className="menu-leftSide__btn">
                           <AiOutlineShoppingCart className="menu-leftSide__icon" />
                        </button>
                     </Link>
                  </li>
                  <li className="menu-leftSide__items">
                     <Link to="/account">
                        <button className="menu-leftSide__btn">
                           <FaUserAlt className="menu-leftSide__icon" />
                        </button>
                     </Link>
                  </li>
               </ul>
               <ul className="menu-rightSide">
                  <li className="menu-rightSide__items">
                     <Link to="/" className="menu-rightSide__link">
                        درباره ما
                     </Link>
                  </li>
                  <li className="menu-rightSide__items">
                     <Link to="/" className="menu-rightSide__link">
                        تماس با ما
                     </Link>
                  </li>
                  <li className="menu-rightSide__items">
                     <Link to="/" className="menu-rightSide__link">
                        دسته بندی ها
                     </Link>
                  </li>
                  <li className="menu-rightSide__items">
                     <Link to="/" className="menu-rightSide__link">
                        محصولات
                     </Link>
                  </li>
                  <li className="menu-rightSide__items">
                     <Link to="/" className="menu-rightSide__link">
                        صفحه اصلی
                     </Link>
                  </li>
                  <img className="menu-logo" src="pics/logoBig.png" alt="" />
               </ul>
               <button className="menu-opener" onClick={openTheMenu}>
                  <CgMenuMotion />
               </button>
            </section>
         </header>
         <CollapseMenu showState={show} setShowState={closeMenu}></CollapseMenu>
      </>
   );
}
