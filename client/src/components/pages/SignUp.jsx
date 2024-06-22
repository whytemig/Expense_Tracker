import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    username: "",
    password: "",
    gender: "",
  });

  //function that aquire the input value
  function handleChange(e) {
    const { name, value } = e.target;

    //set the value of the inputs
    setSignUpData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div className="bg-login bg-no-repeat bg-cover bg-center bg-fixed h-screen">
      <div className="bg-slate-900 opacity-95 h-screen w-full relative"></div>
      <div className="  min-h-screen justify-center items-center flex absolute top-0 left-0 right-0 bottom-0">
        <div className="max-w-md w-full p-6 px-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center text-slate-900 mt-8 mb-6">
            Sign Up
          </h1>
          <form>
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
                required
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
              >
                <option value="" disabled>
                  Please choose an option
                </option>
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
            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 uppercase">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
