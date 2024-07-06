import Transaction from "../database/models/transaction_models.js";

const transactionResolver = {
  Query: {
    //GET ALL TRANSACTIONS
    transactions: async (_, __, context) => {
      const authUser = context.getUser();
      if (!authUser) {
        throw new Error("User Unauthorized");
      }

      try {
        const userId = await context.getUser._id;

        // find the transaction that relates to the User Id of the transaction.
        const transaction = await Transaction.find(userId).sort({
          updatedAt: -1,
        });

        return transaction;
      } catch (error) {
        console.log(error.message);
        throw new Error("No transaction fetched", error.message);
      }
    },
    //GET TRANSACTION BY THE ID
    transaction: async (_, { transactionId }) => {
      try {
        const transaction = await Transaction.findById(transactionId);
        return transaction;
      } catch (error) {
        console.log(error.message);
        throw new Error("No transaction fetched", error.message);
      }
    },

    //CATEGORY QUERY ADDED LAST MINUTE
    categoryTallies: async (_, __, context) => {
      const authUser = context.getUser();
      if (!authUser) {
        throw new Error("User Unauthorized");
      }

      const userId = await context.getUser()._id;

      try {
        //find all transactions that matches the userId
        const transaction = await Transaction.find({ userId });

        //create a hash map
        const categoryMap = {};

        //add up all the categories together {savings: amount, expense: amount}
        transaction?.forEach(({ category, amount }) => {
          if (!categoryMap[category]) {
            categoryMap[category] = 0;
          }

          categoryMap[category] += amount;
        });

        //turn the object into an array then return the values in an object.... [{savings: amount}, {expense: amount}]
        return Object.entries(categoryMap).map(([category, amount]) => ({
          category,
          amount,
        }));
      } catch (error) {
        console.log(error.message);
        throw new Error("No transaction found", error.message);
      }
    },
  },
  Mutation: {
    createTransaction: async (_, { input }, context) => {
      const userId = await context.getUser()._id;

      console.log(userId);
      try {
        const newTransaction = new Transaction({
          description: input.description,
          paymentType: input.paymentType,
          category: input.category,
          amount: input.amount,
          date: input.date,
          location: input.location,
          userId,
        });
        await newTransaction.save();
        return newTransaction;
      } catch (error) {
        console.log(error.message);
        throw new Error("Error in creating Transaction", error.message);
      }
    },
    updateTransaction: async (_, { input }) => {
      try {
        const updatedTrans = await Transaction.findByIdAndUpdate(
          input.transactionId,
          input,
          { new: true }
        );
        return updatedTrans;
      } catch (error) {
        console.log(error.message);
        throw new Error("Error in updating Transaction", error.message);
      }
    },
    deleteTransaction: async (_, { transactionId }) => {
      try {
        const deleteTrans = await Transaction.findByIdAndDelete(transactionId);
        return deleteTrans;
      } catch (error) {
        console.log(error.message);
        throw new Error("Error in deleting Transaction", error.message);
      }
    },
  },
};

export default transactionResolver;
