import React from "react";
import "./MainDashboard.css";

export default function MainDashboard() {
   return (
      <div className="dashboard-main">
         <div className="row">
            <div className="col-md-6">
               <img src="/pics/admin-pic.png" alt="" className="dashboard-main__img" />
            </div>
            <div className="col-md-6">
               <div className="dashboard-main-explain">
                  <h2 className="dashboard-main__title">خوش آمدید علی عزیز</h2>
                  <p className="dashboard-main__text">از طریق این پنل مدیریتی میتوانید محصولات سایت خود را مدیریت کنید.</p>
               </div>
            </div>
         </div>
      </div>
   );
}
