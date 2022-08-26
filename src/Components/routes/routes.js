import Home from "../Home/Home";
import Account from "../Account/Account";
import Dashboard from "../Dashboard/Dashbaord";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProductList from "../Dashboard/prodocts/ProductList";
import ProductEdit from "../Dashboard/prodocts/ProductEdit";
import ProductDelete from "../Dashboard/prodocts/ProductDelete";
import ProductAdd from "../Dashboard/prodocts/ProductAdd";
import AllProducts from "../AllProducts/AllProducts";

export let routes = [
   { path: "/", element: <Home></Home> },
   { path: "/account", element: <Account></Account> },
   { path: "/dashboard", element: <Dashboard></Dashboard> },
   { path: "/error", element: <ErrorPage></ErrorPage> },
   { path: "/allproducts", element: <AllProducts></AllProducts> },
   { path: "/dashboard-productlist", element: <ProductList></ProductList> },
   { path: "/dashboard-productadd", element: <ProductAdd></ProductAdd> },
   { path: "/dashboard-productedit", element: <ProductEdit></ProductEdit> },
   { path: "/dashboard-productdelete", element: <ProductDelete></ProductDelete> },
];
