import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchJson} from "../util/api";
import Loading from "../component/Loading";

const CHARACTER_DETAIL_API_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/";

function CharacterDetailPage() {
  const {id} = useParams();
  const [characterDetail, setCharacterDetail] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const json = await fetchJson(`${CHARACTER_DETAIL_API_URL}${id}`);
      setCharacterDetail(json.data.results[0]);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Character Detail: {id}</h2>
      {
        characterDetail === undefined
          ? <Loading />
          : <div>{characterDetail.name}</div>
      }
    </div>
  );
}

export default CharacterDetailPage;
