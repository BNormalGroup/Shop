import {Link} from "react-router-dom";

const NavBarSideAdmin = () => {
    return (
        <div className="navbar-expand-lg">
            <div className="collapse navbar-collapse" id="navBarSideContent">
                <div className="bg-dark navbar-dark" style={{width: 300, height: "100vh"}}>
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column align-items-start flex-row">
                            <li className="nav-item">
                                <Link to={"/admin"} className="nav-link align-middle px-0">
                                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                </Link>
                            </li>

                            <li>
                                <Link to={"/admin/category/listCategory"} className="nav-link px-0 align-middle w-100" data-bs-toggle="collapse" data-bs-target="#categoryDropDown">
                                    <i className="fs-4 bi-bar-chart-steps"></i>
                                    <span className="ms-1 d-none d-sm-inline">Categories</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/admin/brand/listBrand"} className="nav-link px-0 align-middle w-100" data-bs-toggle="collapse" data-bs-target="#brandDropDown">
                                    <i className="fs-4 bi-bar-chart-steps"></i>
                                    <span className="ms-1 d-none d-sm-inline">Brands</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>)
};

export default NavBarSideAdmin;
