import { GraphQLLocalStrategy } from "graphql-passport";
import User from "../database/models/user_models.js";
import passport from "passport";
import bcrypt from "bcryptjs";

async function passportInitialize() {
  passport.serializeUser((user, done) => {
    // console.log("Serialization");
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    // console.log("Deserializing user");
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  passport.use(
    new GraphQLLocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username });

        if (!user) {
          return done(null, false, { message: "Invalid Credentials" });
        }

        const comparePassword = await bcrypt.compare(password, user?.password);

        if (!comparePassword) {
          return done(null, false, { message: "Invalid Credentials" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );
}

export default passportInitialize;
