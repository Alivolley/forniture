import React, { useEffect, useState } from "react";
import Dashboard from "../Dashbaord";
import "./ProductList.css";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import axiosInstance from "../../../Utils/axios";

export default function Productlist() {
   const [gottenProduct, setGottenProduct] = useState();

   useEffect(() => {
      axiosInstance.get(`/all-products/`).then((res) => setGottenProduct(res.data));
   }, []);

   console.log(gottenProduct);

   return (
      <>
         <Dashboard></Dashboard>
         <div className="containers">
            <div className="row">
               {gottenProduct ? (
                  gottenProduct.length ? (
                     gottenProduct.map((product) => {
                        return (
                           <div key={product.id} className="product-list col-12 col-md-6 col-xl-4">
                              <div className="product-list-cart">
                                 <img src={`https://furniture.pythonanywhere.com${product.pictures[0].picture}`} alt="" className="product-list-img" />
                                 <h2 className="product-list-title">{product.name}</h2>
                                 <p className="product-list-type">
                                    از دسته : {product.category === 1 && "راحتی"}
                                    {product.category === 2 && "سلطنتی"}
                                    {product.category === 3 && "کلاسیک"}
                                 </p>
                                 <p className="product-list-desc">{product.description}</p>
                                 <p className="product-list-price">قیمت : {Number(product.price).toLocaleString("fa-IR")}</p>
                              </div>
                           </div>
                        );
                     })
                  ) : (
                     <Alert variant="secondary" className="alert">
                        هیچ محصولی وجود ندارد.
                     </Alert>
                  )
               ) : (
                  <Spinner animation="border" className="spinner-custom" />
               )}
            </div>
         </div>
      </>
   );
}
