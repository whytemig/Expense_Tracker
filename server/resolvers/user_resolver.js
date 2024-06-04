import { users } from "../fakedata/data.js";
// resolvers for the User

const userResolver = {
  Query: {
    users: () => users,
  },
  Mutation: {},
};

export default userResolver;
