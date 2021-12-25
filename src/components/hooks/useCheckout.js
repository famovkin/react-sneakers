import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

export const useCheckout = () => {
  const { cartItems } = useContext(ItemsContext);
  const itemsPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const shippingPrice = Math.ceil(itemsPrice * 0.05);
  const totalPrice = itemsPrice + shippingPrice;

  return { itemsPrice, shippingPrice, totalPrice };
};
