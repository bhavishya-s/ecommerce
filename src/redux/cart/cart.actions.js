import CartActionTypes from "./cart.types";

export const ToggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const cartAddItem = (item) => ({
  type: CartActionTypes.CART_ADD_ITEMS,
  payload: item,
});
