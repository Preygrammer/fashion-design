<template>
  <div class="categories__carousel__cards">
    <img
      :src="require(`../assets/img/${source}`)"
      :style="style"
      :alt="source"
    />

    <div class="categories__text">
      <div class="categories__title">{{ title }}</div>
      <div class="categories__description">{{ description }}</div>
      <div class="categories__border__slash"></div>
      <BorderLine bgColor="#ffffff" width="15%" location="center" />
    </div>
  </div>
</template>

<script>
import BorderLine from "@/components/BorderLine.vue";

export default {
  name: "CategoriesCarouselCard",
  components: { BorderLine },
  props: {
    source: String,
    width: String,
    height: String,
    title: String,
    description: String,
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
      };
    },
  },
};
</script>

<style scoped>
.categories__carousel__cards {
  height: 808px;
}

.categories__carousel__cards img {
  object-fit: cover;
  min-width: 480px;
}

.categories__text {
  position: relative;
  top: -140px;
  height: 140px;
  text-align: center;
  color: #ffffff;
}

.categories__title {
  font-family: "Playfair Display", serif;
  font-size: 50px;
}

.categories__description {
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 12px;
}
</style>