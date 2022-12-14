import "./App.css";
import { useLocation, useRoutes } from "react-router-dom";
import { routes } from "./Components/routes/routes";
import { useEffect } from "react";

function App() {
   const location = useLocation();

   useEffect(() => window.scrollTo(0, 0), [location.pathname]);

   let router = useRoutes(routes);

   return <>{router}</>;
}

export default App;
