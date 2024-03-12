import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <CharactersPage/>
      },
      {
        path: "character/:id",
        element: <CharacterDetailPage/>
      }
    ]
  }
]);

