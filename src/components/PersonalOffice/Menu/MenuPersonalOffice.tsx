import { Link, Outlet } from "react-router-dom";
import useStyles from "./style.tsx";
import SignoutModal from "../Signout/SignoutModal.tsx";

export const MenuPersonalOffice = () => {
  const classes = useStyles();

  return (
    <ul className={classes.menu}>
      <li className={classes.menuItem}>
        <Link className={classes.item} to={"/office/orders"}>
          Main orders
        </Link>
        <Link className={classes.item} to={"/office/details"}>
          Main details
        </Link>
        <Link className={classes.item} to={"/office/change-password"}>
          Change password
        </Link>
        <Link type="button" data-bs-toggle="modal" data-bs-target="#signoutModal" className={classes.item} to={"#"}>
          Signout
        </Link>
      </li>
      <SignoutModal></SignoutModal>
    </ul>
  );
};
