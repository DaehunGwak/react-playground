import {BestsellerBook} from "@/entities/bestseller/model/response";
import styles from "./styles/book-card.module.css";
import {OutlineLinkButton} from "@/shared/ui";

export function BookCard({
  book: {book_image, title, author, amazon_product_url}
}: {
  book: BestsellerBook
}) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={book_image} alt={`the book cover of ${title}`}/>
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <OutlineLinkButton href={amazon_product_url} text={"Buy now"} fontSize="1.2rem"/>
      </div>
    </div>
  )
}
