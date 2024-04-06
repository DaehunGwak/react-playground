import {NoOutlineLinkButton} from "@/shared/ui";
import styles from "./styles/header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <NoOutlineLinkButton href={"/"} text={"Home"} fontSize={"3rem"}/>
      <NoOutlineLinkButton href={"/about"} text={"About"} fontSize={"1.8rem"}/>
    </div>
  );
}
