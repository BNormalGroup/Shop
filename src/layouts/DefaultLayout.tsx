import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
