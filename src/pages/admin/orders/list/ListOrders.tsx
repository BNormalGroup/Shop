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
        if (statusesGet)
            setOrders(statusesGet);
    }

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
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <th scope="row">{item.user?.id}</th>
                                    <th scope="row">{item.user?.firstName}</th>
                                    <th scope="row">{item.item.name}</th>
                                    <th scope="row">
                                        <img
                                            className="img-fluid"
                                            src={APP_ENV.UPLOADS_URL + item.item.image}
                                            alt="Оберіть фото"
                                            style={{width: '50px'}}
                                        />

                                    </th>
                                    <th scope="row">{item.color.name}</th>
                                    <th scope="row">{item.size.size}</th>
                                    <th scope="row"><OrderStatusSelect idOrder={item.id} idStatus={item.status_id}/></th>
                                </tr>
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
