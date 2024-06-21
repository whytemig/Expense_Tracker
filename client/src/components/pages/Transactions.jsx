function Transactions() {
  const transactions = [
    { id: 1, title: "Transaction 1", amount: "$100" },
    { id: 2, title: "Transaction 2", amount: "$200" },
    { id: 3, title: "Transaction 3", amount: "$300" },
    { id: 4, title: "Transaction 4", amount: "$400" },
    { id: 5, title: "Transaction 5", amount: "$500" },
    { id: 6, title: "Transaction 6", amount: "$600" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">{transaction.title}</h2>
            <p className="text-gray-700">{transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
