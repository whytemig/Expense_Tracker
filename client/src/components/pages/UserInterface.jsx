import Form from "../form/Form";
import PieChart from "../chart/PieChart";
import TopButtons from "../button/TopButtons";
import { useQuery } from "@apollo/client";
import { GET_TRANSACTIONS } from "../../graphql/query/transaction.query";

function UserInterface() {
  const { data, loading } = useQuery(GET_TRANSACTIONS);

  console.log(data, loading);

  return (
    <div className="text-slate-300 flex flex-col">
      <div className="text-6xl text-center p-4">
        <h1 className="">Track My Wallet</h1>
      </div>

      {data?.transactions?.length > 0 && <TopButtons />}

      <div className="flex flex-col md:flex-row justify-evenly mt-4 p-4 flex-wrap items-center md:px-8 my-2">
        <div className="p-4 w-full md:w-[520px] md:min-w-[420px] flex justify-center items-center">
          {!loading && data?.transactions?.length === 0 ? (
            <div className="text-slate-300 uppercase items-center justify-center flex text-center w-52 mx-auto">
              <h2 className="text-6xl tracking-wide leading-normal sm:text-4xl md:text-6xl py-4">
                Tally <br />
                Your <br /> Transactions!
              </h2>
            </div>
          ) : (
            <PieChart />
          )}
        </div>

        <div className="min-w-1/3 p-6 px-8 bg-transparent border border-gray-50 rounded-lg shadow-lg h-5/6 my-2">
          <h2 className="text-2xl mb-4 text-center">Expense/Income:</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default UserInterface;
