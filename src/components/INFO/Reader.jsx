import { useState } from "react";

//! так можна робити слайдери, відгуки і тому подібне

export default function Reader({ items }) {
  //*запихуємо в стейт індекс елемента

  const [selectedIdx, setSelectedIdx] = useState(0);

  const totalItems = items.length;
  const currentItem = items[selectedIdx];

  const handlePrevEl = () => {
    setSelectedIdx(selectedIdx - 1);
  };
  const handleNextEl = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  //* disabled btn if 0 or 11
  const firstBtn = selectedIdx === 0;
  const lastBtn = selectedIdx === totalItems - 1;

  return (
    <div>
      <div>
        <button onClick={handlePrevEl} disabled={firstBtn}>
          Prev
        </button>
        <button onClick={handleNextEl} disabled={lastBtn}>
          Next
        </button>
        <div>
          <p>
            {selectedIdx + 1}/{totalItems}
          </p>
          <article>
            <h2>{currentItem.topic}</h2>
            <p>{currentItem.text}</p>
          </article>
        </div>
      </div>
    </div>
  );
}
