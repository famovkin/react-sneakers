import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Message from "../components/Message";
import { api } from "../utils/Api";
import { createEmptyArray, getRandomNumber } from "../utils/pages";

function Orders({ onOpenCart }) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [numberForEmoji, setNumberForEmoji] = useState(1);

  useEffect(() => {
    setNumberForEmoji(getRandomNumber(1, 10));
    setIsLoading(true);
    api
      .getInitialItems("orders")
      .then((response) => {
        setOrders(response.reverse());
      })
      .catch((error) => console.log(error))
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 500)
      );
  }, []);

  useEffect(() => {});

  const emptyArray = createEmptyArray(4);

  return (
    <div className="page__wrapper">
      <Header onOpenCart={onOpenCart} />
      <section className="store">
        <div className="store__header">
          <h2 className="store__title">Мои заказы</h2>
        </div>
        {orders.length === 0 && !isLoading && (
          <>
            <Message
              img={
                process.env.PUBLIC_URL +
                `/images/emoji/emoji-${numberForEmoji}.png`
              }
              title="У вас нет заказов"
              subtitle="Самое время совершить первую покупку"
              alt="Смайлик"
            />
          </>
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
