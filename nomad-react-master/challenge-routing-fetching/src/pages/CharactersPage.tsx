import {Fragment} from "react";
import {CharacterCardsWrapper, CharactersTitle} from "../styles/CharactersPageStyles";
import {useQuery} from "react-query";
import {getCharacters} from "../repositories/DisneyApiRepository";
import CharacterCard from "../components/CharacterCard";

function CharactersPage() {
  const {isLoading, data: characters} = useQuery("getCharactersApi", getCharacters);

  return (
    <Fragment>
      <CharactersTitle>Disney Characters</CharactersTitle>
      {
        isLoading
          ? "Loading..."
          : <CharacterCardsWrapper>
            {
              characters!.filter((character) => character.imageUrl !== undefined)
                .slice(0, 100)
                .map((character) =>
                  <CharacterCard
                    key={character.id}
                    simpleCharacter={character}
                  />
                )
            }
          </CharacterCardsWrapper>
      }
    </Fragment>
  )
}

export default CharactersPage;
