import {Outlet} from "react-router-dom";
import NavBarAdmin from "../pages/admin/navbar/NavBarAdmin.tsx";
import NavBarSideAdmin from "../pages/admin/navbar/NavBarSideAdmin.tsx";

export const AdminLayout = () => {
    return (
        <>
            <NavBarAdmin></NavBarAdmin>

            <div style={{display: 'flex'}}>
                {/* NavBar зліва */}
                <NavBarSideAdmin></NavBarSideAdmin>

                <div className="container px-5 my-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}
