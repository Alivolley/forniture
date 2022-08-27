import React, { useEffect, useState } from "react";
import "./ChosenCard.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

export default function ChosenCard() {
   const [chosenProduct, setChosenProduct] = useState([]);
   const [showChosen, setShowChosen] = useState(false);

   let params = useParams();

   useEffect(() => {
      fetch("https://forniture-82baf-default-rtdb.firebaseio.com/products.json")
         .then((res) => res.json())
         .then((data) => {
            let some = Object.entries(data);
            setChosenProduct(some.find((product) => product[0] === params.id));
            setShowChosen(true);
         });
   }, []);

   const addToBasket = () => {
      let basketProduct = {
         id: chosenProduct[0],
      };
      fetch("https://forniture-82baf-default-rtdb.firebaseio.com/basket.json", {
         method: "POST",
         body: JSON.stringify(basketProduct),
      }).then((res) => console.log(res));
   };

   return (
      <>
         <Header></Header>
         {showChosen && (
            <div className="containers">
               <div className="chosen-card row">
                  <img src={chosenProduct[1].pictures} alt="" className="chosen-card__img col-12 col-xl-6" />
                  <div className="chosen-card__describe col-12 col-xl-6">
                     <p className="chosen-card__name">مدل : {chosenProduct[1].name}</p>
                     <p className="chosen-card__cate">این مبل از نوع {chosenProduct[1].Category} میباشد .</p>
                     <p className="chosen-card__explain">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
                        و فرهنگ پیشرو در
                     </p>
                     <p className="chosen-card-price">قیمت : {chosenProduct[1].price}</p>
                     <button className="chosen-card__add-basket" onClick={() => addToBasket()}>
                        افزودن به سبد خرید
                     </button>
                  </div>
               </div>
            </div>
         )}
         <Footer></Footer>
      </>
   );
}
