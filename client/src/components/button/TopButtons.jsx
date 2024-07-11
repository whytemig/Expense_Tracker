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
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-3 px-4">
      <div className="w-full md:w-auto p-2">
        <Link
          to={"/transactions"}
          className="block w-full md:w-auto px-6 py-2 border rounded-full bg-[#00FF40] text-slate-900 font-semibold text-lg tracking-wide text-center hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out"
        >
          History
        </Link>
      </div>
      <div className="w-full md:w-auto p-2">
        <button
          className="block w-full md:w-auto px-6 py-2 border rounded-full bg-[#FE0000] text-slate-300 font-semibold text-lg tracking-wide text-center hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out cursor-pointer"
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
