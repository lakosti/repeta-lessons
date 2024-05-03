import { useSelector } from "react-redux";
import BalanceToolkit from "./redux-toolkit/BalanceToolkit";
import LangSwitcherToolkit from "./redux-toolkit/LangSwitcherToolkit";
// import Balance from "./Balance";
// import LangSwitcher from "./LangSwitcher";

export default function App() {
  const lang = useSelector((state) => state.locale.lang);
  return (
    <div>
      <h1>Redux</h1>
      {/* <Balance /> */}
      <BalanceToolkit />
      <h2>LangSwitcher </h2>
      {/* <LangSwitcher /> */}
      <LangSwitcherToolkit />
      <p>Selected lang: {lang}</p>
    </div>
  );
}
