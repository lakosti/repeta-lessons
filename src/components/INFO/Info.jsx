import { useState } from "react";
import ClickCounter from "./ClickCounter";

const Info = () => {
  //* загальний стейт

  const [count, setCount] = useState(0);

  const [obj, setObj] = useState({
    a: 1,
    b: 5,
    c: {
      x: 5,
      y: 10,
    },
  });

  const handleSetObj = () => {
    setObj({
      ...obj, // *розпилюємо весь об'єкт
      b: 15, //* змінюємо значення
      c: {
        ...obj.c,
        y: 20,
      },
    });
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleSetObj}>Change</button>
      <ClickCounter onHandleClick={handleClick} count={count} />

      <ClickCounter />
      <ClickCounter />
      <ClickCounter />
    </div>
  );
};

export default Info;
