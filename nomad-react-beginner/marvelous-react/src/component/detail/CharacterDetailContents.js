import styles from "./CharacterDetailContents.module.css";

function CharacterDetailContents({title, contents}) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {title}
      </div>
      <div>
        <ol>
          {contents.map((content) => <li className={styles.list}>{content}</li>)}
        </ol>
      </div>
    </div>
  );
}

export default CharacterDetailContents;
