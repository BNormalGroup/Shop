import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header.tsx";
import Footer from "../pages/footer/Footer.tsx";

export const DefaultLayout = () => {
  return (
    <>
      <Header/>
        <div className='container' style={{maxWidth: 1440, padding: 0}}>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  );
};
