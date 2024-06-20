import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="bg-login bg-no-repeat bg-cover bg-center bg-fixed h-screen">
      <div className="bg-slate-900 opacity-95 h-screen w-full relative"></div>
      <div className="  min-h-screen justify-center items-center flex absolute top-0 left-0 right-0 bottom-0">
        <div className="max-w-md w-full p-6 px-8 bg-white rounded-lg shadow-lg z-10">
          <h1 className="text-4xl font-bold text-center text-slate-900 mt-8 mb-4">
            Login
          </h1>
          <form>
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
                required
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
            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 uppercase">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
