import {useParams} from "react-router-dom";

function CharacterDetailPage() {
  const {id} = useParams()

  return (
    <div>detail: {id}</div>
  );
}

export default CharacterDetailPage;
