import {createBrowserRouter} from "react-router-dom";
import RootPage from "./pages/RootPage";
import AuthorsPage from "./pages/authors/AuthorsPage";
import AboutPage from "./pages/about/AboutPage";
import AuthorDetailPage from "./pages/authors/AuthorDetailPage";
import BookDetailPage from "./pages/books/BookDetailPage";
import BookChaptersPage from "./pages/books/BookChaptersPage";
import BookCharactersPage from "./pages/books/BookCharactersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <AuthorsPage/>
      },
      {
        path: "about",
        element: <AboutPage/>
      },
      {
        path: "author/:authorId",
        element: <AuthorDetailPage/>,
        children: [
          {
            path: ":bookId",
            element: <BookDetailPage/>,
            children: [
              {
                path: "chapters",
                element: <BookChaptersPage/>
              },
              {
                path: "characters",
                element: <BookCharactersPage/>
              }
            ]
          }
        ]
      },
    ],
  }
]);
