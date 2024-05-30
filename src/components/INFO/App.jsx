import Reader from "./Reader";
import items from "./articles.json";

export default function App() {
  return (
    <>
      <Reader items={items} />
    </>
  );
}
