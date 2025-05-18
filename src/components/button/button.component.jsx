/*
The button component is a functional component that takes in children as props and renders them inside a button element.
The button has a class name of "button-container" which can be styled using CSS.
The button will have 3 styles: default, inverted, and google sign in

*/

import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {/* The button will have 3 styles: default, inverted, and google sign in */}
      {children}
    </button>
  );
};

export default Button;
