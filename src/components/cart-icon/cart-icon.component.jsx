import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      {/* <span className="item-count">{itemCount}</span> */}
      {/* The itemCount is a placeholder for the number of items in the cart */}
      {/* In a real application, this would be replaced with a state or prop */}
      {/* that tracks the number of items in the cart */}
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
