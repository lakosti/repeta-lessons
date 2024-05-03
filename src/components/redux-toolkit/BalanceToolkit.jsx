import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deposit, withdraw } from "../../redux-toolkit/balanceSlice";

export default function BalanceToolkit() {
  const balance = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleDeposit = () => {
    dispatch(deposit(value));
    setValue("");
  };
  const handleWithdraw = () => {
    dispatch(withdraw(value));
    setValue("");
  };
  return (
    <div>
      <p>Balance: {balance}</p>
      {/* //* input - локальне значення(потрібне лише в цьому компоненті (наприкл модалка ще)) */}
      <input type="number " value={value} onChange={(evt) => setValue(Number(evt.target.value))} />
      <button onClick={handleDeposit}> Deposit credits</button>
      <button onClick={handleWithdraw}> Withdraw credits</button>
    </div>
  );
}
