import { Navigate, useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts";
import { Home } from "../pages";
export const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "*", element: <Navigate to="/" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};
