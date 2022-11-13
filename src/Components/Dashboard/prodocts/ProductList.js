import React, { useEffect, useState } from "react";
import Dashboard from "../Dashbaord";
import "./ProductList.css";

export default function Productlist() {
   const [gottenProduct, setGottenProduct] = useState([]);

   useEffect(() => {
      fetch("https://againfornture-default-rtdb.firebaseio.com/products.json")
         .then((res) => res.json())
         .then((data) => {
            setGottenProduct(Object.entries(data));
         });
   }, []);

   return (
      <>
         <Dashboard></Dashboard>
         <div className="containers">
            <div className="row">
               {gottenProduct.map((product) => {
                  return (
                     <div key={product[0]} className="product-list col-12 col-md-6 col-xl-4">
                        <div className="product-list-cart">
                           <img src={product[1].pictures} alt="" className="product-list-img" />
                           <h2 className="product-list-title">{product[1].name}</h2>
                           <p className="product-list-type">از دسته : {product[1].Category}</p>
                           <p className="product-list-desc">{product[1].description}</p>
                           <p className="product-list-price">قیمت : {Number(product[1].price).toLocaleString()}</p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </>
   );
}
