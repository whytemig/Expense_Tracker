import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import UserInterface from "./components/pages/UserInterface";
import Transactions from "./components/pages/Transactions";
import TransactionPage from "./components/pages/TransactionPage";
import ErrorPage from "./components/pages/ErrorPage";
import Auth from "./components/auth/Auth";

function App() {
  let authUser = false;
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={<Auth isAuthenticated={authUser} element={Home} />}
        >
          <Route
            index
            element={
              <Auth isAuthenticated={authUser} element={UserInterface} />
            }
          />
          <Route
            path="/transaction"
            element={<Auth isAuthenticated={authUser} element={Transactions} />}
          />
          <Route
            path="/transaction/:id"
            element={
              <Auth isAuthenticated={authUser} element={TransactionPage} />
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px", font: "16px", fontWeight: "600" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: "#fff",
            },
          },
          error: {
            style: {
              background: "#fff",
            },
          },
        }}
      />
    </>
  );
}

export default App;
