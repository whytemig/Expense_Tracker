import { Link } from "react-router-dom";
import { FaSmileBeam } from "react-icons/fa";
import { ImSad2 } from "react-icons/im";
import { formatDate } from "../../helper/formatDate";
import toast from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { DELETE_TRANSACTION } from "../../graphql/mutations/transaction.mutation";
import {
  GET_CATEGORIES,
  GET_TRANSACTIONS,
} from "../../graphql/query/transaction.query";

export const TransactionCard = ({ data }) => {
  let { amount, category, _id, location, date } = data;

  const [deleteTransaction] = useMutation(DELETE_TRANSACTION, {
    refetchQueries: [GET_TRANSACTIONS, GET_CATEGORIES],
  });

  async function handledeleteTransaction(id) {
    try {
      await deleteTransaction({
        variables: { transactionId: id },
      });
      toast.success("Transaction Deleted");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-8 pb-2 flex flex-col justify-start border-2 border-gray-300 rounded-xl text-slate-300">
      <span className="absolute -top-5 border-2 border-gray-300 rounded-full bg-slate-900">
        {category === "savings" || category === "asset" ? (
          <FaSmileBeam
            size={36}
            color={category === "savings" ? "green" : "blue"}
          />
        ) : (
          <ImSad2 size={36} color="red" />
        )}
      </span>
      <h2 className="my-1 uppercase tracking-wide font-semibold text-lg">
        {category?.toUpperCase()}
      </h2>
      <p className="py-2 text-center text-3xl">${amount}</p>
      <div className="flex items-center justify-between gap-3">
        <span>{location ? location : "Not Available"}</span>
        <span>{formatDate(date)}</span>
      </div>
      <div className="py-4 flex items-center justify-between gap-5">
        <Link
          to={`${_id}`}
          className="w-1/2 px-4 py-2 border rounded-lg bg-lime-700 text-slate-300 font-semibold text-lg tracking-wide hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out text-center"
          type="submit"
        >
          UPDATE
        </Link>

        <div
          className="text-center w-1/2 px-4 py-2 border rounded-lg  bg-rose-700 text-slate-300 font-semibold text-lg tracking-wide hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={() => handledeleteTransaction(_id)}
        >
          Delete
        </div>
      </div>
    </div>
  );
};
