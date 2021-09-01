<template>
  <div class="the__product__card">
    <!-- <div class="fpc__sale-tag" v-if="isSale">Sale</div> -->
    <AppImage :imgSrc="imgSrc" />

    <slot />
  </div>
</template>

<script>
import AppImage from "@/components/AppImage.vue";

export default {
  name: "TheProductCard",
  components: {
    AppImage,
  },
  props: {
    imgSrc: String,
  },
};
</script>