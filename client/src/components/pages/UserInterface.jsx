import Form from "../form/Form";
import PieChart from "../chart/PieChart";

function UserInterface() {
  return (
    <div className="text-slate-300 flex flex-col">
      <div className="text-6xl text-center p-4">
        <h1 className="">Track My Wallet</h1>
      </div>

      <div className="flex p-4 items-center justify-center">
        <button>History</button>
      </div>

      <div className="flex justify-between mt-4 p-4">
        <div className="p-4 w-2/3">
          <h2 className="text-2xl mb-4 text-center">Graph</h2>
          <PieChart />
        </div>

        <div className="min-w-1/3 p-6 px-8 bg-transparent border border-gray-50 rounded-lg shadow-lg h-5/6">
          <h2 className="text-2xl mb-4 text-center">Expense/Income:</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default UserInterface;
