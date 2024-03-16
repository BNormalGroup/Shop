import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header.tsx";

export const DefaultLayout = () => {
  return (
    <>
      <Header/>
      <Outlet></Outlet>
    </>
  );
};
