/*
The button component is a functional component that takes in children as props and renders them inside a button element.
The button has a class name of "button-container" which can be styled using CSS.
The button will have 3 styles: default, inverted, and google sign in

*/

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

// The button component is a functional component that takes in children as props and renders them inside a button element.
// The button has a class name of "button-container" which can be styled using CSS.
export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {/* The button will have 3 styles: default, inverted, and google sign in */}
      {children}
    </CustomButton>
  );
};

export default Button;
