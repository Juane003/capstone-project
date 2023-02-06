import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CheckoutButton,
} from "./CartDropdown.styles";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

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
        <CheckoutButton>GO TO Checkout</CheckoutButton>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
