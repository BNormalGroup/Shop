import useStyles from "./style.tsx";
import React, {useEffect, useState} from "react";
import {IOrder} from "../../../utils/types.ts";
import {GetUserOrdersService} from "../../../services/ordersService.ts";
import {APP_ENV} from "../../../env";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store.ts";

const UserOrdersList = () => {
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
        <table className={classes.table}>
            <thead>
            <tr>
                <th className={classes.th}></th>
                <th className={classes.th}>Status</th>
                <th className={classes.th}>Address</th>
                <th className={classes.th}>Email</th>
                <th className={classes.th}>Name of the customer</th>
                <th className={classes.th}>Phone</th>
            </tr>
            </thead>
            <tbody>
            {orders?.map((item: IOrder) => (
                <>
                    <tr key={item.id} style={{paddingTop: '20px'}}>
                        <td className={classes.td}>Order №{item.id}</td>
                        <td className={classes.td}>{item.status.status}</td>
                        <td className={classes.td}>{item.delivery_address?.country} | {item.delivery_address?.city} | {item.delivery_address?.streetAddress}</td>
                        <td className={classes.td}>{item.delivery_address?.email}</td>
                        <td className={classes.td}>{item.delivery_address?.lastName} {item.delivery_address?.firstName}</td>
                        <td className={classes.td}>{item.delivery_address?.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td colSpan={6}>
                            <table className={`${classes.table} ${classes.backgroundSecond}`}>
                                <thead>
                                <tr>
                                    <th className={`${classes.th} ${classes.backgroundSecond}`}>Item Img</th>
                                    <th className={`${classes.th} ${classes.backgroundSecond}`}>Name</th>
                                    <th className={`${classes.th} ${classes.backgroundSecond}`}>Color</th>
                                    <th className={`${classes.th} ${classes.backgroundSecond}`}>Size</th>
                                    <th className={`${classes.th} ${classes.backgroundSecond}`}>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {item?.item.map((product) => (
                                    <tr key={product.id}>
                                        <td className={classes.td}>
                                            <img
                                                className="img-fluid"
                                                src={APP_ENV.UPLOADS_URL + product.image}
                                                alt="Product Image"
                                                style={{width: "50px"}}
                                            />
                                        </td>
                                        <td className={`${classes.td} ${classes.backgroundSecond}`}>{product.item?.name}</td>
                                        <td className={`${classes.td} ${classes.backgroundSecond}`}>{product.color.name}</td>
                                        <td className={`${classes.td} ${classes.backgroundSecond}`}>{product.size.size}</td>
                                        <td className={`${classes.td} ${classes.backgroundSecond}`}>{product.item?.price}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </>
            ))}
            </tbody>
        </table>

    );
};

export default UserOrdersList;
