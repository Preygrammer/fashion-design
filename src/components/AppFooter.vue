<template>
  <div class="footer__container">
    <h1>LOGO</h1>
    <div class="footer__navigation">
      <List :hasRouteItems="true" :items="navigationItems" />
    </div>

    <div class="footer__social">
      <div class="fs__social__list">
        <img
          v-for="(item, index) in socialItems"
          :src="require(`../assets/img/${item.imgSrc}`)"
          :key="index"
          :alt="item.imgSrc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";

export default {
  name: "AppFooter",
  components: {
    List,
  },
  data() {
    return {
      navigationItems: [
        {
          route: "/",
          displayName: "Home",
        },
        { route: "/product", displayName: "Product" },
        { route: "/history", displayName: "History" },
        { route: "/showroom", displayName: "Showroom" },
        { route: "/contact", displayName: "Contact" },
      ],
      socialItems: [
        {
          link: "/",
          imgSrc: "twitter.svg",
        },
        {
          link: "/",
          imgSrc: "facebook.svg",
        },
        {
          link: "/",
          imgSrc: "google-plus-logo.svg",
        },
        {
          link: "/",
          imgSrc: "rss.svg",
        },
      ],
    };
  },
};
</script>
