import s from "./ColorPicker.module.css";
import colors from "../../assets/colors.json";
import { useState } from "react";

const ColorPicker = () => {
  const [currentColor, setCurrentCollor] = useState("white");

  const handleColorPickerColor = (color) => {
    console.log(color);
    setCurrentCollor(color);
  };

  return (
    <section
      style={{ backgroundColor: currentColor }}
      className={s.colorPicker}
    >
      <div className={s.wrapper}>
        <h1 className={s.colorName}>Current color {currentColor}</h1>
        <ul className={s.list}>
          {colors.map((item) => (
            <li
              onClick={() => handleColorPickerColor(item.color)}
              className={s.item}
              key={item.id}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;
