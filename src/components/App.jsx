import { useSelector } from "react-redux";
import Balance from "./Balance";
import LangSwitcher from "./LangSwitcher";

export default function App() {
  const lang = useSelector((state) => state.locale.lang);
  return (
    <div>
      <h1>Redux</h1>
      <Balance />
      <h2>LangSwitcher </h2>
      <LangSwitcher />
      <p>Selected lang: {lang}</p>
    </div>
  );
}
