import {CharacterCardImage, CharacterCardWrapper, CharactersText} from "../styles/CharactersPageStyles";
import {SimpleCharacterResponse} from "../dto/SimpleCharacterResponse";
import {Link} from "react-router-dom";

interface CharacterCardProps {
  simpleCharacter: SimpleCharacterResponse;
}

function CharacterCard({simpleCharacter}: CharacterCardProps) {

  return (
    <Link to={`character/${simpleCharacter.id}`}>
      <CharacterCardWrapper>
        <CharacterCardImage src={simpleCharacter.imageUrl}/>
        <CharactersText>{simpleCharacter.name}</CharactersText>
      </CharacterCardWrapper>
    </Link>
  )
}

export default CharacterCard;
