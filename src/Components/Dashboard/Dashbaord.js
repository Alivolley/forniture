import React, { useEffect, useState } from "react";
import SidebarDashboard from "./SidebarDashboard";
import MainDashboard from "./MainDashboard";
import Header from "../Header/Header";
import DashboardCollapse from "./DashboardCollapse";

import "./Dashboard.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
   const navigate = useNavigate();

   useEffect(() => {
      !Cookies.get("login") && navigate("/account");
   }, []);

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
