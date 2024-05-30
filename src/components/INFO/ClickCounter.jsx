//* ІЗОЛЯЦІЯ СТАНУ

// const ClickCounter = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return <button onClick={handleClick}>Клік {count} разів</button>;
// };
const ClickCounter = ({ count, handleClick }) => {
  return <button onClick={handleClick}>Клік {count} разів</button>;
};

export default ClickCounter;
