import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import RealCard from "../RealCard/RealCard";
import axiosInstance from "../../Utils/axios";
import { Alert, Spinner } from "react-bootstrap";

export default function Searched() {
   const [newestProduct, setNewestProduct] = useState();

   let params = useParams();

   useEffect(() => {
      axiosInstance.get(`/all-products/`).then((res) => {
         const searchedWord = res.data.filter((product) => product.name.includes(params.id));

         setNewestProduct(searchedWord);
      });
   }, [params]);

   // console.log(newestProduct);

   return (
      <>
         <Header></Header>
         <div className="new-products containers">
            <h2 className="our-services-title">نتایج جست و جوی شما</h2>
            <div className="our-services-line"></div>
            <div className="row">
               {newestProduct ? (
                  newestProduct.length ? (
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
                     <Alert variant="secondary" className="alert">
                        هیچ محصولی با این نام وجود ندارد.
                     </Alert>
                  )
               ) : (
                  <Spinner animation="border" className="spinner-custom" />
               )}
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
