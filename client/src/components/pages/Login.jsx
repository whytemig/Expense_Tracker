import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGINUSER_USER } from "../../graphql/mutations/login.mutation";
import toast from "react-hot-toast";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [login, { loading }] = useMutation(LOGINUSER_USER, {
    refetchQueries: ["AuthUser"],
  });

  //submit the input values to the apollo server
  async function handleSubmit(e) {
    const { username, password } = loginData;
    e.preventDefault();
    if (!username || !password) {
      toast.error("Requires all fields");
      return;
    }
    // login functionality

    try {
      await login({
        variables: {
          input: loginData,
        },
      });

      toast.success("Login In");

      setLoginData({
        username: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="bg-login bg-no-repeat bg-cover bg-center bg-fixed h-screen">
      <div className="bg-slate-900 opacity-95 h-screen w-full relative"></div>
      <div className="  min-h-screen justify-center items-center flex absolute top-0 left-0 right-0 bottom-0">
        <div className="max-w-md w-full p-6 px-8 bg-white rounded-lg shadow-lg z-10">
          <h1 className="text-4xl font-bold text-center text-slate-900 mt-8 mb-4">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-md text-gray-700"
              >
                Username:
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                autoComplete="on"
                placeholder="Enter your Username"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData((prev) => {
                    return { ...prev, username: e.target.value };
                  })
                }
              />
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
                required
              />
            </div>
            <div className="flex items-center justify-between mb-10 gap-3">
              <span>Don&#39;t t have an Account --&gt;</span>
              <Link
                to="/signup"
                className="text-sm text-indigo-500 hover:text-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <p>Register an Account</p>
              </Link>
            </div>
            <button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 uppercase"
              disabled={loading}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
