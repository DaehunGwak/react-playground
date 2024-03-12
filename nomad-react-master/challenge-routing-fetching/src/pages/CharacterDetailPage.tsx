import {Link, useLocation, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {getDetailCharacter} from "../repositories/DisneyApiRepository";
import {DetailBigText, DetailImage, Film, FilmsWrapper} from "../styles/CharacterDetailPageStyles";
import {SimpleCharacterResponse} from "../dto/SimpleCharacterResponse";
import {Fragment} from "react";

function CharacterDetailPage() {
  const {id} = useParams();

  const {state} = useLocation();
  const simpleCharacter = state?.simpleCharacter as SimpleCharacterResponse;

  const {isLoading, data: character} =
    useQuery(`getDetailCharacter-${id}`, () => getDetailCharacter(Number(id)));


  return (
    <Fragment>
      <Link to={"/"}>
        <DetailBigText>&larr;</DetailBigText>
      </Link>
      <DetailImage src={simpleCharacter.imageUrl}/>
      <DetailBigText>{simpleCharacter.name}'s Films'</DetailBigText>
      {
        isLoading
          ? "Loading..."
          : <FilmsWrapper>
            {
              character!.films.map(
                (film) => <Film key={film}>{film}</Film>
              )
            }
          </FilmsWrapper>
      }
    </Fragment>
  );
}

export default CharacterDetailPage;
