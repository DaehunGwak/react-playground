import {HeaderButton} from "@/features/buttons";
import styles from "../styles/header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <HeaderButton href={"/"} text={"Home"} fontSize={"3rem"}/>
      <HeaderButton href={"/about"} text={"About"} fontSize={"1.8rem"}/>
    </div>
  );
}
