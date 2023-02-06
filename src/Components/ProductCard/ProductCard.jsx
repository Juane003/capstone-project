import { ProductCardContainer, Footer } from "./product-card.styles.jsx";
import { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { AdaptedButton } from "./product-card.styles.jsx";
import { addItemToCart } from "../../store/cart/cart.action.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <AdaptedButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </AdaptedButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
