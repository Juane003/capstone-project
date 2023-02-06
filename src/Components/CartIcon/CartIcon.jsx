import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styles";

import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const handleToggleCartDropdown = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={handleToggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
