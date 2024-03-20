import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import HomePageView from "./views/pages/HomePageView";
import PopularPageView from "./views/pages/PopularPageView";

export const router = createBrowserRouter([
  {
    element: <App/>,
    path: "/",
    children: [
      {
        element: <HomePageView/>,
        path: "",
        children: [
          {
            element: <PopularPageView/>,
            path: ""
          }
        ]
      }
    ]
  }
]);
