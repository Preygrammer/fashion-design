<template>
  <div class="cart__wrapper">
    <div class="cart__hero">
      <div class="cart__hero__overlay"></div>
      <div class="cart__hero__title">Shopping Cart</div>
      <BorderLine bgColor="#ffffff" width="10%" location="center" />
      <BorderLine bgColor="#ffffff" width="5%" location="center" />
    </div>

    <div class="cart__body">
      <CartProduct>
        <div class="cart__product__heading">
          <CartHeadingTitle>Product</CartHeadingTitle>
          <CartHeadingTitle>Qty</CartHeadingTitle>
          <CartHeadingTitle>Total</CartHeadingTitle>
        </div>
        <BorderLine bgColor="#252525" width="100%" location="center" />

        <CartItems :cartItems="cartItems" />
      </CartProduct>

      <div class="cart__sidebar">
        <div class="cart__sidebar__heading">Cart Totals</div>
      </div>
    </div>
  </div>
</template>

<script>
import BorderLine from "../components/BorderLine.vue";
import CartProduct from "../components/CartProduct.vue";
import CartHeadingTitle from "../components/CartHeadingTitle.vue";
import CartItems from "../components/CartItems.vue";

import "../assets/scss/pages/_cart.scss";

export default {
  name: "Cart",
  components: {
    BorderLine,
    CartProduct,
    CartHeadingTitle,
    CartItems,
  },
  data() {
    return {
      cartItems: [
        {
          productId: 1,
          productImage: "pexels-mídia-1454184.jpg",
          productName: "Eiusmod mauris torquen",
          productPrice: 89,
        },
        {
          productId: 2,
          productImage: "pexels-min-an-977380.jpg",
          productName: "Eiusmod mauris torquen",
          productPrice: 89,
        },
      ],
    };
  },
};
</script>