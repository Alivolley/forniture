import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
   const [timer, setTimer] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setTimer(true);
      }, 10000);
   });
   return (
      <div>
         <h1 className="redirect-account-h">شما مجاز به ورود نیستید و تا ۱۰ ثانیه دیگر به صفحه قبل برمیگردید.</h1>
         <p className="redirect-account-p">لطفا تنها در صورتی که ادمین هستید اقدام به ورود کنید.</p>
         {timer && <Navigate to="/account" />}
      </div>
   );
}
