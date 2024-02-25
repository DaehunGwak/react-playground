import styles from "./CharacterDetailDescription.module.css";

function CharacterDetailDescription({description}) {
  return (
    <div className={styles.container}>
      {description}
    </div>
  );
}

export default CharacterDetailDescription;
