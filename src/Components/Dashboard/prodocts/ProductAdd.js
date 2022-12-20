import React, { useState } from "react";
import Dashboard from "../Dashbaord";
import "./ProductAdd.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axiosInstance from "../../../Utils/axios";

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
      setPriceValue(+event.target.value);
   };

   const putPictureValue = (event) => {
      setPictureValue((prev) => [...prev, event.target.files[0]]);
   };

   const sendProductData = (event) => {
      event.preventDefault();
      if ((pictureValue, categoryValue, nameValue, descValue, priceValue)) {
         // let srcpicture = pictures.find((item) => {
         //    return item.name === pictureValue;
         // });

         // let newProduct = {
         //    pictures: srcpicture.address,
         //    Category: categoryValue,
         //    name: nameValue,
         //    description: descValue,
         //    price: priceValue,
         // };

         // console.log(pictureValue);

         let formData = new FormData();

         pictureValue.forEach((file) => {
            formData.append("files", file);
         });

         formData.append("category", categoryValue);
         formData.append("description", descValue);
         formData.append("name", nameValue);
         formData.append("price", priceValue);

         axiosInstance
            .post(`/product/1/`, formData, {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            })
            .then((res) => {
               console.log(res);
               if (res.status === 200) {
                  setDoneModal(true);
                  setPictureValue("");
                  setCategoryValue("");
                  setNameValue("");
                  setDescValue("");
                  setPriceValue("");
               }
               res.json();
            })
            .catch((err) => console.log(err));
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
                  <div className="add-product-Category__wrapper">
                     <label htmlFor="add-product-Category">دسته بندی :</label>
                     <select id="add-product-Category" className="add-product-Category" onChange={putCategoryValue} value={categoryValue}>
                        <option className="add-product-Category__items" disabled={categoryValue ? true : false}>
                           دسته بندی
                        </option>
                        {Categories.map((Category) => {
                           return (
                              <option key={Category.id} value={Category.id} className="add-product-picture__items">
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

                  <div className="add-product-price__wrapper">
                     <label htmlFor="add-product-price">قیمت :</label>
                     <input id="add-product-price" type="text" className="add-product-price" placeholder="..." onChange={putPriceValue} value={priceValue} />
                  </div>

                  <div className="add-product-desc__wrapper">
                     <label htmlFor="add-product-desc">توضیحات :</label>
                     <textarea
                        id="add-product-desc"
                        className="add-product-desc"
                        placeholder="..."
                        onChange={putDescValue}
                        value={descValue}
                        cols="30"
                        rows="7"
                     ></textarea>
                  </div>

                  <div className="add-product-picture__wrapper">
                     <label htmlFor="add-product-picture">عکس خود را انتخاب کنید :</label>

                     <input type="file" id="add-product-picture" onChange={putPictureValue} />
                  </div>

                  <div className="add-product-picture__wrapper">
                     <label htmlFor="add-product-picture">تعدا عکس های انتخاب شده : {pictureValue.length}</label>
                  </div>

                  <input
                     type="submit"
                     className={pictureValue && categoryValue && nameValue && descValue && priceValue ? "add-product-submit" : "add-product-submit__unready"}
                     value="اضافه کردن"
                  />
               </form>
            </div>
         </div>
      </>
   );
}
