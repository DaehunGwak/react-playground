import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Coins/>
      },
      {
        path: ":coinId",
        element: <Coin/>
      }
    ]
  }
]);
