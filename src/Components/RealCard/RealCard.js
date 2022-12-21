import React from "react";
import { Link } from "react-router-dom";
import "./RealCard.css";

export default function RealCard(props) {
   return (
      <>
         <div key={props.keyName} className="product-list col-12 col-md-6 col-xl-4">
            <div className="product-list-cart">
               <img src={props.pictures} alt="" className="product-list-img" />
               <h2 className="product-list-title">{props.name}</h2>
               <p className="product-list-type">
                  از دسته : {props.Category === 1 && "راحتی"}
                  {props.Category === 2 && "سلطنتی"}
                  {props.Category === 3 && "کلاسیک"}
               </p>
               <p className="product-list-desc">{props.description}</p>
               <p className="product-list-price">قیمت : {props.price} تومان</p>
               <Link to={`/product/${props.keyName}`} className="product-list-edit product-newest-link">
                  مشاهده جزییات
               </Link>
            </div>
         </div>
      </>
   );
}
