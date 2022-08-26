import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
   return (
      <>
         <div className="footer">
            <div className="containers">
               <div className="footer-main">
                  <ul className="footer-fast-access">
                     <Link to="/" className="footer-fast-access__item">
                        صفحه اصلی
                     </Link>
                     <Link to="/" className="footer-fast-access__item">
                        محصولات
                     </Link>
                     <Link to="/" className="footer-fast-access__item">
                        دسته بندی ها
                     </Link>
                     <Link to="/" className="footer-fast-access__item">
                        تماس با ما
                     </Link>
                     <Link to="/" className="footer-fast-access__item">
                        درباره ما
                     </Link>
                  </ul>
                  <div className="footer-contact">
                     <p className="footer-contact-desc">از طریق این راه ها با ما در ارتباط باشید </p>
                     <ul className="footer-contact__link-wrapper">
                        <Link to="/" className="footer-contact__link footer-contact__link-telegram">
                           <BsTelegram className="footer-contact__icon"></BsTelegram>
                        </Link>
                        <Link to="/" className="footer-contact__link footer-contact__link-whatsapp">
                           <BsWhatsapp className="footer-contact__icon"></BsWhatsapp>
                        </Link>
                        <Link to="/" className="footer-contact__link footer-contact__link-instagram">
                           <AiFillInstagram className="footer-contact__icon"></AiFillInstagram>
                        </Link>
                        <Link to="/" className="footer-contact__link footer-contact__link-twitter">
                           <FaTwitter className="footer-contact__icon"></FaTwitter>
                        </Link>
                     </ul>
                  </div>
               </div>
               <div className="footer-copy-right">© 2020. All rights reserved.</div>
            </div>
         </div>
      </>
   );
}
