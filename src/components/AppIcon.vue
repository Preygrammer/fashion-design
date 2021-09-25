<template>
  <div class="icon__wrapper">
    <font-awesome-icon @click="goToLink(url)" :icon="icon" />
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
  methods: {
    goToLink(url) {
      url == null ? "" : (window.location = url);
    },
  },
};
</script>

<style>
svg:hover {
  cursor: pointer;
}

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