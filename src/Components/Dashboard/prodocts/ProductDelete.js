import React, { useEffect, useState } from "react";
import Dashboard from "../Dashbaord";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ProductDelete() {
   const [gottenProduct, setGottenProduct] = useState([]);
   const [productId, setProductId] = useState("");
   const [sureQues, setSureQues] = useState(false);
   const [reload, setReload] = useState(false);
   const [deleteComplete, setDeleteComplete] = useState(false);

   useEffect(() => {
      fetch("https://forniture-82baf-default-rtdb.firebaseio.com/products.json")
         .then((res) => res.json())
         .then((data) => {
            setGottenProduct(Object.entries(data));
         });
   }, []);

   useEffect(() => {
      fetch("https://forniture-82baf-default-rtdb.firebaseio.com/products.json")
         .then((res) => res.json())
         .then((data) => {
            setGottenProduct(Object.entries(data));
         });
   }, [reload]);

   const openAskDelete = (id) => {
      setProductId(id);
      setSureQues(true);
   };

   const deleteProduct = () => {
      fetch(`https://forniture-82baf-default-rtdb.firebaseio.com/products/${productId}.json`, {
         method: "DELETE",
      }).then((res) => {
         setSureQues(false);
         setReload((prev) => (prev = !prev));
         setDeleteComplete(true);
      });
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
               {gottenProduct.map((product) => {
                  return (
                     <div key={product[0]} className="product-list col-12 col-md-6 col-xl-4">
                        <div className="product-list-cart">
                           <img src={product[1].pictures} alt="" className="product-list-img" />
                           <h2 className="product-list-title">{product[1].name}</h2>
                           <p className="product-list-type">از دسته : {product[1].Category}</p>
                           <p className="product-list-desc">{product[1].description}</p>
                           <p className="product-list-price">قیمت : {product[1].price}</p>
                           <button className="product-list-edit" onClick={() => openAskDelete(product[0])}>
                              حذف این محصول
                           </button>
                        </div>
                     </div>
                  );
               })}
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
