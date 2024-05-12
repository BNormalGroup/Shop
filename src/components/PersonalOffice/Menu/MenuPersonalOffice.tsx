import {Link, Outlet} from "react-router-dom";
import useStyles from "./style.tsx";

export const MenuPersonalOffice = () => {
    const classes = useStyles();

    return (
        <ul className={classes.menu}>
            <li className={classes.menuItem}>
                <Link className={classes.item} to={'/office/orders'}>Main orders</Link>
                <Link className={classes.item} to={'#'}>Main details</Link>
                <Link className={classes.item} to={'#'}>Help</Link>
                <Link className={classes.item} to={'#'}>Signout</Link>
            </li>
        </ul>
    );
};
