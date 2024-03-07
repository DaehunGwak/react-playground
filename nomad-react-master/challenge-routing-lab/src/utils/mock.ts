import Author from "../domains/Author";
import Book from "../domains/Book";

export const mockAuthors: readonly Author[] = [
  new Author(0, "J. K. Rowling", [
    new Book(0, "Harry Potter I"),
    new Book(1, "Harry Potter II"),
  ]),
  new Author(1, "J. R. R. Tolkien", [
    new Book(0, "Lord of The Rings I"),
    new Book(1, "Lopd of The Rings II"),
  ]),
];

export const mockChapters: readonly string[] = [
  "Chapter I", "Chapter II", "Chapter III", "Chapter IV", "Chapter V"
];

export const mockCharacters: readonly string[] = [
  "Good Guy A", "Good Guy B", "Bad Guy A", "Bad Guy B"
];
