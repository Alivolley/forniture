import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RealCard from "../RealCard/RealCard";
import axiosInstance from "../../Utils/axios";
import { Spinner } from "react-bootstrap";

export default function AllProducts() {
   const [newestProduct, setNewestProduct] = useState();

   useEffect(() => {
      axiosInstance.get(`/all-products/`).then((res) => setNewestProduct(res.data));
   }, []);

   // console.log(newestProduct);

   return (
      <>
         <Header></Header>
         <div className="new-products containers">
            <h2 className="our-services-title">در این صفحه به تمامی محصولات فروشگاه دسترسی دارید . </h2>
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
