<template>
  <div class="shipping__options">
    <div
      v-for="option in shippingOptions"
      :key="option.shippingId"
      class="shipping__option"
    >
      <AppInput name="shipping-option" type="radio" />
      <label
        >{{ option.shippingName
        }}<span
          v-show="option.shippingPrice != null && option.shippingPrice != 0"
          >: $</span
        >{{ shippingPrice(option.shippingPrice) }}
      </label>
    </div>
  </div>
</template>

<script>
import AppInput from "../components/AppInput.vue";

export default {
  name: "ShippingOption",
  components: {
    AppInput,
  },
  props: {
    shippingOptions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    shippingPrice(price) {
      price = null == price ? "" : 0 == price ? " (Free)" : price.toFixed(2);
      return price;
    },
  },
};
</script>