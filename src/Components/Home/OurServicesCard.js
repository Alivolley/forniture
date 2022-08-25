import React from "react";
import "./OurServicesCard.css";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { GiPencilRuler } from "react-icons/gi";

export default function OurServicesCard() {
   return (
      <>
         <div className="row ">
            <div className="col-12 col-md-6 col-xl-3">
               <div className="our-services-card ">
                  <RiCustomerService2Line className="our-services-card__icon"></RiCustomerService2Line>
                  <h3 className="our-services-card__title">خدمات پس از فروش</h3>
                  <p className="our-services-card__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
               </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
               <div className="our-services-card ">
                  <TbTruckDelivery className="our-services-card__icon"></TbTruckDelivery>
                  <h3 className="our-services-card__title">تحویل به مشتری</h3>
                  <p className="our-services-card__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
               </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
               <div className="our-services-card ">
                  <BsTools className="our-services-card__icon"></BsTools>
                  <h3 className="our-services-card__title">ساخت</h3>
                  <p className="our-services-card__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
               </div>
            </div>
            <div className="col-12 col-md-6 col-xl-3">
               <div className="our-services-card ">
                  <GiPencilRuler className="our-services-card__icon"></GiPencilRuler>
                  <h3 className="our-services-card__title">طراحی</h3>
                  <p className="our-services-card__text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
               </div>
            </div>
         </div>
      </>
   );
}
