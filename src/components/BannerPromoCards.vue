<template>
  <div :style="bannerProp" class="banner__promo__card">
    <div class="banner__promo__details">
      <h2>{{ title }}</h2>
      <BorderBottomSlash bgColor="#ffffff" width="30%" location="left" />
      <div class="banner__promo__category">
        {{ category }}
      </div>
      <div class="banner__promo__btn">
        <button class="show-now-btn">Shop Now
            <span>
                <font-awesome-icon :icon="icons" />
            </span>
        </button>
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
import BorderBottomSlash from "@/components/BorderBottomSlash.vue";

export default {
  name: "BannerPromoCards",
  components: {
    BorderBottomSlash,
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
  font-family: 'Oswald';
  font-size: 12px;
  font-weight: 100;
  letter-spacing: 2px;
}

.banner__promo__card img {
  object-fit: cover;
  width: 951.99px;
}
</style>