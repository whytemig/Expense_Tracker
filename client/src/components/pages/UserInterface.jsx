function UserInterface() {
  return (
    <div className="text-slate-300 flex flex-col">
      <div className="text-6xl text-center p-4">
        <h1 className="">Track My Wallet</h1>
      </div>

      <div className="flex justify-between mt-4 p-4">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl mb-4 text-center">Graph</h2>
          {/* Add chart components or content here */}
        </div>
        <div className="w-1/2 p-6 px-8 bg-transparent border border-gray-50 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 text-center">Expense/Income:</h2>
          <form className="flex flex-col p-2">
            <div className="mb-6">
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
              >
                <option value="">Please choose an option</option>
                <option value="savings">Savings</option>
                <option value="expense">Expense</option>
                <option value="asset">Asset</option>
              </select>
            </div>

            <div className="mb-6 flex justify-center items-center gap-2">
              <div className="w-1/2">
                <label
                  htmlFor="amount"
                  className=" mb-2 text-md text-slate-300 block"
                >
                  Amount:
                </label>

                <input
                  id="amount"
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
                  autoComplete="on"
                  placeholder="Amount $"
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
                >
                  <option value="">Please choose an option</option>
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="location"
                className="block mb-2 text-md text-slate-300"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
                autoComplete="on"
                placeholder="Enter a Location"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-md text-slate-300"
              >
                Description:
              </label>
              <textarea
                id="description"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
                placeholder="Enter a Description"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="date"
                className="block mb-2 text-md text-slate-300"
              >
                Date:
              </label>
              <input
                id="date"
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900"
                placeholder="Enter a Description"
                required
              />
            </div>

            <button
              className="w-full px-4 py-2 border rounded-lg bg-lime-700 text-slate-300 font-semibold text-lg tracking-wide hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInterface;
