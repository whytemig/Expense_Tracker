function UserInterface() {
  return (
    <div className="text-white flex flex-col">
      <div className="welcome-container border  border-gray-50 my-8 text-6xl text-center p-3">
        <h1>Welcome to Track-My-Money</h1>
      </div>
      <button className="mb-3 bg-red-500 max-w-60 justify-center m-auto p-2 text-xl">
        Tansaction History
      </button>
      <div className="flex justify-between px-4 border  border-gray-50">
        <div>Charts</div>
        <div>Form</div>
      </div>
    </div>
  );
}

export default UserInterface;
