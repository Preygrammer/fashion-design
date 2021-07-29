<template>
  <div :style="bannerProp" class="banner__promo__card">
    <div class="banner__promo__details">
      <h2>{{ title }}</h2>
      <BorderLine bgColor="#ffffff" width="30%" location="left" />
      <div class="banner__promo__category">
        {{ category }}
      </div>
      <div class="banner__promo__btn">
        <Button text="Shop Now" icon="arrow-right" />
      </div>
    </div>
    <img
      :src="require(`../assets/img/${source}`)"
      :style="style"
      :alt="source"
    />
  </div>
</template>

<script>
import BorderLine from "@/components/BorderLine.vue";
import Button from "@/components/Button.vue";

export default {
  name: "BannerPromoCard",
  components: {
    BorderLine,
    Button,
  },
  props: {
    title: String,
    category: String,
    height: String,
    width: String,
    source: String,
    marginTop: String,
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
      };
    },

    bannerProp() {
      return {
        "margin-top": this.marginTop,
      };
    },
  },
};
</script>

<style scoped>
.banner__promo__card {
  position: relative;
  width: 50%;
  height: 100%;
}

.banner__promo__details {
  position: absolute;
  top: 60px;
  left: 100px;
  color: #ffffff;
}

.banner__promo__details h2 {
  font-size: 50px;
}

.banner__promo__category {
  text-transform: uppercase;
  font-family: "Oswald";
  font-size: 12px;
  font-weight: 100;
  letter-spacing: 2px;
}

.banner__promo__card img {
  object-fit: cover;
  width: 951.99px;
}
</style>