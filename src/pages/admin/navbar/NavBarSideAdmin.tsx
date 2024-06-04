import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/userSlice.ts";
import { deleteLocalStorage } from "../../../utils/localStorageUtils.ts";

const NavBarSideAdmin = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  const singout = async () => {
    dispatch(logout());
    deleteLocalStorage("authToken");
    navigate("/");
  };

  return (
    <div className="navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navBarSideContent">
        <div
          className="bg-dark navbar-dark"
          style={{ width: 300, height: "100%" }}
        >
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column align-items-start flex-row">
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>

              <li>
                <Link
                  to={"/admin/category/listCategory"}
                  className="nav-link px-0 align-middle w-100"
                >
                  <i className="fs-4 bi-bar-chart-steps"></i>
                  <span className="ms-1 d-none d-sm-inline">Categories</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/admin/item/list"}
                  className="nav-link px-0 align-middle w-100"
                >
                  <i className="fs-4 bi-bar-chart-steps"></i>
                  <span className="ms-1 d-none d-sm-inline">Items</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/admin/user/list"}
                  className="nav-link px-0 align-middle w-100"
                >
                  <i className="fs-4 bi-bar-chart-steps"></i>
                  <span className="ms-1 d-none d-sm-inline">Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/admin/order/list"}
                  className="nav-link px-0 align-middle w-100"
                >
                  <i className="fs-4 bi-bar-chart-steps"></i>
                  <span className="ms-1 d-none d-sm-inline">Orders</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={singout}
                  className="nav-link px-0 align-middle w-100"
                >
                  <span className="ms-1 d-none d-sm-inline">Sing Out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarSideAdmin;
