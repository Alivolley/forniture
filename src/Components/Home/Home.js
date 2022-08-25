import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Slides from "../Header/Slides";
import HomeAboute from "./HomeAboute";
import OurServices from "./OurServices";
import OurNewProducts from "./OurNewProducts";
import Footer from "../Footer/Footer";

export default function Home() {
   return (
      <>
         <Header></Header>
         <Slides></Slides>
         <HomeAboute></HomeAboute>
         <OurServices></OurServices>
         <OurNewProducts></OurNewProducts>
         <div className="footer-separator"></div>
         <Footer></Footer>
      </>
   );
}
