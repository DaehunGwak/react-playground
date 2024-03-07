import {Link, Outlet, useParams} from "react-router-dom";
import {mockAuthors} from "../../utils/mock";

function BookDetailPage() {
  const {authorId, bookId} = useParams();
  const book = mockAuthors[Number(authorId)].books[Number(bookId)];

  return (
    <div>
      <h2>{book.name}</h2>
      <div>
        <Link to={"chapters"}>Chapters</Link>
      </div>
      <div>
        <Link to={"characters"}>Characters</Link>
      </div>
      <Outlet/>
    </div>
  );
}

export default BookDetailPage;
