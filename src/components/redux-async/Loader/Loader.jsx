import { useState, useEffect } from "react";
// import css from "./Loader.module.css";

export default function Loader({ children }) {
  const [dots, setDots] = useState("");

  //* інтерактивні 3 точки
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <p>
      <b>
        {children}
        {dots}
      </b>
    </p>
  );
}
