import { users } from "../fakedata/data.js";
// resolvers for the User

const userResolver = {
  Query: {
    users: () => users,
  },
};

export default userResolver;
