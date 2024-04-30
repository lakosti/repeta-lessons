import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../redux/store";

export default function Balance() {
  const balance = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Balance: {balance}</p>
      <button onClick={() => dispatch(deposit(5))}> Deposit credits</button>
      <button> Withdraw credits</button>
    </div>
  );
}
