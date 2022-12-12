import React, { useEffect, useState } from "react";
import "./Basket.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Basket() {
   const [basketProduct, setBasketProduct] = useState([]);
   const [basketShow, setBasketShow] = useState(false);
   const [basketEmpty, setBasketEmpty] = useState(false);
   const [reload, setReload] = useState(false);
   const [removeComplete, setRemoveComplete] = useState(false);

   useEffect(() => {
      fetch("https://newestfurniture-9444e-default-rtdb.firebaseio.com/basket.json")
         .then((res) => res.json())
         .then((data) => {
            setBasketProduct(Object.entries(data));
            setBasketShow(true);
         })
         .catch((res) => setBasketEmpty(true));
   }, []);

   useEffect(() => {
      fetch("https://newestfurniture-9444e-default-rtdb.firebaseio.com/basket.json")
         .then((res) => res.json())
         .then((data) => {
            if (data) {
               setBasketProduct(Object.entries(data));
            } else {
               setBasketShow(false);
               setBasketEmpty(true);
            }
         })
         .catch((res) => setBasketEmpty(true));
   }, [reload]);

   const removeFromBasket = (productId) => {
      fetch(`https://newestfurniture-9444e-default-rtdb.firebaseio.com/basket/${productId}.json`, {
         method: "DELETE",
      }).then((res) => {
         if (res.status === 200) {
            setReload((prev) => (prev = !prev));
            setRemoveComplete(true);
            console.log(res);
         }
      });
   };

   if (removeComplete) {
      setTimeout(() => {
         setRemoveComplete(false);
      }, 3000);
   }

   return (
      <>
         <Header></Header>
         <div className="containers">
            {basketShow &&
               basketProduct.map((product) => {
                  return (
                     <div key={product[0]} className="row bsket-card">
                        <img className="basket-img col-12 col-md-6" src={product[1].pictures} alt="" />
                        <div className="col-12 col-md-6">
                           <p className="basket-title">مدل : {product[1].name}</p>
                           <p className="basket-price">قیمت : {Number(product[1].price).toLocaleString()} تومان</p>
                           <button className="basket_remove" onClick={() => removeFromBasket(product[0])}>
                              حذف از سبد
                           </button>
                        </div>
                     </div>
                  );
               })}
            {basketEmpty && <h2 className="basket-empty">محصولی در سبد خرید شما وجود ندارد.</h2>}
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
