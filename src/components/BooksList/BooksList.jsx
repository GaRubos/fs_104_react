import s from "./BooksList.module.css";

const BooksList = ({ books }) => {
  return (
    <div className={s.booksListTitle}>
      <h1>Books of the week</h1>
      <ul className={s.booklist}>
        {books.map((book) => {
          return (
            <li key={book.id} HiUser>
              {book.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksList;
