import styles from "./CharacterDetailLinkButton.module.css";

function CharacterDetailLinkButton({text, linkUrl}) {
  const openNewTab = () => {
    window.open(linkUrl, '_blank').focus();
  }

  return (
    <button className={styles.button} onClick={openNewTab}>
      <span>Open {text}</span>
    </button>
  )
}

export default CharacterDetailLinkButton;
