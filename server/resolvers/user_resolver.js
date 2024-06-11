import passport from "passport";
import User from "../database/models/user_models.js";
import bcrypt from "bcryptjs";

// resolvers for the User
const userResolver = {
  Query: {
    authUser: () => {},
    users: () => users,
    user: (_, { userId }) => {
      return users.find((us) => us._id === userId);
    },
  },
  Mutation: {
    signup: async (_, { input }, context) => {
      const { username, password, gender, name } = input;
      try {
        if (!username || !name || !password || !gender) {
          throw new Error("All fields are Required!");
        }

        const findUser = await User.findOne({ username });

        if (findUser) {
          throw new Error("User already exist!");
        }

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);

        // Avatar picture generated by API based off gender and username

        const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;

        const newUser = new User({
          username,
          name,
          password: hashPass,
          gender,
          profilePicture: gender === "male" ? boyAvatar : girlAvatar,
        });

        await newUser.save();

        await context.login("grapgh-local", {
          newUser,
        });
        console.log(newUser);
        return newUser;
      } catch (error) {
        console.log(error.message);
        throw new Error("Check Resolver or TypeDefs", error.message);
      }
    },

    login: async (_, { input }, context) => {
      const { username, password } = input;

      try {
        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });
        await context.login(user);
        return user;
      } catch (error) {
        console.log(error.message);
        throw new Error("Check Resolver or TypeDefs", error.message);
      }
    },
    logout: async (_, __, context) => {
      try {
        await context.logout();
        context.req.session.destroy((err) => {
          if (err) throw new Error(err);
        });
        context.res.session.clearCookie();
        return { message: "Log out Successfully" };
      } catch (error) {
        console.log(error.message);
        throw new Error("Check Resolver or TypeDefs", error.message);
      }
    },
  },
};

export default userResolver;
