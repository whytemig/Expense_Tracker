import { Link, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "../../graphql/mutations/logout.mutation";
import { AUTH_USER } from "../../graphql/query/authUser";

function Home() {
  const [logout, { data, client }] = useMutation(LOGOUT_USER, {
    refetchQueries: [AUTH_USER],
  });

  //logout function
  async function handleLogout() {
    try {
      await logout();
      //upon loging out... clear Apollo cache from the documentation

      client.resetStore();

      window.location.href = "/login";
    } catch (error) {
      console.log(error.message);
      toast.error("Error Logging Out", error.message);
    }
  }

  return (
    <div className="bg-home h-screen flex flex-col">
      <header className="py-3 text-slate-300 bg-slate-800 top-0 z-10 flex items-center justify-between  px-4 sm:px-8">
        <Link to="/">NAV BAR</Link>
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-300">Picture</div>
          <span className="text-sm sm:text-base">UsernameName</span>
        </div>
        <div>
          <button onClick={handleLogout} disabled={data} className="">
            <RiLogoutBoxLine size={24} />
          </button>
        </div>
      </header>
      <div className="bg-no-repeat bg-cover bg-center bg-home bg-fixed flex-grow flex-col ">
        <div className="bg-slate-900 h-full opacity-95 p-2 sm:p-4">
          <Outlet />
        </div>
      </div>
      <footer className="text-slate-200 py-3 px-4 bg-slate-800 mt-auto flex flex-col sm:flex-row items-center justify-center sm:justify-evenly gap-2 sm:gap-0">
        <div>
          <a href="https://www.linkedin.com/in/miguel-whyte/" target="_blank">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div>
          <a href="https://github.com/whytemig/Expense_Tracker" target="_blank">
            <FaGithubSquare size={24} />
          </a>
        </div>
        <div className="text-center sm:text-left">
          <h3>Made by Miguel with ❤️</h3>
        </div>
      </footer>
    </div>
  );
}

export default Home;
