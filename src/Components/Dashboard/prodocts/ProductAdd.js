import React, { useEffect, useState } from "react";
import Dashboard from "../Dashbaord";
import "./ProductAdd.css";
import pictures from "./productsPictures";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ProductAdd() {
   const [pictureValue, setPictureValue] = useState("");
   const [categoryValue, setCategoryValue] = useState("");
   const [nameValue, setNameValue] = useState("");
   const [descValue, setDescValue] = useState("");
   const [priceValue, setPriceValue] = useState("");
   const [doneModal, setDoneModal] = useState(false);

   let Categories = [
      { id: 1, item: "راحتی" },
      { id: 2, item: "سلطنتی" },
      { id: 3, item: "کلاسیک" },
   ];

   const putPictureValue = (event) => {
      setPictureValue(event.target.value);
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

   const sendProductData = (event) => {
      event.preventDefault();
      if ((pictureValue, categoryValue, nameValue, descValue, priceValue)) {
         let srcpicture = pictures.find((item) => {
            return item.name === pictureValue;
         });

         let newProduct = {
            pictures: srcpicture.address,
            Category: categoryValue,
            name: nameValue,
            description: descValue,
            price: priceValue,
         };

         fetch("https://forniture-82baf-default-rtdb.firebaseio.com/products.json", {
            method: "POST",
            body: JSON.stringify(newProduct),
         }).then((res) => {
            if (res.status === 200) {
               setDoneModal(true);
               setPictureValue("");
               setCategoryValue("");
               setNameValue("");
               setDescValue("");
               setPriceValue("");
            }
         });
      }
   };

   if (doneModal) {
      setTimeout(() => {
         setDoneModal(false);
      }, 3000);
   }

   return (
      <>
         <Dashboard></Dashboard>
         <div className="containers ">
            <div className="add-product ">
               {doneModal && (
                  <div className="add-product__modal">
                     <p>محصول جدید با موفقیت اضافه شد.</p>
                     <AiOutlineCloseCircle className="add-product__modal--icon" onClick={() => setDoneModal(false)}></AiOutlineCloseCircle>
                  </div>
               )}

               <form action="" className="add-product-form" onSubmit={sendProductData}>
                  <div className="add-product-picture__wrapper">
                     <label htmlFor="add-product-picture">عکس خود را انتخاب کنید :</label>
                     <select
                        defaultValue="لطفا یک عکس انتخاب کنید ..."
                        name=""
                        id="add-product-picture"
                        className="add-product-picture"
                        onChange={putPictureValue}
                        value={pictureValue}
                     >
                        <option value="لطفا یک عکس انتخاب کنید ..." className="add-product-picture__items">
                           لطفا یک عکس انتخاب کنید ...
                        </option>

                        {pictures.map((pic) => {
                           return (
                              <option key={pic.id} value={pic.name} className="add-product-picture__items">
                                 {pic.name}
                              </option>
                           );
                        })}
                     </select>
                  </div>

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
                        <option value="دسته بندی" className="add-product-Category__items">
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

                  <input type="submit" className="add-product-submit" value="اضافه کردن" />
               </form>
            </div>
         </div>
      </>
   );
}
