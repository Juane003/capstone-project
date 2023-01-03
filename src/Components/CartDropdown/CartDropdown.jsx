import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { Link } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CheckoutButton,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const renderCartItem = (element) => <CartItem cartItem={element} />;

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(renderCartItem)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Link to="/checkout">
        <CheckoutButton>GO TO CHECKOUT</CheckoutButton>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
