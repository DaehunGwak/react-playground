import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchJson} from "../util/api";
import Loading from "../component/Loading";
import CharacterDetail from "../component/CharacterDetail";
import styles from "./CharacterDetailPage.module.css";
import {removeTagAndEscape} from "../util/string";

const CHARACTER_DETAIL_API_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/";

function CharacterDetailPage() {
  const {id} = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const json = await fetchJson(`${CHARACTER_DETAIL_API_URL}${id}`);
      setCharacter(json.data.results[0]);
    }
    fetchData();
  }, [id]);

  return (
    <div className={styles.container}>
      {
        character === undefined
          ? <Loading/>
          : <CharacterDetail
            name={character.name}
            imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            externalLinks={character.urls}
            description={removeTagAndEscape(character.description)}
            // description={character.description}
            series={character.series === undefined ? [] : character.series.items}
            comics={character.comics === undefined ? [] : character.comics.items}
            stories={character.stories === undefined ? [] : character.stories.items}
            events={character.events === undefined ? [] : character.events.items}
          />
      }
    </div>
  );
}

export default CharacterDetailPage;
