import {Outlet} from "react-router-dom";
import Footer from "../pages/footer/Footer.tsx";

export const DefaultLayout = ()=>{
    return(
        <>
        <div className='container' style={{maxWidth: 1440, padding: 0}}>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </>
    )
}
