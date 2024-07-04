import { TransactionCard } from "../cards/TransactionCard";

function Transactions() {
  return (
    <div className="grid grid-cols-4 gap-8 p-8 md:p-16 ">
      <TransactionCard category={true} />
      <TransactionCard category={false} />
      <TransactionCard category={true} />
      <TransactionCard category={false} />
    </div>
  );
}

export default Transactions;
