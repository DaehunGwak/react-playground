import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import ErrorComponent from "../components/ErrorComponent";

const router = createBrowserRouter([
  // container
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "",
        element: <Home/>,
        errorElement: <ErrorComponent/>,
      },
      {
        path: "about",
        element: <About/>
      },
    ],
  }
]);

export default router;
