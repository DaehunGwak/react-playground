import {OutlineLinkButton} from "@/shared/ui";
import {getBestsellerListResults} from "@/entities/best-seller";
import styles from "./styles/best-seller-list.module.css";

export async function BestSellerList() {
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
