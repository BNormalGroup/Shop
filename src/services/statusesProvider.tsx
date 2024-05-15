import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  FC,
} from "react";
import { IOrderStatus } from "../utils/types.ts";
import { GetOrderStatusesService } from "./ordersService.ts";

// Тип контексту, щоб визначити, які дані він містить
interface OrderStatusesContextType {
  statuses: IOrderStatus[]; // Список статусів замовлень
}

// Контекст із початковим значенням
const OrderStatusesContext = createContext<OrderStatusesContextType | null>(
  null,
);

// Провайдер контексту
const OrderStatusesProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [statuses, setStatuses] = useState<IOrderStatus[]>([]);

  const getStatuses = async () => {
    const statusesGet = await GetOrderStatusesService();
    if (statusesGet) {
      setStatuses(statusesGet); // Зберігаємо отримані статуси
    }
  };

  useEffect(() => {
    getStatuses(); // Завантаження статусів при монтуванні
  }, []);

  return (
    <OrderStatusesContext.Provider value={{ statuses }}>
      {children} {/* Діти мають доступ до контексту */}
    </OrderStatusesContext.Provider>
  );
};

export { OrderStatusesProvider, OrderStatusesContext };
