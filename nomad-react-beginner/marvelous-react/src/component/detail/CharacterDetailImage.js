import styles from "./CharacterDetailImage.module.css";

function CharacterDetailImage({name, imageUrl}) {
  return (
    <div className={styles.container}>
      <img
        src={imageUrl}
        alt={`${name} character`}
        className={styles.thumbnailImage}
      />
      <span className={styles.name}>{name}</span>
    </div>
  );
}

export default CharacterDetailImage;
