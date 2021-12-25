import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
import { api } from "../utils/Api";

function Orders({ onOpenCart }) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .getInitialItems("orders")
      .then((response) => {
        setOrders(response);
      })
      .catch((error) => console.log(error))
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 500)
      );
  }, []);

  const emptyArray = [{}, {}, {}, {}];

  return (
    <div className="page__wrapper">
      <Header onOpenCart={onOpenCart} />
      <section className="store">
        <div className="store__header">
          <h2 className="store__title">Мои заказы</h2>
        </div>
        {orders.length === 0 && !isLoading && (
          <h3 className="store__search-result">Пока заказов нет</h3>
        )}
        {orders.map((order) => (
          <div className="order" key={order.id}>
            <h3 className="order__title">
              {!isLoading ? `Заказ #${order.id}` : `Загрузка...`}
            </h3>
            <CardList
              cards={isLoading ? emptyArray : order.items}
              isLoading={isLoading}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Orders;
