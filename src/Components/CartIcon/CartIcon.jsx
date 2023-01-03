import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styles";

import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const handleToggleCartDropdown = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={handleToggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
