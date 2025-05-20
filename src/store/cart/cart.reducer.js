import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        // Update the cart items, cart count, and cart total in the state

        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        // Update the cart items, cart count, and cart total in the state
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
