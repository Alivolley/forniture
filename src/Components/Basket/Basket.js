import React, { useEffect, useState } from "react";
import "./Basket.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axiosInstance from "../../Utils/axios";
import { Alert, Spinner } from "react-bootstrap";

export default function Basket() {
   const [basketProduct, setBasketProduct] = useState();
   const [reload, setReload] = useState(false);
   const [removeComplete, setRemoveComplete] = useState(false);

   useEffect(() => {
      axiosInstance.get(`/basket/1/`).then((res) => setBasketProduct(res.data));
   }, [reload]);

   const removeFromBasket = (productId) => {
      axiosInstance.delete(`/basket/${productId}/`).then((res) => {
         setReload((prev) => (prev = !prev));
         setRemoveComplete(true);
      });
   };

   if (removeComplete) {
      setTimeout(() => {
         setRemoveComplete(false);
      }, 3000);
   }

   return (
      <>
         <Header getAgain={reload}></Header>
         <div className="containers">
            {basketProduct ? (
               basketProduct.length ? (
                  basketProduct.map((item) => {
                     return (
                        <div key={item.product.id} className="row bsket-card">
                           <img className="basket-img col-12 col-md-6" src={`https://furniture.pythonanywhere.com${item.product.pictures[0].picture}`} alt="" />
                           <div className="col-12 col-md-6">
                              <p className="basket-title">مدل : {item.product.name}</p>
                              <p className="basket-price">قیمت : {Number(item.product.price).toLocaleString("fa-IR")} تومان</p>
                              <button className="basket_remove" onClick={() => removeFromBasket(item.product.id)}>
                                 حذف از سبد
                              </button>
                           </div>
                        </div>
                     );
                  })
               ) : (
                  <Alert variant="secondary" className="alert">
                     هیچ محصولی وجود ندارد.
                  </Alert>
               )
            ) : (
               <Spinner animation="border" className="spinner-custom" />
            )}
            {removeComplete && (
               <div className="edit-product__modal">
                  <p>با موفقیت از سبد حذف شد .</p>
                  <AiOutlineCloseCircle className="edit-product__modal--icon" onClick={() => setRemoveComplete(false)}></AiOutlineCloseCircle>
               </div>
            )}
         </div>
         <Footer></Footer>
      </>
   );
}
