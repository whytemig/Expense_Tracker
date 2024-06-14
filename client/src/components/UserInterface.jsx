function UserInterface() {
  return (
    <div className="text-white flex flex-col">
      <div className="welcome-container border  border-gray-50 my-8 text-6xl text-center p-3">
        <h1>Welcome to Track-My-Money</h1>
      </div>
      <div className="flex justify-between px-4 border  border-gray-50">
        <div>Charts</div>
        <div>Form</div>
      </div>
    </div>
  );
}

export default UserInterface;
