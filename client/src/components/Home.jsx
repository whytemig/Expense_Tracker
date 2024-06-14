import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <header className="py-3 text-slate-100 bg-slate-950">NAV BAR</header>
      <div className="bg-no-repeat bg-cover bg-center bg-home bg-fixed h-screen">
        <div className="bg-slate-900 h-full opacity-85 -z-10 p-2">
          <Outlet />
        </div>
      </div>
      <footer className="py-3 bg-slate-950 text-slate-100">FOOTER</footer>
    </div>
  );
}

export default Home;
