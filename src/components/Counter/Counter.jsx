import { useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handlePlusClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleMinusClick = () => {
    if (counter <= -5) {
      return alert("Oooops");
    }

    setCounter((prev) => prev - 1);
  };

  const resetClick = () => {
    setCounter(0);
  };

  return (
    <div className={s.counter}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <div>
          <button onClick={handleMinusClick}>minus</button>
          <button onClick={resetClick}>reset</button>
          <button onClick={handlePlusClick}>plus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
