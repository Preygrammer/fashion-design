<template>
  <div>
    <div
      v-show="cartItems.length"
      v-for="cart in cartItems"
      :key="cart.productId"
      class="cart__items"
    >
      <div class="cart__items__main">
        <div
          v-if="showImage"
          class="cart__items__close"
          @click="removeItem(cart.productId)"
        >
          ✕
        </div>
        <div class="cart__items__image">
          <AppImage v-if="showImage" :imgSrc="cart.productImage" />
          <div class="item__details">
            <div class="item__details__title">{{ cart.productName }}</div>
            <div v-if="showPrice" class="item__details__price">
              <span>$</span>{{ cart.productPrice }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="showQuantity" class="cart__items__incrementor">
        <div class="incrementor">
          <AppButton
            @click.native="
              productItemTotal(cart.productQuantity, cart.productPrice)
            "
          >
            <AppImage imgSrc="triangular-filled-up-arrow.svg" />
          </AppButton>
          <div :key="cart.productId" class="incrementor__value">
            {{ cart.productQuantity }}
          </div>
          <AppButton
            @click.native="
              cart.productQuantity = $functions.decrement(
                cart.productQuantity,
                1
              )
            "
          >
            <AppImage imgSrc="triangular-filled-up-arrow.svg" />
          </AppButton>
        </div>
      </div>
      <div class="item__total">
        <span>£</span>{{ cart.productPrice.toFixed(2) }}
      </div>
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
    showQuantity: {
      type: Boolean,
      default: true,
    },
    showImage: {
      type: Boolean,
      default: true,
    },
    showPrice: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    removeItem(id) {
      this.$emit("removeItem", id);
    },

    // productItemTotal(quantity, price) {
    //   quantity = quantity += 1;
    //   price = price * 2;
    // },
  },
  // @click.native="
  //             cart.productQuantity = $functions.increment(
  //               cart.productQuantity,
  //               1
  //             )
};
</script>