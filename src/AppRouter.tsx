import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  BillboardPage,
  LoginPage,
  ProductsPage,
  CategoriesPage,
} from "@pages/index";
import { SidebarProvider } from "./context/SidebarContext";
import { ThemeProvider } from "./context/ThemeContext";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

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
          <Route
            path="/products"
            element={<ProtectedRoute children={<ProductsPage />} />}
          />
          <Route
            path="/categories"
            element={<ProtectedRoute children={<CategoriesPage />} />}
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
