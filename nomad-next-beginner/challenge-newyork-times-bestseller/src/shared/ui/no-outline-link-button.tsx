import Link from "next/link";
import styles from "./styles/no-outline-link-button.module.css";

export function NoOutlineLinkButton({text, href, fontSize = "1rem"}: HeaderButtonProps) {
  return <div className={styles.linkBox}>
    <Link href={href} style={{fontSize}} className={styles.link}>
      {text}
    </Link>
  </div>;
}

interface HeaderButtonProps {
  readonly text: string;
  readonly href: string;
  readonly fontSize?: string;
}
