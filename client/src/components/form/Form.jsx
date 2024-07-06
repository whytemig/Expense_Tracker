import { useMutation } from "@apollo/client";
import { useState } from "react";
import { TRANSACTION_MUTATION } from "../../graphql/mutations/transaction.mutation";
import toast from "react-hot-toast";

import { GET_TRANSACTIONS } from "../../graphql/query/transaction.query";

const Form = () => {
  //state
  const [transacForm, setTransacForm] = useState({
    paymentType: "",
    category: "",
    description: "",
    amount: "",
    location: "",
    date: "",
  });

  //GRAPHQL FUNC.
  const [createTransaction, { loading }] = useMutation(TRANSACTION_MUTATION, {
    refetchQueries: [GET_TRANSACTIONS],
  });

  //submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    let { paymentType, category, description, amount, date } = transacForm;

    if (!paymentType || !category || !description || !amount || !date) {
      toast.error("These fields are required");
      return;
    }

    amount = parseFloat(transacForm?.amount);

    try {
      await createTransaction({
        variables: { input: { ...transacForm, amount } },
      });
      setTransacForm({
        paymentType: "",
        category: "",
        description: "",
        amount: "",
        location: "",
        date: "",
      });
      toast.success("Transaction Successful!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // handle change function
  const handleChangle = (e) => {
    const { name, value } = e.target;
    setTransacForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form className="flex flex-col p-2" onSubmit={handleSubmit}>
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
          value={transacForm.paymentType}
          onChange={handleChangle}
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
            value={transacForm.amount}
            onChange={handleChangle}
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
            value={transacForm.category}
            onChange={handleChangle}
          >
            <option value="">Please choose an option</option>
            <option value="savings">Savings</option>
            <option value="expense">Expense</option>
            <option value="asset">Asset</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="block mb-2 text-md text-slate-300">
          Location:
        </label>
        <input
          id="location"
          name="location"
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
          autoComplete="on"
          value={transacForm.location}
          onChange={handleChangle}
          placeholder="Enter a Location"
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
          value={transacForm.description}
          onChange={handleChangle}
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
          value={transacForm.date}
          onChange={handleChangle}
          required
        />
      </div>
      <button
        className="w-full px-4 py-2 border rounded-lg bg-lime-700 text-slate-300 font-semibold text-lg tracking-wide hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out"
        type="submit"
        disabled={loading}
      >
        {loading ? "Loading".toUpperCase() : "Submit".toUpperCase()}
      </button>
    </form>
  );
};

export default Form;
