import { users } from "../fakedata/data.js";
// resolvers for the User

const userResolver = {
  Query: {
    users: () => users,
    user: (_, { userId }) => {
      return users.find((us) => us._id === userId);
    },
  },
  Mutation: {},
};

export default userResolver;
