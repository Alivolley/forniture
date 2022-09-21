import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RealCard from "../RealCard/RealCard";

export default function Saltanati() {
   const [newestProduct, setNewestProduct] = useState([]);

   useEffect(() => {
      fetch("https://newfurniture-5d536-default-rtdb.firebaseio.com/products.json")
         .then((res) => res.json())
         .then((data) => {
            setNewestProduct(Object.entries(data));
         });
   }, []);

   return (
      <>
         <Header></Header>
         <div className="new-products containers">
            <h2 className="our-services-title">مبلمان سلطنتی </h2>
            <div className="our-services-line"></div>
            <div className="row">
               {newestProduct.map((product) => {
                  if (product[1].Category === "سلطنتی") {
                     return (
                        <RealCard
                           key={product[0]}
                           keyName={product[0]}
                           pictures={product[1].pictures}
                           name={product[1].name}
                           Category={product[1].Category}
                           description={product[1].description}
                           price={Number(product[1].price).toLocaleString()}
                        ></RealCard>
                     );
                  } else {
                     return null;
                  }
               })}
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
