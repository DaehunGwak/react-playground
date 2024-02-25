import CharacterDetailImage from "./detail/CharacterDetailImage";
import CharacterDetailLinkButton from "./detail/CharacterDetailLinkButton";
import styles from "./CharacterDetail.module.css";
import CharacterDetailContents from "./detail/CharacterDetailContents";

function CharacterDetail({name, imageUrl, externalLinks, series, comics, stories}) {
  return (
    <div>
      <CharacterDetailImage
        name={name}
        imageUrl={imageUrl}
      />
      <div className={styles.externalContainer}>
        {
          externalLinks.map((link) =>
            <CharacterDetailLinkButton
              text={link.type}
              linkUrl={link.url}
            />)
        }
      </div>
      <div className={styles.contentsContainer}>
        {
          series.length === 0
            ? null
            : <CharacterDetailContents
              title="Series"
              contents={series.map((s) => s.name)}
            />
        }
        {
          series.length === 0
            ? null
            : <CharacterDetailContents
              title="Comics"
              contents={comics.map((c) => c.name)}
            />
        }
        {
          series.length === 0
            ? null
            : <CharacterDetailContents
              title="Stories"
              contents={stories.map((s) => s.name)}
            />
        }
      </div>
    </div>
  );
}

export default CharacterDetail;
