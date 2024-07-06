import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_TRANSACTIONS_BY_ID } from "../../graphql/query/transaction.query";
import { useEffect, useState } from "react";

export const FormUpdate = () => {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_TRANSACTIONS_BY_ID, {
    variables: { transactionId: id },
  });

  const [formUpdate, setFormUpdate] = useState({
    paymentType: data?.transaction?.paymentType || "",
    category: data?.transaction.category || "",
    description: data?.transaction?.description || "",
    amount: data?.transaction?.amount || "",
    location: data?.transaction?.location || "",
    date: data?.transaction?.date || "",
  });

  //redender the data upon Mount
  useEffect(() => {
    if (data) {
      setFormUpdate({
        paymentType: data?.transaction?.paymentType,
        category: data?.transaction.category,
        description: data?.transaction?.description,
        amount: data?.transaction?.amount,
        location: data?.transaction?.location,
        //convert the milliseconds back into a date input value
        date: new Date(+data?.transaction?.date).toISOString().substring(0, 10),
      });
    }
  }, [data]);

  // handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUpdate((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="max-w-[520px] min-w-[450px] p-6 bg-transparent border border-gray-50 rounded-lg shadow-lg h-5/6  my-[5%]">
      <form className="flex flex-col p-2">
        <div className="mb-3">
          <label
            htmlFor="paymentType"
            className="block mb-2 text-md text-slate-300"
          >
            Payment Type:
          </label>
          <select
            name="paymentType"
            id="paymentType"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
            value={formUpdate.paymentType}
            onChange={handleChange}
          >
            <option value="">Please choose an option</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
          </select>
        </div>
        <div className="mb-3 flex justify-center items-center gap-2">
          <div className="w-1/2">
            <label
              htmlFor="amount"
              className=" mb-2 text-md text-slate-300 block"
            >
              Amount:
            </label>

            <input
              id="amount"
              name="amount"
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
              autoComplete="on"
              placeholder="Amount $"
              value={formUpdate.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="category"
              className="block mb-2 text-md text-slate-300"
            >
              Category:
            </label>
            <select
              name="category"
              id="category"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
              value={formUpdate.category}
              onChange={handleChange}
            >
              <option value="">Please choose an option</option>
              <option value="savings">Savings</option>
              <option value="expense">Expense</option>
              <option value="asset">Asset</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="location"
            className="block mb-2 text-md text-slate-300"
          >
            Location:
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
            autoComplete="on"
            placeholder="Enter a Location"
            value={formUpdate.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="description"
            className="block mb-1 text-md text-slate-300"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
            placeholder="Enter a Description"
            value={formUpdate.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="block mb-2 text-md text-slate-300">
            Date:
          </label>
          <input
            id="date"
            type="date"
            name="date"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
            placeholder="Enter a Description"
            value={formUpdate.date}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="w-full px-4 py-2 border rounded-lg bg-lime-700 text-slate-300 font-semibold text-lg tracking-wide hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out mt-3"
          type="submit"
        >
          {loading ? "Loading".toUpperCase() : "Update".toUpperCase()}
        </button>
      </form>
    </div>
  );
};
