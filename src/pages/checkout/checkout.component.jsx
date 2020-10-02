import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectCartTotal } from "../../redux/cart/cart.selector";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, cartTotal, history }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length?cartItems.map((item) => (
      <CheckoutItem cartItem={item} key={item.id} />
    )):<div className="cart-empty">Your cart is empty. Please add more items.</div>}
    <div className="total">
      <span>Total : ${cartTotal}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
