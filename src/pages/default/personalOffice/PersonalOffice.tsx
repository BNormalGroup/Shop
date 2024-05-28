import React from "react";
import HeaderPersonalOffice from "../../../components/PersonalOffice/Header/HeaderPersonalOffice.tsx";
import { MenuPersonalOffice } from "../../../components/PersonalOffice/Menu/MenuPersonalOffice.tsx";
import { Outlet } from "react-router-dom";

const PersonalOffice = () => {

  return (
    <>
      <HeaderPersonalOffice></HeaderPersonalOffice>
      <div
        className="container"
        style={{
          marginBottom: 56,
          padding: 0,
          minHeight: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", padding: "0px 35px" }}>
          <MenuPersonalOffice></MenuPersonalOffice>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default PersonalOffice;
