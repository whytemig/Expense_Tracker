function UserInterface() {
  /*    description:String!
    paymentType:String!
    category:String!
    amount:Float!
    date:String!
    location:String*/
  return (
    <div className="text-slate-300 flex flex-col">
      <div className="text-6xl text-center p-4">
        <h1 className="">Track My Wallet</h1>
      </div>

      <div className="flex justify-between mt-4 border border-gray-50 p-2">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl mb-4 text-center">Tally</h2>
          {/* Add chart components or content here */}
        </div>
        <div className="w-1/2 p-6 px-8 bg-transparent border border-slate-100 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 text-center">
            Enter your Expense/Income:
          </h2>
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-md text-gray-700"
              >
                FullName
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                autoComplete="on"
                placeholder="Enter your Fullname"
                required
              />
            </div>

            <label className="mb-2" htmlFor="amount">
              Amount
            </label>
            <input
              className="mb-4 p-2 border border-gray-50"
              type="number"
              id="amount"
              name="amount"
            />

            <label className="mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="mb-4 p-2 border border-gray-50"
              type="date"
              id="date"
              name="date"
            />

            <button className="bg-green-500 p-2 text-xl" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInterface;
