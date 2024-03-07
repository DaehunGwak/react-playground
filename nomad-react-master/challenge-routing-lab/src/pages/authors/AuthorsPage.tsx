import {mockAuthors} from "../../utils/mock";
import {Link, Outlet} from "react-router-dom";

function AuthorsPage() {
  const authors = mockAuthors;

  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        {
          authors.map((author) => (
            <li key={`author-${author.id}`}>
              <Link key={`author-link-${author.id}`} to={`/author/${author.id}`}>
                {author.name}
              </Link>
            </li>
          ))
        }
      </ul>
      <Outlet/>
    </div>
  );
}

export default AuthorsPage;
