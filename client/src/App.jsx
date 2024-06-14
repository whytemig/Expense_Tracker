import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import UserInterface from "./components/UserInterface";
import Transactions from "./components/Transactions";
import TransactionPage from "./components/TransactionPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<Home />}>
        <Route index element={<UserInterface />} />
        <Route path="/transaction" element={<Transactions />} />
        <Route path="/transaction/:id" element={<TransactionPage />} />
      </Route>
    </Routes>
  );
}

export default App;
