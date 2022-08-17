import "./App.css";
import Home from "./Components/Home/Home";
import { useRoutes } from "react-router-dom";
import { routes } from "./Components/routes/routes";

function App() {
   let router = useRoutes(routes);

   return <>{router}</>;
}

export default App;
