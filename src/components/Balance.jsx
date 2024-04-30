import { useSelector } from "react-redux";

export default function Balance() {
  const balance = useSelector((state) => state.balance.value);

  return (
    <div>
      <p>Balance: {balance}</p>
      <button> Deposit credits</button>
      <button> Withdraw credits</button>
    </div>
  );
}
