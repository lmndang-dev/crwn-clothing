import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selection";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  // Import useNavigate from react-router-dom at the top of your file:
  // import { useNavigate } from "react-router-dom";
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    // Navigate to the checkout page
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {/* Cart items will be displayed here */}
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
