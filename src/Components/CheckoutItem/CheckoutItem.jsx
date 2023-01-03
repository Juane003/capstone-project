import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  BaseSpan,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const { removeItemFromCheckout, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => removeItemFromCheckout(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemToCart(item);

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
