import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Find if the item already exists in the cart
  // The existingCartItem variable will hold the cart item if it exists
  // The exitingCartItem variable will be undefined if the item does not exist
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

// Create the CartContext
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

// CartProvider component
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  // This function will be passed down to the components that need it
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
