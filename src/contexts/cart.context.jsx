import { clear } from "@testing-library/user-event/dist/clear";
import { createContext, useState, useEffect, use } from "react";

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

// Create the CartContext
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  total: 0,
});

// CartProvider component
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // This effect will run whenever the cartItems state changes
  // It will calculate the total number of items in the cart
  useEffect(() => {
    // This function calculates the total number of items in the cart
    // by reducing the cartItems array to a single value
    //total defaults to 0
    // and item is the current item being processed in the array
    // add the  total quantity of each item to the total
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  // Function to add an item to the cart
  // This function will be passed down to the components that need it
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
