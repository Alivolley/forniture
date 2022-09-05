import React, { useEffect, useState } from "react";
import "./Header.css";
import { AiOutlineInstagram, AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuMotion } from "react-icons/cg";
import { FaTwitter, FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsWhatsapp, BsTelegram, BsFillTelephoneFill, BsSearch } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { NavLink, Link, useNavigate } from "react-router-dom";
import CollapseMenu from "./CollapseMenu";

export default function Header() {
   const [show, setShow] = useState(false);
   const [basketCount, setBasketCount] = useState([]);
   const [searchBar, setSearchBar] = useState(false);
   const [searchValue, setSearchValue] = useState("");
   let naver = useNavigate();

   const openTheMenu = () => {
      setShow(true);
   };
   const closeMenu = () => {
      setShow(false);
   };

   useEffect(() => {
      fetch("https://forniture-82baf-default-rtdb.firebaseio.com/basket.json")
         .then((res) => res.json())
         .then((data) => {
            setBasketCount(Object.entries(data));
         })
         .catch((data) => {
            setBasketCount([]);
         });
   }, []);

   const searchHandler = () => {
      if (searchValue.trim()) {
         naver(`/searched/${searchValue}`);
      }
   };

   return (
      <>
         <header className="header">
            <div className="social">
               <section className="social-nav containers">
                  <div className="social_icons">
                     <Link to="/" href="#" className="social-nav__link">
                        <AiOutlineInstagram className="social-nav_icon" />
                     </Link>
                     <Link to="/" href="#" className="social-nav__link">
                        <FaTwitter className="social-nav_icon" />
                     </Link>
                     <Link to="/" href="#" className="social-nav__link">
                        <BsWhatsapp className="social-nav_icon" />
                     </Link>
                     <Link to="/" href="#" className="social-nav__link">
                        <BsTelegram className="social-nav_icon" />
                     </Link>
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
                     <button className="menu-leftSide__btn" onClick={() => setSearchBar((prev) => (prev = !prev))}>
                        <BsSearch className="menu-leftSide__icon" />
                     </button>

                     <form
                        action=""
                        className={`menu-leftSide__form ${searchBar ? "menu-leftSide__form--active" : null}`}
                        onSubmit={(event) => {
                           event.preventDefault();
                           searchHandler();
                        }}
                     >
                        <input
                           placeholder="لطفا نام مبل را وارد کنید ..."
                           type="text"
                           className="menu-leftSide__serach-input"
                           onChange={(event) => setSearchValue(event.target.value)}
                           value={searchValue}
                        />
                        <span className="menu-leftSide__submite-btn" onClick={() => searchHandler()}>
                           بگرد
                        </span>
                     </form>
                  </li>
                  <li className="menu-leftSide__items">
                     <Link to="/basket">
                        <button className="menu-leftSide__btn">
                           <AiOutlineShoppingCart className="menu-leftSide__icon" />
                           {basketCount.length}
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
                     <NavLink
                        to="/contact-us"
                        className={(some) => {
                           return some.isActive ? "menu-rightSide__link active" : "menu-rightSide__link";
                        }}
                     >
                        تماس با ما
                     </NavLink>
                  </li>
                  <li className="menu-rightSide__items">
                     <button to="/" className="menu-rightSide__select">
                        <IoMdArrowDropdown className="menu-rightSide__select--icon"></IoMdArrowDropdown> دسته بندی ها
                        <div className="menu-rightSide__options">
                           <Link to="/rahati">
                              <option value="راحتی" className="menu-rightSide__option">
                                 راحتی
                              </option>
                           </Link>
                           <Link to="/saltanati">
                              <option value="سلطنتی" className="menu-rightSide__option">
                                 سلطنتی
                              </option>
                           </Link>
                           <Link to="/classic">
                              <option value="کلاسیک" className="menu-rightSide__option">
                                 کلاسیک
                              </option>
                           </Link>
                        </div>
                     </button>
                  </li>
                  <li className="menu-rightSide__items">
                     <NavLink to="/allproducts" className="menu-rightSide__link">
                        محصولات
                     </NavLink>
                  </li>
                  <li className="menu-rightSide__items">
                     <NavLink to="/" className="menu-rightSide__link">
                        صفحه اصلی
                     </NavLink>
                  </li>
                  <img className="menu-logo" src="/pics/logoBig.png" alt="" />
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
