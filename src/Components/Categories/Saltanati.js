import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axiosInstance from "../../Utils/axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RealCard from "../RealCard/RealCard";

export default function Saltanati() {
   const [newestProduct, setNewestProduct] = useState();

   useEffect(() => {
      axiosInstance.get(`/products/2/`).then((res) => setNewestProduct(res.data));
   }, []);

   return (
      <>
         <Header></Header>
         <div className="new-products containers">
            <h2 className="our-services-title">مبلمان سلطنتی </h2>
            <div className="our-services-line"></div>
            <div className="row">
               {newestProduct ? (
                  newestProduct.map((product) => {
                     return (
                        <RealCard
                           key={product.id}
                           keyName={product.id}
                           pictures={`https://furniture.pythonanywhere.com${product.pictures[0].picture}`}
                           name={product.name}
                           Category={product.category}
                           description={product.description}
                           price={Number(product.price).toLocaleString("fa-IR")}
                        />
                     );
                  })
               ) : (
                  <Spinner animation="border" className="spinner-custom" />
               )}
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
