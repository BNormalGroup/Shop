import { Link, Outlet } from "react-router-dom";
import useStyles from "./style.tsx";
import SignoutModal from "../Signout/SignoutModal.tsx";
import { useTranslation } from "react-i18next";

export const MenuPersonalOffice = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <ul className={classes.menu}>
        <li className={classes.menuItem}>
          <Link className={classes.item} to={"/office/orders"}>
            {t("Main orders")}
          </Link>
          <Link className={classes.item} to={"/office/details"}>
            {t("Main details")}
          </Link>
          <Link className={classes.item} to={"/office/change-password"}>
            {t("Change password")}
          </Link>
          <Link
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#signoutModal"
            className={classes.item}
            to={"#"}
          >
            {t("Signout")}
          </Link>
        </li>
      </ul>
      <SignoutModal></SignoutModal>
    </>
  );
};
