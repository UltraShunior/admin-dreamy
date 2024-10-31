import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Page";
import { SidebarProvider } from "./context/SidebarContext";
import { ThemeProvider } from "./context/ThemeContext";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import LoginPage from "./pages/Login/Page";
import BillboardPage from "./pages/Billboard/Page";

export function AppRouter() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={<ProtectedRoute children={<HomePage />} />}
          />
          <Route
            path="/billboard"
            element={<ProtectedRoute children={<BillboardPage />} />}
          />
        </Routes>
      </SidebarProvider>
    </ThemeProvider>
  );
}

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <LoginPage />
      </SignedOut>
    </>
  );
};
