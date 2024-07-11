import { GET_TRANSACTIONS } from "../../graphql/query/transaction.query";
import { TransactionCard } from "../cards/TransactionCard";
import { useQuery } from "@apollo/client";

function Transactions() {
  const { data, loading } = useQuery(GET_TRANSACTIONS);

  return (
    <div className="p-8 md:p-16">
      <div className="grid grid-cols-4 gap-8 p-8 md:p-16 ">
        {!loading &&
          data?.transactions.map((trans, indx) => (
            <TransactionCard data={trans} key={indx} />
          ))}
      </div>
      {!loading && data?.transactions?.length === 0 && (
        <div className="text-slate-300 uppercase justify-center w-1/3 mx-auto flex items-center my-[5%]">
          <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-wide leading-normal text-center">
            No <br />
            Transactions <br /> Available
          </h2>
        </div>
      )}
    </div>
  );
}

export default Transactions;
