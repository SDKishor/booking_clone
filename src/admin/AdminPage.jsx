import React from "react";
import { Admin_header } from "./components/Admin_header";
import { Outlet, Route, Routes } from "react-router-dom";
import { Admin_DashBoard } from "./Admin_DashBoard";
import { Admin_UserList } from "./Admin_UserList";

export const AdminPage = () => {
  return (
    <>
      <Admin_header />
      <div className="">
        <div className="">sidebar</div>
        <Outlet />
      </div>
    </>
  );
};
