import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Message from "./Message/Message";

import BooksList from "./BooksList/BooksList";
import favouriteBooks from "../assets/books.json";

import Card from "./Card/Card";

import "modern-normalize";
import "../index.css";

function App() {
  const isOnline = false;

  return (
    <main>
      <Header />
      <div>
        <Message author="Stepan" message="Розробник" value={25 + 2} />
        <Message author="Ruslan" />
        <Message
          author="Pavlo"
          message="Директор"
          status={
            isOnline ? (
              <span>
                {" "}
                <b>online</b>
              </span>
            ) : (
              <span>offline</span>
            )
          }
        />
      </div>
      <BooksList books={favouriteBooks} />
      <Card>Text between opening and closing tag</Card>
      <Footer />
    </main>
  );
}

export default App;
