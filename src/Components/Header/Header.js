import React from "react";
import "./Header.css";
import { AiOutlineInstagram, AiOutlineShoppingCart } from "react-icons/ai";
import { FaTwitter, FaUserAlt } from "react-icons/fa";
import { BsWhatsapp, BsTelegram, BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Header() {
   return (
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
                  <button className="menu-leftSide__btn">
                     <AiOutlineShoppingCart className="menu-leftSide__icon" />
                  </button>
               </li>
               <li className="menu-leftSide__items">
                  <button className="menu-leftSide__btn">
                     <FaUserAlt className="menu-leftSide__icon" />
                  </button>
               </li>
            </ul>
            <ul className="menu-rightSide">
               <li className="menu-rightSide__items">
                  <NavLink to="/" className="menu-rightSide__link">
                     درباره ما
                  </NavLink>
               </li>
               <li className="menu-rightSide__items">
                  <NavLink to="/" className="menu-rightSide__link">
                     تماس با ما
                  </NavLink>
               </li>
               <li className="menu-rightSide__items">
                  <NavLink to="/" className="menu-rightSide__link">
                     دسته بندی ها
                  </NavLink>
               </li>
               <li className="menu-rightSide__items">
                  <NavLink to="/" className="menu-rightSide__link">
                     محصولات
                  </NavLink>
               </li>
               <li className="menu-rightSide__items">
                  <NavLink to="/" className="menu-rightSide__link">
                     صفحه اصلی
                  </NavLink>
               </li>
               <img className="menu-logo" src="pics/logoBig.png" alt="" />
            </ul>
         </section>
      </header>
   );
}
