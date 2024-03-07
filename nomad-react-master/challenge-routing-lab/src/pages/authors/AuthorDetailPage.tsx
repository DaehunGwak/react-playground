import {Link, Outlet, useParams} from "react-router-dom";
import {mockAuthors} from "../../utils/mock";

function AuthorDetailPage() {
  const {authorId} = useParams();
  const author = mockAuthors[Number(authorId)];
  
  return (
    <div>
      <h1>{author.name}</h1>
      <ul>
        {
          author.books.map((book) => (
            <li key={`book-${book.id}`}>
              <Link key={`book-link-${book.id}`} to={`${book.id}`}>
                {book.name}
              </Link>
            </li>
          ))
        }
      </ul>
      <Outlet/>
    </div>
  );
}

export default AuthorDetailPage;
