import {Contents} from "@/widgets/contents";
import styles from "./styles/home-page.module.css";
import {BestSellerListSuspense} from "@/widgets/best-seller";

export function HomePage() {
  return (
    <Contents>
      <p className={styles.title}>
        The New York Times Best Seller Explorer
      </p>
      <BestSellerListSuspense/>
    </Contents>
  )
}
