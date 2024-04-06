import Link from "next/link";
import styles from "./styles/outline-link-button.module.css";

export function OutlineLinkButton({
  href,
  text,
  fontSize = "1rem",
}: Readonly<{
  href: string,
  text: string,
  fontSize?: string,
}>) {
  return (
    <Link href={href} style={{fontSize}} className={styles.link}>
      <div className={styles.button}>
        {text}
      </div>
    </Link>
  )
}
