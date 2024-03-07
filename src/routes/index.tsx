import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../core/layout";
import { Home } from "../pages/home";

export function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
