import React, { useEffect, useState } from "react";
import useStyles from "./style.tsx";
import HeaderPersonalOffice from "../../../components/PersonalOffice/Header/HeaderPersonalOffice.tsx";
import { MenuPersonalOffice } from "../../../components/PersonalOffice/Menu/MenuPersonalOffice.tsx";
import { Outlet } from "react-router-dom";

const PersonalOffice = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);

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
