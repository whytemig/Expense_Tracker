import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import UserInterface from "./components/pages/UserInterface";
import Transactions from "./components/pages/Transactions";
import TransactionPage from "./components/pages/TransactionPage";

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
