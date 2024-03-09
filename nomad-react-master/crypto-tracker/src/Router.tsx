import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import CoinsPage from "./routes/CoinsPage";
import CoinPage from "./routes/CoinPage";
import CoinPricePage from "./routes/coin-detail/CoinPricePage";
import CoinChartPage from "./routes/coin-detail/CoinChartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <CoinsPage/>
      },
      {
        path: ":coinId",
        element: <CoinPage/>,
        children: [
          {
            path: "price",
            element: <CoinPricePage/>
          },
          {
            path: "chart",
            element: <CoinChartPage/>
          }
        ]
      }
    ]
  }
]);
