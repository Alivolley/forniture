import React from "react";
import Header from "../Header/Header";
import "./Account.css";

export default function Account() {
   return (
      <section className="account">
         <Header></Header>
         <div className="containers">
            <div className="row account-row">
               <div className=" col-md-7 col-xl-8 ">
                  <div className="account-login-part">
                     <h2 className="account-login__title">لطفا وارد حساب کاربری خود شوید :</h2>
                     <form className="account-form" action="">
                        <div className="account-input__holder">
                           <label className="account-input__label" htmlFor="account-username">
                              نام کاربری :
                           </label>
                           <input id="account-username" type="text" className="account-input" placeholder="UserName" />
                        </div>

                        <div className="account-input__holder">
                           <label className="account-input__label" htmlFor="account-password">
                              رمز عبور :
                           </label>
                           <input id="account-password" type="password" className="account-input" placeholder="Password" />
                        </div>

                        <div className="account-input__holder">
                           <label className="account-input__label" htmlFor="account-email">
                              ایمیل :
                           </label>
                           <input id="account-email" type="email" className="account-input" placeholder="Email" />
                        </div>

                        <div className="account-check__holder">
                           <input id="account-check" type="checkbox" className="account-check" />
                           <label htmlFor="account-check">مرا به خاطر بسپار </label>
                        </div>

                        <input id="form-submit" type="submit" className="form-submit" />
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
