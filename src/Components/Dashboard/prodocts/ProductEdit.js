import React, { useEffect, useState } from "react";
import Dashboard from "../Dashbaord";
import "./ProductEdit.css";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";
import axiosInstance from "../../../Utils/axios";
import { Alert } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

export default function ProductEdit() {
   const [categoryValue, setCategoryValue] = useState("");
   const [categoryId, setCategoryId] = useState("");
   const [nameValue, setNameValue] = useState("");
   const [descValue, setDescValue] = useState("");
   const [priceValue, setPriceValue] = useState("");
   const [idValue, setidValue] = useState("");

   const [gottenProduct, setGottenProduct] = useState();
   const [editShow, setEditShow] = useState(false);
   const [sureQues, setSureQues] = useState(false);
   const [reloade, setReload] = useState(false);
   const [editComplete, setEditComplete] = useState(false);

   let Categories = [
      { id: 1, item: "راحتی" },
      { id: 2, item: "سلطنتی" },
      { id: 3, item: "کلاسیک" },
   ];

   useEffect(() => {
      axiosInstance.get(`/all-products/`).then((res) => setGottenProduct(res.data));
   }, []);

   useEffect(() => {
      axiosInstance.get(`/all-products/`).then((res) => setGottenProduct(res.data));
   }, [reloade]);

   const openEditModal = (id, name, Category, description, price) => {
      setidValue(id);
      setNameValue(name);
      setDescValue(description);
      setPriceValue(price);
      setCategoryId(Category);
      setEditShow(true);

      if (Category === 1) {
         setCategoryValue("راحتی");
      } else if (Category === 2) {
         setCategoryValue("سلطنتی");
      } else if (Category === 3) {
         setCategoryValue("کلاسیک");
      }
   };

   const updateProduct = () => {
      let editedCard = {
         category: categoryId,
         name: nameValue,
         description: descValue,
         price: priceValue,
      };

      axiosInstance
         .put(`/product/${idValue}/`, JSON.stringify(editedCard))
         .then((res) => {
            if (res.status === 200) {
               setSureQues(false);
               setEditShow(false);
               setReload((prev) => (prev = !prev));
               setEditComplete(true);
            }
         })
         .catch((err) => console.log(err));
   };

   const putCategoryValue = (event) => {
      if (event.target.value === "راحتی") {
         setCategoryId(1);
      } else if (event.target.value === "سلطنتی") {
         setCategoryId(2);
      } else if (event.target.value === "کلاسیک") {
         setCategoryId(3);
      }

      setCategoryValue(event.target.value);
   };

   const putNameValue = (event) => {
      setNameValue(event.target.value);
   };

   const putDescValue = (event) => {
      setDescValue(event.target.value);
   };

   const putPriceValue = (event) => {
      setPriceValue(event.target.value);
   };

   const showSureQues = (event) => {
      event.preventDefault();
      setSureQues(true);
   };

   if (editComplete) {
      setTimeout(() => {
         setEditComplete(false);
      }, 3000);
   }

   // console.log(gottenProduct);

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
                                 <button
                                    className="product-list-edit"
                                    onClick={() => openEditModal(product.id, product.name, product.category, product.description, product.price)}
                                 >
                                    ویرایش
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
         {editShow && (
            <div className="edit-modal">
               <form action="" className="add-product-form" onSubmit={showSureQues}>
                  <AiOutlineClose className="edit-modal__close-btn" onClick={() => setEditShow(false)}></AiOutlineClose>
                  <div className="add-product-Category__wrapper">
                     <label htmlFor="add-product-Category">دسته بندی :</label>
                     <select id="add-product-Category" className="add-product-Category" onChange={putCategoryValue} value={categoryValue}>
                        {Categories.map((Category) => {
                           return (
                              <option key={Category.id} value={Category.item} className="add-product-picture__items">
                                 {Category.item}
                              </option>
                           );
                        })}
                     </select>
                  </div>
                  <div className="add-product-name__wrapper">
                     <label htmlFor="add-product-name">نام مبل :</label>
                     <input id="add-product-name" type="text" className="add-product-name" placeholder="..." onChange={putNameValue} value={nameValue} />
                  </div>
                  <div className="add-product-desc__wrapper">
                     <label htmlFor="add-product-desc">توضیحات :</label>
                     <input id="add-product-desc" type="text" className="add-product-desc" placeholder="..." onChange={putDescValue} value={descValue} />
                  </div>
                  <div className="add-product-price__wrapper">
                     <label htmlFor="add-product-price">قیمت :</label>
                     <input id="add-product-price" type="text" className="add-product-price" placeholder="..." onChange={putPriceValue} value={priceValue} />
                  </div>
                  <input type="submit" className="add-product-submit" value="اعمال تغییرات" />
               </form>
            </div>
         )}
         {sureQues && (
            <div className="edit-sure-qusetion">
               <p className="edit-sure-qusetion__text">آیا از انجام این تغییرات مطمین اید ؟</p>
               <button className="edit-sure-qusetion__yes" onClick={updateProduct}>
                  بله
               </button>
               <button className="edit-sure-qusetion__no" onClick={() => setSureQues(false)}>
                  خیر
               </button>
            </div>
         )}
         {editComplete && (
            <div className="edit-product__modal">
               <p>تغییرات با موفقیت اعمال شد.</p>
               <AiOutlineCloseCircle className="edit-product__modal--icon" onClick={() => setEditComplete(false)}></AiOutlineCloseCircle>
            </div>
         )}
      </>
   );
}
