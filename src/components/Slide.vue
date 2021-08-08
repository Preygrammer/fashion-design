<template>
  <div class="fob__slide">
    <ProductCard :source="imgSrc" height="535px" width="565px" />
    <div class="fob__slide__details">
      <div class="fob__sd__category text-center">
        {{ postCategory }}
        <BorderLine width="10%" bgColor="#000000" location="center" />
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
import BorderLine from "@/components/BorderLine.vue";

export default {
  name: "Slide",
  props: {
    imgSrc: String,
    postTitle: String,
    postUser: String,
    postCommentsTotal: Number,
    postCategory: String,
  },
  components: {
    ProductCard,
    BorderLine,
  },
};
</script>

<style>
.fob__slide__container {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  padding-top: 70px;
}
.fob__slide__container .fpc__image {
  height: 100%;
}

.fob__slide {
  height: 100%;
}

.fob__slide__details {
  background-color: #ffffff;
  margin: 0 15px;
  padding: 42px 0 48px;
}

.fob__sd__category {
  font-family: "Oswald";
  font-weight: light;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #9a9a9a;
}

.fob__post__details {
  display: flex;
  justify-content: center;
}

.fob__post__title {
  font-family: "Playfair", serif;
  font-size: 30px;
}

.fob__post__user,
.fob__post__comments {
  font-family: "Poppins";
  font-size: 13px;
}

.fob__post__user {
  margin-right: 10px;
}
</style>