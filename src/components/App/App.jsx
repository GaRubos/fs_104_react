import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Message from "../Message/Message";

import BooksList from "../BooksList/BooksList";
import favouriteBooks from "../../assets/books.json";

import Card from "../Card/Card";

import CustomButton from "../CustomButton/CustomButton";

import "modern-normalize";
import "../../css/index.css";

import s from "./App.module.css";
import Button from "../Button/Button";

import Counter from "../Counter/Counter";
import ColorPicker from "../ColorPicker/ColorPicker";

function App() {
  const isOnline = false;

  return (
    <main>
      <Header />
      <div className={s.message}>
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
      <div className={s.bookList}>
        <BooksList books={favouriteBooks} />
      </div>
      <Card>Text between opening and closing tag</Card>
      <Button />
      <>
        <div>
          <CustomButton message="Playing music!">Play some music</CustomButton>
          <CustomButton message="Uploading your data!">
            Upload data
          </CustomButton>
        </div>
      </>

      {/* =================================================== */}
      <Counter />
      <ColorPicker />

      <Footer />
    </main>
  );
}

export default App;
