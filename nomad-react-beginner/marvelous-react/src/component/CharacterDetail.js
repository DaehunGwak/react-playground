import CharacterDetailImage from "./detail/CharacterDetailImage";
import CharacterDetailLinkButton from "./detail/CharacterDetailLinkButton";
import styles from "./CharacterDetail.module.css";
import CharacterDetailContents from "./detail/CharacterDetailContents";
import CharacterDetailDescription from "./detail/CharacterDetailDescription";

function CharacterDetail({name, imageUrl, externalLinks, description, series, comics, stories, events}) {
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
      <div className={styles.descriptionContainer}>
        {
          (description !== undefined && description.length > 0)
            ? <CharacterDetailDescription description={description} />
            : null
        }
      </div>
      <div className={styles.contentsContainer}>
        {
          events.length === 0
            ? null
            : <CharacterDetailContents
              title="Events"
              contents={events.map((e) => e.name)}
            />
        }
        {
          series.length === 0
            ? null
            : <CharacterDetailContents
              title="Series"
              contents={series.map((s) => s.name)}
            />
        }
        {
          comics.length === 0
            ? null
            : <CharacterDetailContents
              title="Comics"
              contents={comics.map((c) => c.name)}
            />
        }
        {
          stories.length === 0
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
