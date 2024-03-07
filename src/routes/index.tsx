import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../core/layout";
import { Home } from "../pages/home";
import { ProductProvider } from "../contexts/product";

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={
              <ProductProvider>
                <Home />
              </ProductProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
