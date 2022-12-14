import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Account.css";

export default function Account() {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [errorShow, setErrorShow] = useState(false);
   const [errorMessege, setErrorMessege] = useState();

   const navigate = useNavigate();

   useEffect(() => {
      Cookies.get("login") && navigate("/dashboard");
   }, []);

   if (errorShow) {
      setTimeout(() => {
         setErrorShow(false);
      }, 3000);
   }

   const formSend = (event) => {
      event.preventDefault();

      if (userName && password && email) {
         if (userName === "ali" && password === "1234" && email === "ali@gmail.com") {
            Cookies.set("login", "ok", { expires: 3 });
            navigate("/dashboard");
         } else {
            setErrorMessege("اطلاعات وارد شده صحیح نمیباشد.");
            setErrorShow(true);
         }
      } else {
         setErrorMessege("لطفا تمامی ورودی ها را پر کنید.");
         setErrorShow(true);
      }
   };

   const inputUserHandler = (event) => {
      setUserName(event.target.value);
   };

   const inputPasswordHandler = (event) => {
      setPassword(event.target.value);
   };

   const inputEmailHandler = (event) => {
      setEmail(event.target.value);
   };

   return (
      <section className="account">
         <Header></Header>
         <div className={`account-error ${errorShow ? "account-error__show" : null}`}>{errorMessege}</div>
         <div className="containers">
            <div className="row account-row">
               <div className=" col-md-7 col-xl-8 ">
                  <div className="account-login-part">
                     <h2 className="account-login__title">لطفا وارد حساب کاربری خود شوید :</h2>
                     <form
                        className="account-form"
                        action=""
                        onSubmit={(event) => {
                           formSend(event);
                        }}
                     >
                        <div className="account-input__holder">
                           <label className="account-input__label" htmlFor="account-username">
                              نام کاربری :
                           </label>
                           <input
                              id="account-username"
                              type="text"
                              className="account-input"
                              placeholder="UserName"
                              onChange={(event) => {
                                 inputUserHandler(event);
                              }}
                              value={userName}
                           />
                        </div>

                        <div className="account-input__holder">
                           <label className="account-input__label" htmlFor="account-password">
                              رمز عبور :
                           </label>
                           <input
                              id="account-password"
                              type="password"
                              className="account-input"
                              placeholder="Password"
                              onChange={(event) => {
                                 inputPasswordHandler(event);
                              }}
                              value={password}
                           />
                        </div>

                        <div className="account-input__holder">
                           <label className="account-input__label" htmlFor="account-email">
                              ایمیل :
                           </label>
                           <input
                              id="account-email"
                              type="email"
                              className="account-input"
                              placeholder="Email"
                              onChange={(event) => {
                                 inputEmailHandler(event);
                              }}
                              value={email}
                           />
                        </div>

                        <div className="account-check__holder">
                           <input id="account-check" type="checkbox" className="account-check" />
                           <label htmlFor="account-check">مرا به خاطر بسپار </label>
                        </div>

                        <input id="form-submit" type="submit" className="form-submit" value="ورود" />
                     </form>
                  </div>
               </div>
               <div className=" col-md-5 col-xl-4 ">
                  <div className="account-left-img"></div>
               </div>
            </div>
         </div>
      </section>
   );
}
