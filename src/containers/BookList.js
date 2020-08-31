import React from "react";
// import { RepositoryFactory } from "../repositories/RepositoryFactory";
import Book from "./Book";

// const BooksRepository = RepositoryFactory.get("books");

function BookList(props) {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   BooksRepository.getBooks().then((res) => setBooks(res.data));
  // });

  return (
    <div className="py-4">
      <Book url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447303603l/2767052.jpg" />
      <Book url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY475_.jpg" />
      <Book url="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039443l/41865.jpg" />
    </div>
  );
}

export default BookList;
