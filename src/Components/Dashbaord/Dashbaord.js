import React, { useState } from "react";
import SidebarDashboard from "./SidebarDashboard";
import MainDashboard from "./MainDashboard";
import Header from "../Header/Header";
import DashboardCollapse from "./DashboardCollapse";

import "./Dashbaord.css";

export default function Dashbaord() {
   return (
      <>
         <Header></Header>
         <div className="containers dashboard">
            <DashboardCollapse></DashboardCollapse>
            <div className="row">
               <div className="col-md-8">
                  <MainDashboard></MainDashboard>
               </div>
               <div className="col-md-4">
                  <SidebarDashboard></SidebarDashboard>
               </div>
            </div>
         </div>
      </>
   );
}
