import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OurNewProducts.css";

export default function OurNewProducts() {
   const [newestProduct, setNewestProduct] = useState([]);

   useEffect(() => {
      fetch("https://forniture-82baf-default-rtdb.firebaseio.com/products.json")
         .then((res) => res.json())
         .then((data) => {
            setNewestProduct(Object.entries(data));
         });
   }, []);

   return (
      <>
         <div className="new-products containers">
            <h2 className="our-services-title">جدیدترین محصولات ما</h2>
            <div className="our-services-line"></div>
            <div className="row">
               {newestProduct.map((product, index) => {
                  if (index < 3) {
                     return (
                        <div key={product[0]} className="product-list col-12 col-md-6 col-xl-4">
                           <div className="product-list-cart">
                              <img src={product[1].pictures} alt="" className="product-list-img" />
                              <h2 className="product-list-title">{product[1].name}</h2>
                              <p className="product-list-type">از دسته : {product[1].Category}</p>
                              <p className="product-list-desc">{product[1].description}</p>
                              <p className="product-list-price">قیمت : {product[1].price}</p>
                              <button className="product-list-edit">افزودن به سبد خرید</button>
                           </div>
                        </div>
                     );
                  }
               })}
            </div>
            <Link to="/" className="new-products__show-all">
               مشاهده ی تمام محصولات
            </Link>
         </div>
      </>
   );
}
