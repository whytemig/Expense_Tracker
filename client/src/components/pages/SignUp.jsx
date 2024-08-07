import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SIGNUP_USER } from "../../graphql/mutations/signup_mutation";
import toast from "react-hot-toast";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    gender: "",
  });
  const [signup, { loading }] = useMutation(SIGNUP_USER, {
    // refetching the data by the user that has been authenticated.
    refetchQueries: ["AuthUser"],
  });

  //function that aquire the input value
  function handleChange(e) {
    const { name, value } = e.target;

    //set the value of the inputs
    setSignUpData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  //submit the input values to the apollo server
  async function handleSubmit(e) {
    const { name, username, email, password, gender } = signUpData;
    e.preventDefault();
    if (!name || !username || !email || !password || !gender) {
      throw new Error("Requires all fields");
      // toast.error("Requires all fields");
    }

    const emailExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isValidEmail = emailExpression.test(String(email).toLowerCase());

    if (!isValidEmail) {
      throw new Error("Improper email value");
      // toast.error("Improper email value");
    }

    try {
      await signup({
        variables: {
          input: signUpData,
        },
      });

      toast.success("Signed Up");

      setSignUpData({
        name: "",
        username: "",
        email: "",
        password: "",
        gender: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="bg-login bg-no-repeat bg-cover bg-center bg-fixed min-h-full">
      <div className="bg-slate-900 opacity-95 h-screen w-full relative"></div>
      <div className="  min-h-screen justify-center items-center flex absolute inset-0">
        <div className="max-w-md w-full p-6 px-8 bg-white rounded-lg shadow-lg sm:p-8">
          <h1 className="text-4xl font-bold text-center text-slate-900 mt-8 mb-6">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-md text-gray-700"
              >
                FullName
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={signUpData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                autoComplete="on"
                placeholder="Enter your Fullname"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-md text-gray-700"
              >
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                autoComplete="on"
                placeholder="Enter your Email"
                onChange={handleChange}
                value={signUpData.email}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-md text-gray-700"
              >
                Username:
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                autoComplete="on"
                placeholder="Enter your Username"
                onChange={handleChange}
                value={signUpData.username}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="gender"
                className="block mb-2 text-md text-gray-700"
              >
                Select a Gender:
              </label>
              <select
                name="gender"
                id="gender"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                onChange={handleChange}
                value={signUpData.gender}
              >
                <option defaultValue>Please choose an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-md text-gray-700"
              >
                Password:
              </label>
              <input
                id="password"
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Enter your password"
                onChange={handleChange}
                value={signUpData.password}
                required
              />
            </div>
            <div className="flex items-center justify-between mb-10 gap-3">
              <span>Already a member --&gt;</span>
              <Link
                to="/login"
                className="text-sm text-indigo-500 hover:text-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <p>Login In</p>
              </Link>
            </div>
            <button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 uppercase"
              disabled={loading}
            >
              {loading ? "Loading" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
