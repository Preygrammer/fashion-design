<template>
  <div class="border-wrapper">
    <div class="categories__border__line" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: "AppBorderLine",
  props: {
    bgColor: String,
    width: String,
    location: String,
  },
  computed: {
    style() {
      return {
        backgroundColor: this.bgColor,
        width: this.width,
        margin: `10px ${this.location == "center" ? "auto 0" : "0"}`,
      };
    },
  },
};
</script>


<style>
.categories__border__line {
  height: 2px;
  margin: 10px auto 0;
}
</style>