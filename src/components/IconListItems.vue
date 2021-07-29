<template>
  <font-awesome-icon :icon="icons" />
</template>

<script>
export default {
  name: "IconListItems",
  props: {
    icons: String,
    url: String,
  },
};
</script>

<style scoped>
.icon-container {
  font-family: Oswald-Light;
  font-size: 14px;
  color: #ffffff;
}
</style>