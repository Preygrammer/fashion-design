<template>
  <div class="fob__slide">
    <ProductCard :source="imgSrc" height="535px" width="565px" />
    <div class="fob__slide__details">
      <div class="fob__sd__category text-center">
        {{ postCategory }}
        <AppBorderLine width="10%" bgColor="#000000" location="center" />
      </div>
      <div class="fob__sd__details">
        <div class="fob__post__title text-center">{{ postTitle }}</div>
        <div class="fob__post__details">
          <div class="fob__post__user">
            By: <span>{{ postUser }} </span>
          </div>
          <div class="fob__post__comments">
            | &nbsp; {{ postCommentsTotal }} comments
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import AppBorderLine from "@/components/AppBorderLine.vue";

export default {
  name: "BlogSlide",
  props: {
    imgSrc: String,
    postTitle: String,
    postUser: String,
    postCommentsTotal: Number,
    postCategory: String,
  },
  components: {
    ProductCard,
    AppBorderLine,
  },
};
</script>

<style>
</style>