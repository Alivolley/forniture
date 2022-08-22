import React, { useEffect, useState } from "react";
import Dashboard from "../Dashbaord";
import "./ProductEdit.css";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

export default function ProductEdit() {
   const [categoryValue, setCategoryValue] = useState("");
   const [nameValue, setNameValue] = useState("");
   const [descValue, setDescValue] = useState("");
   const [priceValue, setPriceValue] = useState("");
   const [picturesValue, setPicturesValue] = useState("");
   const [idValue, setidValue] = useState("");

   const [gottenProduct, setGottenProduct] = useState([]);
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
   }, [reloade]);

   const openEditModal = (id, pictures, name, Category, description, price) => {
      setidValue(id);
      setPicturesValue(pictures);
      setCategoryValue(Category);
      setNameValue(name);
      setDescValue(description);
      setPriceValue(price);
      setEditShow(true);
   };

   const updateProduct = () => {
      fetch(`https://forniture-82baf-default-rtdb.firebaseio.com/products/${idValue}.json`, {
         method: "PUT",
         body: JSON.stringify({
            pictures: picturesValue,
            Category: categoryValue,
            name: nameValue,
            description: descValue,
            price: priceValue,
         }),
      }).then((res) => {
         if (res.status === 200) {
            setSureQues(false);
            setEditShow(false);
            setReload((prev) => (prev = !prev));
            setEditComplete(true);
         }
      });
   };

   const putCategoryValue = (event) => {
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
                           <button
                              className="product-list-edit"
                              onClick={() =>
                                 openEditModal(product[0], product[1].pictures, product[1].name, product[1].Category, product[1].description, product[1].price)
                              }
                           >
                              ویرایش
                           </button>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         {editShow && (
            <div className="edit-modal">
               <form action="" className="add-product-form" onSubmit={showSureQues}>
                  <AiOutlineClose className="edit-modal__close-btn" onClick={() => setEditShow(false)}></AiOutlineClose>
                  <div className="add-product-Category__wrapper">
                     <label htmlFor="add-product-Category">دسته بندی :</label>
                     <select
                        defaultValue="دسته بندی"
                        name=""
                        id="add-product-Category"
                        className="add-product-Category"
                        onChange={putCategoryValue}
                        value={categoryValue}
                     >
                        <option value="دسته بندی" className="add-product-Category__items" disabled>
                           دسته بندی
                        </option>
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
