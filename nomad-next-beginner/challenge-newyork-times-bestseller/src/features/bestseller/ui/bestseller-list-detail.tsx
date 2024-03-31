import {BookCard, getBestsellerDetailResult} from "@/entities/bestseller";
import styles from "./styles/bestseller-list-detail.module.css";

export async function BestsellerListDetail({name}: {name: string}) {
  const result = await getBestsellerDetailResult(name);

  return <div className={styles.wrapper}>
    <p className={styles.title}>
      {result.display_name}
    </p>
    <div className={styles.booksWrapper}>
      {
        result.books.map(book =>
          <BookCard
            key={book.primary_isbn13}
            book={book}
          />
        )
      }
    </div>
  </div>;
}
