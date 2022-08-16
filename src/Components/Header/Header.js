import React from "react";
import "./Header.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";

export default function Header() {
   return (
      <div className="social-nav">
         <a href="#" className="social-nav__link">
            <i>
               <AiOutlineInstagram />
            </i>
         </a>
         <a href="#" className="social-nav__link">
            <i>
               <FaTwitter />
            </i>
         </a>
         <a href="#" className="social-nav__link">
            <i>
               <BsWhatsapp />
            </i>
         </a>
         <a href="#" className="social-nav__link">
            <i>
               <BsTelegram />
            </i>
         </a>
      </div>
   );
}
