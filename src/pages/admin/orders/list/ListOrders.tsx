import React, {useEffect, useState} from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import {OrderStatusesProvider} from "../../../../services/statusesProvider.tsx";
import OrderStatusSelect from "../../../../components/Admin/OrderStatusSelect/OrderStatusSelect.tsx";
import {IOrder} from "../../../../utils/types.ts";
import {GetOrdersService} from "../../../../services/ordersService.ts";
import {APP_ENV} from "../../../../env";

const ListOrders = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);

    const getOrders = async () => {
        const statusesGet = await GetOrdersService();
        if (statusesGet) setOrders(statusesGet);
    };

    useEffect(() => {
        // Запит, щоб отримати статуси замовлень лише один раз
        getOrders();
    }, []); // Порожній масив залежностей гарантує, що запит виконується лише один раз

    return (
        <>
            <div className="tm-bg-primary-dark tm-block tm-block-products">
                <div className="tm-product-table-container">
                    <table className="table table-hover tm-table-small tm-product-table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">User ID</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Item Img</th>
                            <th scope="col">Color</th>
                            <th scope="col">Size</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <OrderStatusesProvider>
                            {orders.map((item: IOrder) => (
                                <>
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <th scope="row">{item.user?.id}</th>
                                        <th scope="row">{item.user?.firstName}</th>

                                        <th scope="row">
                                            <OrderStatusSelect
                                                idOrder={item.id}
                                                idStatus={item.status_id}
                                            />
                                        </th>
                                    </tr>
                                    <tr>
                                        <td colSpan={6}>
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th>Item Img</th>
                                                    <th>Name</th>
                                                    <th>Color</th>
                                                    <th>Size</th>
                                                    <th>Price</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {item?.item.map((product) => (
                                                    <tr key={product.id}>
                                                        <td>
                                                            <img
                                                                className="img-fluid"
                                                                src={APP_ENV.UPLOADS_URL + product.image}
                                                                alt="Product Image"
                                                                style={{width: "50px"}}
                                                            />
                                                        </td>
                                                        <td>{product.item?.name}</td>
                                                        <td>{product.color.name}</td>
                                                        <td>{product.size.size}</td>
                                                        <td>{product.item?.price}</td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </OrderStatusesProvider>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ListOrders;
