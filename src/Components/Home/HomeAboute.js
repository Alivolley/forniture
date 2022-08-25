import React from "react";
import "./HomeAboute.css";
import "./HomeAboute.css";

export default function HomeAboute() {
   return (
      <>
         <div className="containers home-aboute">
            <div className="row">
               <div className="col-12 col-lg-6">
                  <div className="home-aboute-img"></div>
               </div>
               <div className="col-12 col-lg-6">
                  <div className="home-aboute-describtion">
                     <h2 className="home-aboute-describtion__title">درباره ی کارخانه</h2>
                     <p className="home-aboute-describtion__text">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
