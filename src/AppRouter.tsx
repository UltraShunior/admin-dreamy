import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import HomePage from "./pages/Home/Page";
import LoginPage from "./pages/Login/Page";
import Loader from "./components/Loader";

export default function AppRouter() {
  const { isSignedIn, isLoaded } = useAuth();

  // Muestra un loader mientras Clerk inicializa
  if (!isLoaded) {
    return <Loader color="warning" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={isSignedIn ? <Navigate to="/" /> : <LoginPage />}
        />
        {/* Private routes */}
        <Route
          path="/"
          element={isSignedIn ? <HomePage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
