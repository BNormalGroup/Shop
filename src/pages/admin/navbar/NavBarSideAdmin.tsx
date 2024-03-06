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
                                <Link to={"#"} className="nav-link px-0 align-middle w-100" data-bs-toggle="collapse" data-bs-target="#categoryDropDown">
                                    <i className="fs-4 bi-bar-chart-steps"></i>
                                    <span className="ms-1 d-none d-sm-inline">Категорії</span>
                                </Link>
                                <div className="collapse ps-3" id="categoryDropDown">
                                    <Link to={"/admin/category/addCategory"} className="nav-link px-0 align-middle">
                                        <i className="fs-6 bi-plus"></i> <span className="ms-1 d-none d-sm-inline">Добавити категорію</span>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <Link to={"#"} className="nav-link px-0 align-middle w-100" data-bs-toggle="collapse" data-bs-target="#brandDropDown">
                                    <i className="fs-4 bi-bar-chart-steps"></i>
                                    <span className="ms-1 d-none d-sm-inline">Бренди</span>
                                </Link>
                                <div className="collapse ps-3" id="brandDropDown">
                                    <Link to={"/admin/category/addCategory"} className="nav-link px-0 align-middle">
                                        <i className="fs-6 bi-plus"></i> <span className="ms-1 d-none d-sm-inline">Добавити бренд</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>)
};

export default NavBarSideAdmin;
