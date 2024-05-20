import useStyles from "./style.tsx";
import React, {useEffect, useState} from "react";
import {IOrder} from "../../../utils/types.ts";
import {GetUserOrdersService} from "../../../services/ordersService.ts";
import {APP_ENV} from "../../../env";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store.ts";

const MainDetails = () => {
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
            <h1 className={classes.title}>Main details</h1>
            <div className={classes.inputContainer}>
                <label className={classes.inputLabel} htmlFor="firstName">First Name</label>
                <input className={classes.input} id="firstName" type="text"></input>
            </div>
            <div className={classes.inputContainer}>
                <label className={classes.inputLabel} htmlFor="lastName">Last Name</label>
                <input className={classes.input} id="lastName" type="text"></input>
            </div>
            <div className={classes.inputContainer}>
                <label className={classes.inputLabel} htmlFor="email">Email Address</label>
                <input className={classes.input} id="email" type="email"></input>
            </div>
            <div className={classes.inputContainer}>
                <label className={classes.inputLabel} htmlFor="email">Date Of Birthday</label>
                <div className={classes.inputRow}>
                    <input className={classes.input} id="day" type="number"></input>
                    <input className={classes.input} id="month" type="number"></input>
                    <input className={classes.input} id="year" type="number"></input>
                </div>
            </div>
            <button className={classes.buttonSave}>Save</button>
        </div>

    );
};

export default MainDetails;
