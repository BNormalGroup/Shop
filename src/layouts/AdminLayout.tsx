import { Outlet } from "react-router-dom";
import NavBarAdmin from "../pages/admin/navbar/NavBarAdmin.tsx";
import NavBarSideAdmin from "../pages/admin/navbar/NavBarSideAdmin.tsx";

export const AdminLayout = () => {
  return (
    <>
      <div style={{ minHeight: "90vh" }}>
        <NavBarAdmin></NavBarAdmin>

        <div style={{ display: "flex", minHeight: "90vh" }}>
          {/* NavBar зліва */}
          <NavBarSideAdmin></NavBarSideAdmin>

          <div className="tm-bg-primary-dark w-100">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};
