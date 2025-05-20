import "./checkout-item.styles.scss";

import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selection";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const currentCartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(currentCartItems, cartItem));

  const addItemHandler = () =>
    dispatch(addItemToCart(currentCartItems, cartItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(currentCartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={removeItemHandler}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemHandler}>
          &#10095;
        </span>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
