import useStyles from "./style.tsx";
import React, { useEffect, useState } from "react";
import { IOrder } from "../../../utils/types.ts";
import { GetUserOrdersService } from "../../../services/ordersService.ts";
import { APP_ENV } from "../../../env";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";

const UserOrdersList = () => {
  const classes = useStyles();
  const id = useSelector((state: RootState) => state.users.user.id);
  const [orders, setOrders] = useState<IOrder[]>([]);

  const getOrders = async () => {
    const statusesGet = await GetUserOrdersService(id);
    if (statusesGet) setOrders(statusesGet);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.th}>Item Name</th>
          <th className={classes.th}>Item Img</th>
          <th className={classes.th}>Color</th>
          <th className={classes.th}>Size</th>
          <th className={classes.th}>Price</th>
          <th className={classes.th}>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((item: IOrder) => (
          <tr key={item.id}>
            <td className={classes.td}>{item.item.name}</td>
            <td className={classes.td}>
              <img
                className="img-fluid"
                src={APP_ENV.UPLOADS_URL + item.item.image}
                alt="Оберіть фото"
                style={{ width: "50px" }}
              />
            </td>
            <td className={classes.td}>{item.color.name}</td>
            <td className={classes.td}>{item.size.size}</td>
            <td className={classes.td}>{item.item.price}</td>
            <td className={classes.td}>{item.status.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserOrdersList;
