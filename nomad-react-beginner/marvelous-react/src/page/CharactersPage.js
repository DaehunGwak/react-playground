import {useEffect, useState} from "react";
import Loading from "../component/Loading";
import {fetchJson} from "../util/api";
import styles from "./CharactersPage.module.css";
import CharacterCard from "../component/CharacterCard";
import {Link} from "react-router-dom";

const CHARACTERS_API_URL =
  "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const json = await fetchJson(CHARACTERS_API_URL);
      setCharacters(json.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.containerTitle}>
        Characters
      </span>
      <div className={styles.containerContents}>
        {
          characters.length === 0
            ? <Loading/>
            : characters.map((character) =>
              <Link to={`/character/${character.id}`} className={styles.link}>
                <CharacterCard
                  key={`character-card-${character.id}`}
                  name={character.name}
                  imageUrl={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
              </Link>
            )
        }
      </div>
    </div>
  );
}

export default CharactersPage;
