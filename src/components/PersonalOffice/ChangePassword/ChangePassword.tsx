import useStyles from "./style.tsx";
import React, {useEffect, useState} from "react";
import {IOrder} from "../../../utils/types.ts";
import {GetUserOrdersService} from "../../../services/ordersService.ts";
import {APP_ENV} from "../../../env";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store.ts";

const ChangePassword = () => {
    const classes = useStyles();
    const id = useSelector((state: RootState) => state.users.user.id);
    const [orders, setOrders] = useState<IOrder[]>([]);

    const getOrders = async () => {
        const statusesGet = await GetUserOrdersService(id);
        if (statusesGet)
            setOrders(statusesGet);

    };

    useEffect(() => {
        getOrders();
        console.log(orders);
        console.log(orders);
    }, []);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Change Password</h1>
            <div className={classes.inputContainer}>
                <label className={classes.inputLabel} htmlFor="firstName">Current Password</label>
                <input className={classes.input} id="currentPassword" type="password"></input>
            </div>
            <div className={classes.inputContainer}>
                <label className={classes.inputLabel} htmlFor="lastName">New Password</label>
                <input className={classes.input} id="newPassword" type="password"></input>
            </div>

            <button className={classes.buttonSave}>Change the password</button>
        </div>

    );
};

export default ChangePassword;
