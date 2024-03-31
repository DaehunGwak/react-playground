import {OutlineLinkButton} from "@/shared/ui";
import styles from "./styles/bestseller-list.module.css";
import {getBestsellerListResults} from "@/entities/bestseller";

export async function BestsellerList() {
  const results = await getBestsellerListResults();

  return (
    <div className={styles.wrapper}>
      {
        results.map(bestseller =>
          <OutlineLinkButton
            key={bestseller.list_name_encoded}
            href={`/list/${bestseller.list_name_encoded}`}
            text={bestseller.display_name}
            fontSize="2rem"
          />
        )
      }
    </div>
  )
}
