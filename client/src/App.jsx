import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import UserInterface from "./components/pages/UserInterface";
import Transactions from "./components/pages/Transactions";
import TransactionPage from "./components/pages/TransactionPage";
import ErrorPage from "./components/pages/ErrorPage";
import { useQuery } from "@apollo/client";
import { AUTH_USER } from "./graphql/query/authUser";

function App() {
  const { data, loading } = useQuery(AUTH_USER, {
    refetchQueries: ["AuthUser"],
  });

  if (loading) {
    return null;
  }

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={!data?.authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!data?.authUser ? <SignUp /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={data?.authUser ? <Home /> : <Navigate to="/login" />}
        >
          <Route
            index
            element={
              data?.authUser ? <UserInterface /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/transactions"
            element={
              data?.authUser ? <Transactions /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/transactions/:id"
            element={
              data?.authUser ? <TransactionPage /> : <Navigate to="/login" />
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
