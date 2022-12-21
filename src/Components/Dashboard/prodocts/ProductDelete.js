import React, { useEffect, useState } from "react";
import Dashboard from "../Dashbaord";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axiosInstance from "../../../Utils/axios";
import { Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export default function ProductDelete() {
   const [gottenProduct, setGottenProduct] = useState();
   const [productId, setProductId] = useState("");
   const [sureQues, setSureQues] = useState(false);
   const [reload, setReload] = useState(false);
   const [deleteComplete, setDeleteComplete] = useState(false);

   useEffect(() => {
      axiosInstance.get(`/all-products/`).then((res) => setGottenProduct(res.data));
   }, []);

   useEffect(() => {
      axiosInstance.get(`/all-products/`).then((res) => setGottenProduct(res.data));
   }, [reload]);

   const openAskDelete = (id) => {
      setProductId(id);
      setSureQues(true);
   };

   const deleteProduct = () => {
      axiosInstance
         .delete(`/product/${productId}/`)
         .then((res) => {
            setReload((prev) => (prev = !prev));
            setSureQues(false);
            setDeleteComplete(true);
         })
         .catch((err) => console.log(err));
   };

   if (deleteComplete) {
      setTimeout(() => {
         setDeleteComplete(false);
      }, 3000);
   }

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
                                 <p className="product-list-price">قیمت : {product.price}</p>
                                 <button className="product-list-edit" onClick={() => openAskDelete(product.id)}>
                                    حذف این محصول
                                 </button>
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
         {sureQues && (
            <div className="edit-sure-qusetion">
               <p className="edit-sure-qusetion__text">آیا از حذف این محصول مطمین اید ؟</p>
               <button className="edit-sure-qusetion__yes" onClick={deleteProduct}>
                  بله
               </button>
               <button className="edit-sure-qusetion__no" onClick={() => setSureQues(false)}>
                  خیر
               </button>
            </div>
         )}
         {deleteComplete && (
            <div className="edit-product__modal">
               <p>حذف با موفقیت انجام شد.</p>
               <AiOutlineCloseCircle className="edit-product__modal--icon" onClick={() => setDeleteComplete(false)}></AiOutlineCloseCircle>
            </div>
         )}
      </>
   );
}
