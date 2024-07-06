import { Link, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import { RiLogoutBoxLine } from "react-icons/ri";

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
      <header className="py-3 text-slate-900 bg-slate-200 sticky top-0 z-10 flex items-center justify-between px-8">
        <Link to="/">NAV BAR</Link>
        <div className="flex items-center justify-center gap-3">
          Picture <span>UsernameName</span>
        </div>
        <div>
          <button onClick={handleLogout} disabled={data}>
            <RiLogoutBoxLine size={24} />
          </button>
        </div>
      </header>
      <div className="bg-no-repeat bg-cover bg-center bg-home bg-fixed flex-grow flex-col ">
        <div className="bg-slate-900 h-full opacity-95 p-2 ">
          <Outlet />
        </div>
      </div>
      <footer className="py-3 bg-slate-200 text-slate-900">FOOTER</footer>
    </div>
  );
}

export default Home;
