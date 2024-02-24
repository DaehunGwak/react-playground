import styles from "./CharacterCard.module.css"

function CharacterCard({name, imageUrl}) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={`${name} character`}/>
      <span>{name}</span>
    </div>
  );
}

export default CharacterCard;
