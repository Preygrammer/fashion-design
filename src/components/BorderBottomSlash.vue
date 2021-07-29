<template>
  <div class="wrapper">
    <div class="categories__border__slash" :style="style"></div>
  </div>
</template>

<script>
export default {
  name: "CategoriesBorderSlash",
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


<style scoped>
.categories__border__slash {
  height: 2px;
  margin: 10px auto 0;
}
</style>