/*
 * * Written by Mehmet Alperen Yedik <mehmetalperenyedik@gmail.com>, October 2023
 */
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { Navbar } from ".";

export const MainLayout = () => {
  return (
    <>
      <Helmet>
        <html className="m-0 p-0" />
        <body className="min-h-full  box-border" />
      </Helmet>
      <Navbar />
      <Outlet />
    </>
  );
};
