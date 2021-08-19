<template>
  <div class="navbar-container">
    <div class="navbar-top">
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
    <div class="navbar-bottom">
      <List :hasRouteItems="true" :items="routeItems" />
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

<style>
.navbar-logo {
  font-family: "Poppins";
  /*Temp*/
}

a {
  color: #ffffff;
  font-family: "Oswald";
  font-weight: 100;
  font-size: 12px;
  letter-spacing: 2px;
}

a:hover {
  color: #ffffff;
}

.navbar-container {
  height: 182px;
  padding: 0 70px;
  width: 100%;
  background: #1e1f1c;
}

.navbar-top {
  display: flex;
  padding-top: 14px;
}

.left__side,
.center__side,
.right__side {
  width: 33.33%;
}

.left__side,
.right__side {
  color: #ffffff;
  padding-top: 52px;
}

.left__side {
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.right__side {
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.left__side .icon__wrapper,
.right__side .icon__wrapper {
  margin: 0 10px;
}

.right__side .icon__wrapper:nth-child(2) {
  margin-right: 18px;
}

.center__side {
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.center__side {
  color: #ffffff;
}

.navbar-logo h1 {
  font-size: 80px;
}

.navbar-bottom {
  font-family: Oswald-Light;
  text-transform: uppercase;
  font-size: 12px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 58px;
  margin-top: 5px;
  border-top: 1px solid #2d2d2d;
}

.navbar-bottom ul {
  list-style: none;
  display: flex;
  gap: 60px;
  margin-bottom: 0;
}

.navbar-bottom ul a {
  color: #ffffff;
  text-decoration: none !important;
}
</style>
