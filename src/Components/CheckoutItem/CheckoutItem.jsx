import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  BaseSpan,
} from "./checkout-item.styles.jsx";

import {
  removeItemFromCheckout,
  addItemToCart,
  removeItemToCart,
} from "../../store/cart/cart.action.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(removeItemFromCheckout(cartItems, item));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const removeItemHandler = () => dispatch(removeItemToCart(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
