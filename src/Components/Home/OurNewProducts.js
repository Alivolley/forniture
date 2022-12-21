import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OurNewProducts.css";
import RealCard from "../RealCard/RealCard";
import axiosInstance from "../../Utils/axios";
import { Spinner } from "react-bootstrap";

export default function OurNewProducts() {
   const [newestProduct, setNewestProduct] = useState();

   useEffect(() => {
      axiosInstance.get(`/all-products/`).then((res) => setNewestProduct(res.data));
   }, []);

   return (
      <>
         <div className="new-products containers">
            <h2 className="our-services-title">جدیدترین محصولات ما</h2>
            <div className="our-services-line"></div>
            <div className="row">
               {newestProduct ? (
                  newestProduct.map((product, index) => {
                     if (index < 3) {
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
                     } else {
                        return null;
                     }
                  })
               ) : (
                  <Spinner animation="border" className="spinner-custom" />
               )}
            </div>
            <Link to="/allproducts" className="new-products__show-all">
               مشاهده ی تمام محصولات
            </Link>
         </div>
      </>
   );
}
