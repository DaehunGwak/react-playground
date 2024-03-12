import {Fragment} from "react";
import {CharacterCardsWrapper, CharactersTitle} from "../styles/CharactersPageStyles";
import {useQuery} from "react-query";
import {getCharacters} from "../repositories/DisneyApiRepository";
import CharacterCard from "../components/CharacterCard";
import {isExistImageUrls} from "../utils/image";

const CHECK_INDEX_MAX: number = 300;
const DISPLAY_INDEX_MAX: number = 100;

function CharactersPage() {
  const {isLoading, data: characters} = useQuery("getCharactersApi", getCharacters);

  const slicedCharacters = isLoading
    ? []
    : characters!.slice(0, CHECK_INDEX_MAX)
      .filter(({imageUrl}) => imageUrl !== undefined);

  const {isLoading: isLoadingImages, data: existsUrls} = useQuery(
    ["checkCharacterImageUrls", slicedCharacters.length],
    () => isExistImageUrls(slicedCharacters.map(({imageUrl}) => imageUrl!))
  )

  return (
    <Fragment>
      <CharactersTitle>Disney Characters</CharactersTitle>
      {
        (slicedCharacters.length === 0 || isLoading || isLoadingImages)
          ? "Loading..."
          : <CharacterCardsWrapper>
            {
              slicedCharacters!.filter((_, index) => existsUrls![index])
                .slice(0, Math.min(DISPLAY_INDEX_MAX, slicedCharacters.length))
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
