import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import HomePageView from "./views/pages/HomePageView";
import MoviesView from "./views/components/MoviesView";
import NotFoundPageView from "./views/pages/NotFoundPageView";
import MovieSearchView from "./views/components/MovieSearchView";

export const router = createBrowserRouter([
  {
    element: <App/>,
    path: "/",
    errorElement: <NotFoundPageView/>,
    children: [
      {
        element: <HomePageView/>,
        path: "",
        children: [
          {
            element: <MoviesView/>,
            path: "",
          },
          {
            element: <MovieSearchView/>,
            path: "search",
          },
          {
            element: <MoviesView/>,
            path: ":type",
          },
        ]
      },
    ]
  },
  {
    element: <NotFoundPageView/>,
    path: "/notfound"
  }
]);
