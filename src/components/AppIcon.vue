<template>
  <div class="icon__wrapper">
    <font-awesome-icon :icon="icon" />
    <span class="shopping__bag__count" v-if="shoppingBagCount">{{
      shoppingBagCount
    }}</span>
  </div>
</template>

<script>
export default {
  name: "IconListItems",
  props: {
    icon: String,
    url: String,
    shoppingBagCount: Number,
  },
};
</script>

<style scoped>
.icon__wrapper {
  position: relative;
}

.shopping__bag__count {
  font-size: 14px;
  top: -5px;
  left: 18px;
  font-family: "Lato";
  color: #ffffff;
  position: absolute;
}
</style>