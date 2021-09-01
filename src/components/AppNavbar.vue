<template>
  <div class="navbar-container">
    <div class="navbar-top navbar-desktop">
      <div class="left__side">
        <AppIcon icon="user-alt" />
        <AppIcon icon="heart" />
      </div>
      <div class="center__side">
        <div class="navbar-logo">
          <h1>LOGO</h1>
        </div>
      </div>
      <div class="right__side">
        <AppIcon icon="search" />
        <AppIcon icon="shopping-bag" :shoppingBagCount="3" />
        <AppIcon icon="bars" />
      </div>
    </div>
    <div class="navbar-bottom navbar-desktop">
      <List :hasRouteItems="true" :items="routeItems" />
    </div>

    <div class="navbar-mobile">
      <div class="navbar-mobile-logo">
        <h1>LOGO</h1>
      </div>
    </div>
    <div class="navbar-toggle-menu navbar-mobile">
      <AppIcon icon="bars" />
    </div>
  </div>
</template>

<script>
import AppIcon from "./AppIcon.vue";
import List from "./List.vue";

export default {
  name: "Navbar",
  components: {
    AppIcon,
    List,
  },
  data() {
    return {
      routeItems: [
        {
          route: "/",
          displayName: "Home",
        },
        { route: "/clothing", displayName: "Clothing" },
        { route: "/collections", displayName: "Collections" },
        { route: "/journal", displayName: "Journal" },
        { route: "/contact", displayName: "Contact" },
      ],
    };
  },
};
</script>
