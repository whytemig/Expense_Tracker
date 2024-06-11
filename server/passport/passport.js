import { GraphQLLocalStrategy } from "graphql-passport";
import User from "../database/models/user_models.js";
import passport from "passport";
import bcrypt from "bcryptjs";

async function passportInitialize() {
  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const findUser = await User.findOne({ username });

        if (!findUser) {
          return done(null, false, { message: "Invalid Credentials" });
        }

        const comparePassword = await bcrypt.compare(
          password,
          findUser.password
        );

        if (!comparePassword) {
          return done(null, false, { message: "Invalid Credentials" });
        }

        return done(null, findUser);
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
}

export default passportInitialize;
