import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import RealCard from "../RealCard/RealCard";

export default function Searched() {
   const [newestProduct, setNewestProduct] = useState([]);

   let params = useParams();

   useEffect(() => {
      fetch("https://againfornture-default-rtdb.firebaseio.com/products.json")
         .then((res) => res.json())
         .then((data) => {
            setNewestProduct(Object.entries(data));
         });
   }, []);

   return (
      <>
         <Header></Header>
         <div className="new-products containers">
            <h2 className="our-services-title">نتایج جست و جوی شما</h2>
            <div className="our-services-line"></div>
            <div className="row">
               {newestProduct.map((product) => {
                  if (product[1].name === params.id) {
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
