import { useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { AUTH_USER } from "../../graphql/query/authUser";
import { DELETE_ALL_TRANSACTIONS } from "../../graphql/mutations/transaction.mutation";
import toast from "react-hot-toast";
import {
  GET_CATEGORIES,
  GET_TRANSACTIONS,
} from "../../graphql/query/transaction.query";

const TopButtons = () => {
  const { data } = useQuery(AUTH_USER, {
    refetchQueries: ["AuthUser"],
  });

  const [deleteAllTransactions, { loading }] = useMutation(
    DELETE_ALL_TRANSACTIONS,
    { refetchQueries: [GET_TRANSACTIONS, GET_CATEGORIES] }
  );

  console.log(data?.authUser?._id);

  async function deleteAll() {
    try {
      await deleteAllTransactions();

      toast.success("All Transactions Deleted");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="flex items-center justify-evenly gap-3">
      <div className="flex p-4 items-center justify-center">
        <Link
          to={"/transactions"}
          className=" px-4 py-2 border rounded-lg bg-lime-700 text-slate-300 font-semibold text-lg tracking-wide hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out"
        >
          History
        </Link>
      </div>
      <div>
        <button
          className="text-center  px-4 py-2 border rounded-lg  bg-rose-700 text-slate-300 font-semibold text-lg tracking-wide hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out cursor-pointer w-full"
          disabled={loading}
          onClick={deleteAll}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TopButtons;
