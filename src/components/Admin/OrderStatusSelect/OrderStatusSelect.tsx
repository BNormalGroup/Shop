import React, { FC, useContext, useState } from "react";
import { OrderStatusesContext } from "../../../services/statusesProvider.tsx";
import { UpdateStatusOrderService } from "../../../services/ordersService.ts";

// Визначення інтерфейсу для пропсів
interface OrderStatusSelectProps {
  idStatus: number; // ID поточного статусу
  idOrder: number; // ID замовлення
}

const OrderStatusSelect: FC<OrderStatusSelectProps> = ({
  idStatus,
  idOrder,
}) => {
  const orderStatusesContext = useContext(OrderStatusesContext);
  const [currentStatus, setCurrentStatus] = useState(idStatus); // Зберігання поточного статусу
  const [isLoading, setIsLoading] = useState(false); // Відстежування завантаження

  if (!orderStatusesContext) {
    return <div>Loading statuses...</div>; // Якщо контекст ще не готовий
  }

  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newStatusId = parseInt(event.target.value, 10);

    setIsLoading(true); // Встановлюємо стан завантаження

    try {
      const response = await UpdateStatusOrderService(idOrder, newStatusId);

      if (response && response.status === 200) {
        setCurrentStatus(newStatusId); // Оновлюємо локальний стан
      } else {
        console.error("Error updating order status:", response?.data?.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false); // Завершення завантаження
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Показувати індикатор завантаження
  }

  const { statuses } = orderStatusesContext;

  return (
    <select value={currentStatus} onChange={handleSelectChange}>
      {statuses.map((status) => (
        <option key={status.id} value={status.id}>
          {status.status}
        </option>
      ))}
    </select>
  );
};

export default OrderStatusSelect;
