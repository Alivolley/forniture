import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OurNewProducts.css";
import RealCard from "../RealCard/RealCard";

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
                        <RealCard
                           keyName={product[0]}
                           pictures={product[1].pictures}
                           name={product[1].name}
                           Category={product[1].Category}
                           description={product[1].description}
                           price={product[1].price}
                        ></RealCard>
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
