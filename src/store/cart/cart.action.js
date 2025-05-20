import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

/*========================================> UTILS <========================================>*/
const addCartItem = (cartItems, productToAdd) => {
  // Find if the item already exists in the cart
  // The existingCartItem variable will hold the cart item if it exists
  // The exitingCartItem variable will be undefined if the item does not exist
  // If the item does exist, the existingCartItem variable will hold the cart item
  const existingCartItem = cartItems.find(
    // Check if the cart item id is the same as the product to add id
    (cartItem) => cartItem.id === productToAdd.id
  );

  // If it exists, increment the quantity
  if (existingCartItem) {
    // Map through the cart items and return a new array
    // If the cart item is the same as the product to add, increment the quantity
    // Otherwise, return the cart item as is
    return cartItems.map((cartItem) =>
      // If the cart item is the same as the product to add, increment the quantity
      // Otherwise, return the cart item as is
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If it doesn't exist, add it to the cart with a quantity of 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // Find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // If the quantity is 1, remove the item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // Otherwise, decrement the quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// Function to clear the a cart item
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
/*========================================> UTILS <========================================>*/
/*
 *
 *
 *
 */
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

// Function to add an item to the cart
// This function will be passed down to the components that need it
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// Function to reduce or remove an item from the cart when the quantity is 1
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

// Function to clear an item from the cart
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
