import {Contents} from "@/widgets/contents";
import styles from "./styles/about-page.module.css";

export function AboutPage() {
  return (
    <Contents>
      <p className={styles.title}>
        About us
      </p>
      <p className={styles.description}>
        Welcome to the official explorer for The New York Times Bestseller list explorer:<br/>
        We hope enjoy your stay!
      </p>
    </Contents>
  );
}
