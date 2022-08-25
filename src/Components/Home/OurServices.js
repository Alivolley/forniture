import React from "react";
import "./OurServices.css";
import OurServicesCard from "./OurServicesCard";

export default function OurServices() {
   return (
      <>
         <div className="containers our-services">
            <h2 className="our-services-title">خدمات ما</h2>
            <div className="our-services-line"></div>
            <p className="our-services-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
            <OurServicesCard></OurServicesCard>
         </div>
      </>
   );
}
