import { FaSmileBeam } from "react-icons/fa";
import { ImSad2 } from "react-icons/im";

export const TransactionCard = ({ category }) => {
  return (
    <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-8 pb-2 flex flex-col justify-start border-2 border-gray-300 rounded-xl text-slate-300">
      <span className="absolute -top-5 border-2 border-gray-300 rounded-full bg-slate-300">
        {category ? (
          <FaSmileBeam size={36} color="green" />
        ) : (
          <ImSad2 size={36} color="red" />
        )}
      </span>
      <h2 className="my-1 uppercase tracking-wide ">Expense</h2>
      <p className="py-2 text-center text-3xl">$AMOUNT</p>
      <div className="flex items-center justify-between gap-3">
        <span>Location</span>
        <span>Date</span>
      </div>
      <div className="py-4 flex items-center justify-center">
        <button
          className="w-full px-4 py-2 border rounded-lg bg-lime-700 text-slate-300 font-semibold text-lg tracking-wide hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out"
          type="submit"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};
