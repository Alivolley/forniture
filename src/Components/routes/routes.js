import Home from "../Home/Home";
import Account from "../Account/Account";
import Dashbaord from "../Dashbaord/Dashbaord";
import ErrorPage from "../ErrorPage/ErrorPage";

export let routes = [
   { path: "/", element: <Home></Home> },
   { path: "/account", element: <Account></Account> },
   { path: "/dashbaord", element: <Dashbaord></Dashbaord> },
   { path: "/error", element: <ErrorPage></ErrorPage> },
];
