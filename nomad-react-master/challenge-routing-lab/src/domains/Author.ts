import Book from "./Book";

class Author {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly books: Book[] = [],
  ) {}
}

export default Author;
