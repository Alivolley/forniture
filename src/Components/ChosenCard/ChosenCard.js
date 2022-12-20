import React, { useEffect, useState } from "react";
import "./ChosenCard.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axiosInstance from "../../Utils/axios";
import { Spinner } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

export default function ChosenCard() {
   const [chosenProduct, setChosenProduct] = useState();
   const [addBasketDone, setAddBasketDone] = useState(false);

   let params = useParams();

   useEffect(() => {
      axiosInstance.get(`product/${params.id}/`).then((res) => setChosenProduct(res.data));
   }, []);

   const addToBasket = () => {
      axiosInstance.post(`basket/${chosenProduct.id}/`).then((res) => {
         console.log(res);
         //       setAddBasketDone(true);
      });
   };

   if (addBasketDone) {
      setTimeout(() => {
         setAddBasketDone(false);
      }, 3000);
   }

   console.log(chosenProduct);

   return (
      <>
         <Header></Header>
         {chosenProduct ? (
            <div className="containers">
               <div className="chosen-card row">
                  <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper col-12 col-xl-6">
                     {chosenProduct.pictures.map((image) => (
                        <SwiperSlide>
                           <img src={`https://furniture.pythonanywhere.com${image.picture}`} alt="" className="chosen-card__img" />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div className="chosen-card__describe col-12 col-xl-6">
                     <p className="chosen-card__name">مدل : {chosenProduct.name}</p>
                     <p className="chosen-card__cate">
                        این مبل از نوع {chosenProduct.category === 1 && "راحتی"}
                        {chosenProduct.category === 2 && "سلطنتی"}
                        {chosenProduct.category === 3 && "کلاسیک"} میباشد .
                     </p>
                     <pre className="chosen-card__explain">{chosenProduct.description}</pre>
                     <p className="chosen-card-price">قیمت : {Number(chosenProduct.price).toLocaleString("fa-IR")}</p>
                     <button className="chosen-card__add-basket" onClick={() => addToBasket()}>
                        افزودن به سبد خرید
                     </button>
                  </div>
               </div>
            </div>
         ) : (
            <Spinner animation="border" className="spinner-custom" />
         )}
         {addBasketDone && (
            <div className="edit-product__modal">
               <p>با موفقیت به سبد خرید اضافه شد.</p>
               <AiOutlineCloseCircle className="edit-product__modal--icon" onClick={() => setAddBasketDone(false)}></AiOutlineCloseCircle>
            </div>
         )}
         <Footer></Footer>
      </>
   );
}
