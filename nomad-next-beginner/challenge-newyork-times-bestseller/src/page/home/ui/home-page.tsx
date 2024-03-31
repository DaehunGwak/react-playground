import {Contents} from "@/widgets/contents";
import styles from "./styles/home-page.module.css";

export function HomePage() {
  return (
    <Contents>
      <p className={styles.title}>
        The New York Times Best Seller Explorer
      </p>
    </Contents>
  )
}
