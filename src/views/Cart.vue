<template>
  <div class="cart__wrapper">
    <div class="cart__hero">
      <div class="cart__hero__overlay"></div>
      <div class="cart__hero__title">Shopping Cart</div>
      <AppBorderLine bgColor="#ffffff" width="10%" location="center" />
      <AppBorderLine bgColor="#ffffff" width="5%" location="center" />
    </div>

    <div class="cart__body">
      <CartProduct>
        <div class="cart__product__heading">
          <CartHeadingTitle>Product</CartHeadingTitle>
          <CartHeadingTitle>Qty</CartHeadingTitle>
          <CartHeadingTitle>Total</CartHeadingTitle>
        </div>
        <AppBorderLine bgColor="#252525" width="100%" location="center" />

        <CartItems @removeItem="removeItem" :cartItems="cartItems" />

        <div class="cart__coupon">
          <div class="cart__coupon__title">Coupon</div>
          <div class="cart__coupon__input">
            <AppInput placeholder="Enter coupon code..." />
          </div>
          <div class="cart__coupon__apply">
            <AppButton>Apply Coupon</AppButton>
          </div>
        </div>
      </CartProduct>

      <AppSidebar>
        <div class="sidebar__body">
          <div class="sidebar__body__heading">Cart Totals</div>
          <AppBorderLine bgColor="#252525" width="100%" location="center" />
          <div class="sidebar__body__subtotal">
            <div class="sidebar__body__subtotal__title">Subtotal</div>
            <div class="sidebar__body__subtotal__total">
              <span>{{ subtotal }}</span>
            </div>
          </div>
          <AppBorderLine bgColor="#dadada" width="100%" location="center" />
          <AppShipping>
            <div class="shipping__title">Shipping</div>
            <AppShippingOption :shippingOptions="shippingOptions" />
          </AppShipping>

          <AppBorderLine bgColor="#dadada" width="100%" location="center" />

          <div class="sidebar__calc__shipping">
            <AppButton
              class="sidebar__accordion"
              @click.native="isExpanded = !isExpanded"
              ><span class="sidebar__accordion__title">Calculate Shipping</span>
              <AppImage
                :class="`sidebar__accordion__img ${
                  isExpanded ? 'expanded' : ''
                }`"
                imgSrc="triangular-filled-up-arrow.svg"
              />
            </AppButton>
            <VueAccordion :expanded="isExpanded">
              <div class="cart__accordioin__content">
                <h5>I don't know what to appear here...</h5>
              </div>
            </VueAccordion>
          </div>

          <AppBorderLine bgColor="#dadada" width="100%" location="center" />

          <div class="sidebar__total">
            <div class="sidebar__total__title">Total</div>
            <div class="sidebar__total__price">{{ total }}</div>
          </div>
        </div>

        <div class="sidebar__actions">
          <AppButton class="sidebar__actions__update" @click.native="updateCart"
            >Update Cart</AppButton
          >
          <AppButton class="sidebar__actions__checkout"
            >Proceed to checkout</AppButton
          >
        </div>
      </AppSidebar>
    </div>
  </div>
</template>

<script>
import AppInput from "../components/AppInput.vue";
import AppImage from "../components/AppImage.vue";
import AppButton from "../components/AppButton.vue";

import AppBorderLine from "../components/AppBorderLine.vue";
import CartProduct from "../components/CartProduct.vue";
import CartHeadingTitle from "../components/CartHeadingTitle.vue";
import CartItems from "../components/CartItems.vue";
import AppShipping from "../components/AppShipping.vue";
import AppShippingOption from "../components/AppShippingOption.vue";
import AppSidebar from "../components/AppSidebar.vue";

import VueAccordion from "@ztrehagem/vue-accordion";
import "@ztrehagem/vue-accordion/dist/vue-accordion.css";
import "../assets/scss/pages/_cart.scss";

export default {
  name: "Cart",
  components: {
    AppInput,
    AppImage,
    AppButton,
    AppBorderLine,
    CartProduct,
    CartHeadingTitle,
    CartItems,
    AppShipping,
    AppShippingOption,
    AppSidebar,
    VueAccordion,
  },
  data() {
    return {
      cartItems: [
        {
          productId: 1,
          productImage: "pexels-mídia-1454184.jpg",
          productName: "Eiusmod mauris torquen",
          productPrice: 89,
          productQuantity: 1,
        },
        {
          productId: 2,
          productImage: "pexels-min-an-977380.jpg",
          productName: "Eiusmod mauris torquen",
          productPrice: 89,
          productQuantity: 1,
        },
      ],
      //0 = Free | null = none
      shippingOptions: [
        {
          shippingId: 1,
          shippingName: "Flat Rate",
          shippingPrice: 100,
        },
        {
          shippingId: 2,
          shippingName: "Free Shipping",
          shippingPrice: 100,
        },
        {
          shippingId: 3,
          shippingName: "International Delivery",
          shippingPrice: 170,
        },
        {
          shippingId: 4,
          shippingName: "Local Deliver",
          shippingPrice: 60,
        },
        {
          shippingId: 5,
          shippingName: "Local Pickup",
          shippingPrice: 0,
        },
      ],
      isExpanded: false,
      subtotal: 0,
      total: 0,
    };
  },

  created() {
    console.log(this.cartItems.map((item) => item.productId));
  },

  methods: {
    updateCart() {},

    removeItem(id) {
      var removeIndex = this.cartItems
        .map((item) => item.productId)
        .indexOf(id);

      ~removeIndex && this.cartItems.splice(removeIndex, 1);
    },
  },
};
</script>