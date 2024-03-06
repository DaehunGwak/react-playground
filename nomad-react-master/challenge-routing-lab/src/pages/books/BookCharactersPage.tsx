import {mockCharacters} from "../../utils/mock";

function BookCharactersPage() {
  const characters = mockCharacters;

  return (
    <div>
      <h3>Chapters</h3>
      <ul>
        {
          characters.map((character) => <li key={character}>{character}</li>)
        }
      </ul>
    </div>
  )
}

export default BookCharactersPage;
