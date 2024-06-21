import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="bg-home h-screen flex flex-col">
      <header className="py-3 text-slate-100 bg-slate-950 sticky top-0 z-10">
        NAV BAR
      </header>
      <div className="bg-no-repeat bg-cover bg-center bg-home bg-fixed flex-grow flex-col ">
        <div className="bg-slate-900 h-full opacity-95 p-2 ">
          <Outlet />
        </div>
      </div>
      <footer className="py-3 bg-slate-950 text-slate-100 flex-shrink-0">
        FOOTER
      </footer>
    </div>
  );
}

export default Home;
