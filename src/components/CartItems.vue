<template>
  <div>
    <div
      v-show="cartItems.length"
      v-for="cart in cartItems"
      :key="cart.productId"
      class="cart__items"
    >
      <div class="cart__items__main">
        <div class="cart__items__close">x</div>
        <div class="cart__items__image">
          <AppImage :imgSrc="cart.productImage" />
          <div class="item__details">
            <div class="item__details__title">{{ cart.productName }}</div>
            <div class="item__details__price">
              <span>$</span>{{ cart.productPrice }}
            </div>
          </div>
        </div>
      </div>
      <div class="cart__items__incrementor">
        <div class="incrementor">
          <AppButton>
            <AppImage
              imgSrc="triangular-filled-up-arrow.svg"
              @click.native="itemsCount = $functions.increment(itemsCount, 1)"
            />
          </AppButton>
          <div class="incrementor__value">1</div>
          <AppButton>
            <AppImage imgSrc="triangular-filled-up-arrow.svg" />
          </AppButton>
        </div>
      </div>
      <div class="item__total">£89.00</div>
    </div>
  </div>
</template>

<script>
import AppImage from "@/components/AppImage.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "CartItems",
  components: {
    AppImage,
    AppButton,
  },
  props: {
    cartItems: Array,
  },
};
</script>