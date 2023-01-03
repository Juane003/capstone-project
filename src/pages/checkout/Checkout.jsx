import { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";
import { CartContext } from "../../Contexts/CartContext";

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  const renderCartItemsOnCheckout = (element) => {
    return <CheckoutItem item={element} />;
  };

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(renderCartItemsOnCheckout)}
      <Total>Total: ${cartTotalPrice}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
