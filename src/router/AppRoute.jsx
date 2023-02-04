import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AdminRoute } from "../admin/router/AdminRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRoute = () => {
  const { isLogged } = useSelector((state) => state.auth);
  return (
    <Routes>
      {
        isLogged && <Route path="/admin/*" element={<AdminRoute />} />
      }
      <Route path="/*" element={<PublicRoute />} />
    </Routes>
  );
};
