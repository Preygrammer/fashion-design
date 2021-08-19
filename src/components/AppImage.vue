<template>
  <img :src="require(`../assets/img/${imgSrc}`)" :style="style" :alt="imgSrc" />
</template>

<script>
export default {
  name: "AppImage",
  props: {
    height: String,
    width: String,
    imgSrc: String,
  },

  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
      };
    },
  },
};
</script>