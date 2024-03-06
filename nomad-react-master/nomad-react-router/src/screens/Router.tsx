import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter([
  // container
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
    ],
  }
]);

export default router;
