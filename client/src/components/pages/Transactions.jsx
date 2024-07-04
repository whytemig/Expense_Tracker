import { GET_TRANSACTIONS } from "../../graphql/query/transaction.query";
import { TransactionCard } from "../cards/TransactionCard";
import { useQuery } from "@apollo/client";

function Transactions() {
  const { data, loading } = useQuery(GET_TRANSACTIONS);

  return (
    <div className="grid grid-cols-4 gap-8 p-8 md:p-16 ">
      {!loading &&
        data?.transactions.map((trans, indx) => (
          <TransactionCard data={trans} key={indx} />
        ))}

      {!loading && data?.transactions?.length === 0 && (
        <p className="text-2xl font-bold text-center w-full ">
          No Transaction Available
        </p>
      )}
    </div>
  );
}

export default Transactions;
