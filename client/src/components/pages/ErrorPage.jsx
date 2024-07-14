import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-home bg-cover bg-center bg-fixed h-screen">
      <div className="bg-slate-900 h-full opacity-95 p-2 sm:p-4 flex justify-center items-center">
        <div className="w-[60%] h-[70%] bg-transparent flex flex-col justify-center items-center">
          <h2 className="text-8xl text-wrap text-center my-6 tracking-wide text-slate-200">
            Error Code <br />
            404
          </h2>
          <p className="text-slate-200 my-4 md:text-center text-center text-3xl">
            Page was not found. Please return back to Home Page.
          </p>
          <button
            className="w-[30%] px-4 py-2 border rounded-lg bg-[#00FF40] text-slate-900 font-semibold text-lg tracking-wide hover:text-slate-300 hover:bg-transparent hover:border-slate-300 transition-all duration-300 ease-in-out my-2"
            onClick={() => navigate(-1)}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
