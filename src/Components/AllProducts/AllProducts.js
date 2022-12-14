import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RealCard from "../RealCard/RealCard";

export default function AllProducts() {
   const [newestProduct, setNewestProduct] = useState([]);

   useEffect(() => {
      fetch("https://newestfurniture-9444e-default-rtdb.firebaseio.com/products.json")
         .then((res) => res.json())
         .then((data) => {
            setNewestProduct(Object.entries(data));
         });
   }, []);

   return (
      <>
         <Header></Header>
         <div className="new-products containers">
            <h2 className="our-services-title">در این صفحه به تمامی محصولات فروشگاه دسترسی دارید . </h2>
            <div className="our-services-line"></div>
            <div className="row">
               {newestProduct.map((product) => {
                  return (
                     <RealCard
                        key={product[0]}
                        keyName={product[0]}
                        pictures={product[1].pictures}
                        name={product[1].name}
                        Category={product[1].Category}
                        description={product[1].description}
                        price={Number(product[1].price).toLocaleString("fa-IR")}
                     ></RealCard>
                  );
               })}
            </div>
         </div>
         <Footer></Footer>
      </>
   );
}
