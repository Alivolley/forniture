import Home from "../Home/Home";
import Account from "../Account/Account";
import Dashboard from "../Dashboard/Dashbaord";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProductList from "../Dashboard/prodocts/ProductList";
import ProductEdit from "../Dashboard/prodocts/ProductEdit";
import ProductDelete from "../Dashboard/prodocts/ProductDelete";
import ProductAdd from "../Dashboard/prodocts/ProductAdd";
import AllProducts from "../AllProducts/AllProducts";
import Classic from "../Categories/Classic";
import Rahati from "../Categories/Rahati";
import Saltanati from "../Categories/Saltanati";
import Contact from "../Contact/Contact";
import ChosenCard from "../ChosenCard/ChosenCard";

export let routes = [
   { path: "/", element: <Home></Home> },
   { path: "/account", element: <Account></Account> },
   { path: "/dashboard", element: <Dashboard></Dashboard> },
   { path: "/error", element: <ErrorPage></ErrorPage> },
   { path: "/allproducts", element: <AllProducts></AllProducts> },
   { path: "/classic", element: <Classic></Classic> },
   { path: "/rahati", element: <Rahati></Rahati> },
   { path: "/saltanati", element: <Saltanati></Saltanati> },
   { path: "/contact-us", element: <Contact></Contact> },
   { path: "/product/:id", element: <ChosenCard></ChosenCard> },
   { path: "/dashboard-productlist", element: <ProductList></ProductList> },
   { path: "/dashboard-productadd", element: <ProductAdd></ProductAdd> },
   { path: "/dashboard-productedit", element: <ProductEdit></ProductEdit> },
   { path: "/dashboard-productdelete", element: <ProductDelete></ProductDelete> },
];
