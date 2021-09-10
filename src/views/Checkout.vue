<template>
  <div class="checkout__wrapper">
    <div class="checkout__hero">
      <div class="checkout__hero__overlay"></div>
      <div class="checkout__hero__title">Checkout</div>
      <AppBorderLine bgColor="#ffffff" width="10%" location="center" />
      <AppBorderLine bgColor="#ffffff" width="5%" location="center" />
    </div>

    <div class="checkout__body">
      <div class="checkout__informations">
        <div class="checkout__other__wrapper">
          <div class="checkout__other">
            <div class="checkout__other__img">
              <AppImage
                class="checkout__other__img__user"
                imgSrc="icons8-user.png"
              />
            </div>
            <div class="checkout__other__details">
              <div class="checkout__other__details__title">
                Returning Customer?
              </div>
              <AppLink url="/">Click here to login</AppLink>
            </div>
          </div>

          <div class="checkout__other">
            <div class="checkout__other__img">
              <AppImage class="checkout__other__img__gift" imgSrc="gift.svg" />
            </div>
            <div class="checkout__other__details">
              <div class="checkout__other__details__title">Have a coupon?</div>
              <AppLink url="/">Click here to enter your code</AppLink>
            </div>
          </div>
        </div>

        <div class="billing__heading">
          <div class="billing__heading__title">Billing Address</div>
        </div>
        <AppBorderLine bgColor="#252525" width="100%" location="center" />

        <AppForm class="billing__form">
          <div class="billing__form__fields">
            <div class="billing__form__half">
              <div class="billing__form__field p-right">
                <label for="">First Name *</label>
                <AppInput type="text" class="billing__form__input" />
              </div>
            </div>

            <div class="billing__form__half">
              <div class="billing__form__field p-left">
                <label for="">Last Name *</label>
                <AppInput type="text" class="billing__form__input" />
              </div>
            </div>

            <div class="billing__form__full">
              <div class="billing__form__field">
                <label for="">Company *</label>
                <AppInput type="text" class="billing__form__input" />
              </div>
            </div>

            <div class="billing__form__half">
              <div class="billing__form__field p-right">
                <label for="">Email Address *</label>
                <AppInput type="text" class="billing__form__input" />
              </div>
            </div>

            <div class="billing__form__half">
              <div class="billing__form__field p-left">
                <label for="">Phone *</label>
                <AppInput type="tel" class="billing__form__input" />
              </div>
            </div>
          </div>

          <div class="billing__form__full">
            <div class="billing__form__field">
              <label for="">Country</label>
              <app-select
                id="countries"
                class="billing__form__select"
                :items="selectItems"
              />
              <AppImage
                class="billing__form__select__arrow"
                imgSrc="triangular-filled-up-arrow.svg"
              />
            </div>
          </div>
          <div class="billing__form__full">
            <div class="billing__form__field">
              <label for="">Address</label>
              <AppInput
                type="text"
                placeholder="Street address"
                class="billing__form__input"
              />
            </div>
          </div>

          <div class="billing__form__full">
            <div class="billing__form__field">
              <AppInput type="text" class="billing__form__input" />
            </div>
          </div>

          <div class="billing__form__full">
            <div class="billing__form__field">
              <label for="">Town / City</label>
              <AppInput type="text" class="billing__form__input" />
            </div>
          </div>

          <div class="billing__form__half">
            <div class="billing__form__field p-right">
              <label for="">Country</label>
              <AppInput type="text" class="billing__form__input" />
            </div>
          </div>

          <div class="billing__form__half">
            <div class="billing__form__field p-left">
              <label for="">Postcode *</label>
              <AppInput type="text" class="billing__form__input" />
            </div>
          </div>

          <div class="create-an-account">
            <AppInput type="checkbox" />
            <label for="">Create an account?</label>
          </div>
        </AppForm>

        <div class="shipping__heading">
          <div class="shipping__heading__title">Shipping Address</div>
        </div>
        <AppBorderLine bgColor="#252525" width="100%" location="center" />

        <div class="ship-address-check">
          <AppInput type="checkbox" />
          <label for="">Ship to a different address?</label>
        </div>

        <div class="order__notes">
          <label for="">Order Notes</label>
          <AppTextarea
            :rows="8"
            class="order__notes__textarea"
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>
      </div>

      <AppSidebar>
        <div class="sidebar__body">
          <div class="sidebar__body__heading">Your Order</div>
          <AppBorderLine
            class="border__excluded"
            bgColor="#252525"
            width="100%"
            location="center"
          />

          <CartProduct>
            <div class="cart__product__heading">
              <CartHeadingTitle>Product</CartHeadingTitle>
              <CartHeadingTitle>Total</CartHeadingTitle>
            </div>
            <AppBorderLine bgColor="#dbdbdb" width="100%" location="center" />

            <CartItems
              :showImage="false"
              :showQuantity="false"
              :showPrice="false"
              :cartItems="cartItems"
            />
          </CartProduct>

          <div class="quantity">
            Qty : <span>{{ itemsQuantity }}</span>
          </div>

          <AppBorderLine bgColor="#dbdbdb" width="100%" location="center" />

          <div class="sidebar__products">
            <div class="sidebar__products__subtotal">Subtotal</div>
            <div class="sidebar__products__value">
              <span>{{ checkIfNullOrZero(subtotal) }}</span>
            </div>
          </div>

          <AppBorderLine bgColor="#dbdbdb" width="100%" location="center" />

          <AppShipping>
            <div class="shipping__title">AppShipping</div>
            <AppShippingOption :shippingOptions="shippingOptions" />
          </AppShipping>

          <AppBorderLine bgColor="#dbdbdb" width="100%" location="center" />

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
            <div class="sidebar__total__price">
              {{ checkIfNullOrZero(total) }}
            </div>
          </div>

          <div class="payment__method">
            <div class="payment__method__option">
              <AppInput type="radio" name="payment-method" />
              <div class="payment__method__details">
                <div class="payment__method__title">Direct Bank Transfer</div>
                <div class="payment__method__description">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order won’t be
                  shipped until the funds have cleared in our account.
                </div>
              </div>
            </div>
            <div class="payment__method__option">
              <AppInput type="radio" name="payment-method" />
              <div class="payment__method__details">
                <div class="payment__method__title">Cheque Payment</div>
              </div>
            </div>
            <div class="payment__method__option">
              <AppInput type="radio" name="payment-method" />
              <div class="payment__method__details">
                <div class="payment__method__title">Paypal</div>
                <AppImage imgSrc="paypal-checkout.png" />
              </div>
            </div>
            <div class="what-is-paypal">
              <AppLink url="/">What is Paypal?</AppLink>
            </div>

            <div class="terms-and-conditions">
              <AppInput type="checkbox" />
              <div class="terms-and-conditions__text">
                I’ve read and accept the
                <AppLink url="#">Terms & Conditions *</AppLink>
              </div>
            </div>
          </div>
        </div>
        <div class="place__order">
          <AppButton>Place Order</AppButton>
        </div>
      </AppSidebar>
    </div>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
import AppImage from "../components/AppImage.vue";
import AppInput from "../components/AppInput.vue";
import AppLink from "../components/AppLink.vue";
import AppSelect from "../components/AppSelect.vue";
import AppSidebar from "../components/AppSidebar.vue";
import AppTextarea from "../components/AppTextarea.vue";
import AppBorderLine from "../components/AppBorderLine.vue";
import CartHeadingTitle from "../components/CartHeadingTitle.vue";
import CartItems from "../components/CartItems.vue";
import CartProduct from "../components/CartProduct.vue";
import AppForm from "../components/AppForm.vue";
import AppShipping from "../components/AppShipping.vue";
import AppShippingOption from "../components/AppShippingOption.vue";

import VueAccordion from "@ztrehagem/vue-accordion";
import "@ztrehagem/vue-accordion/dist/vue-accordion.css";

import "../assets/scss/pages/_checkout.scss";

export default {
  name: "Checkout",
  components: {
    AppButton,
    AppImage,
    AppInput,
    AppLink,
    AppSelect,
    AppSidebar,
    AppTextarea,
    AppBorderLine,
    CartItems,
    CartHeadingTitle,
    CartProduct,
    AppForm,
    AppShipping,
    AppShippingOption,
    VueAccordion,
  },
  props: {},
  data() {
    return {
      //API temp data
      // I assume that products will be calculated from the backend
      // like the quantity counting
      cartItems: [
        {
          productId: 1,
          productName: "Eiusmod mauris torquen",
          productPrice: 89,
          productQuantity: 1,
        },
      ],
      //retrieve data from API
      selectItems: [
        {
          value: 1,
          text: "United Kingdom (UK)",
        },
        {
          value: 2,
          text: "United States of America (USA)",
        },
      ],

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

      itemsQuantity: 0,
      isExpanded: false,
      total: 0,
      subtotal: 0,
    };
  },

  methods: {
    checkIfNullOrZero(num) {
      num = null == num ? "£0" : 0 == num ? "£0" : num;
      return num;
    },
  },
  created() {
    this.itemsQuantity = this.cartItems.length;
  },
};
</script>