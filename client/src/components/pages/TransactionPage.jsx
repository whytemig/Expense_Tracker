import { FormUpdate } from "../form/FormUpdate";

function TransactionPage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 flex-wrap mx-auto">
      <div className="text-slate-300 uppercase items-center justify-center flex text-center w-full lg:w-52 mx-auto mb-4 lg:mb-0">
        <h2 className="text-4xl sm:text-6xl md:text-8xl">
          Update <br />
          Your <br /> Transaction!
        </h2>
      </div>

      <div className="w-full lg:w-auto">
        <FormUpdate />
      </div>
    </div>
  );
}

export default TransactionPage;
