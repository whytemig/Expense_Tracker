import { FormUpdate } from "../form/FormUpdate";

function TransactionPage() {
  return (
    <div className="flex items-center justify-between px-6 flex-wrap mx-auto">
      <div className="text-slate-300 uppercase items-center justify-center flex text-center w-52 mx-auto">
        <h2 className="text-8xl">
          Update <br />
          Your <br /> Transaction!
        </h2>
      </div>

      <FormUpdate />
    </div>
  );
}

export default TransactionPage;
