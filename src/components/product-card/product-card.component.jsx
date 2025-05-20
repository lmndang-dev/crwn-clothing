import "./product-card.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selection";
import { addItemToCart } from "../../store/cart/cart.action";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  // Function to handle adding the product to the cart
  // This function will be called when the "Add to cart" button is clicked
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
