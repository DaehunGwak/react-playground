import {mockChapters} from "../../utils/mock";

function BookChaptersPage() {
  const chapters = mockChapters;

  return (
    <div>
      <h3>Chapters</h3>
      <ul>
        {
          chapters.map((chapter) => <li key={chapter}>{chapter}</li>)
        }
      </ul>
    </div>
  )
}

export default BookChaptersPage;
