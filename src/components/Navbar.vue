<template>
  <div class="navbar-container">
    <div class="navbar-top">
      <div class="left__side">
        <IconListItems icons="user-alt" />
        <IconListItems icons="heart" />
      </div>
      <div class="center__side">
        <div class="navbar-logo">
          <h1>LOGO</h1>
        </div>
      </div>
      <div class="right__side">
        <IconListItems icons="search" />
        <IconListItems icons="shopping-bag" />
        <IconListItems icons="bars" />
      </div>
    </div>
    <div class="navbar-bottom">
      <ul>
        <li><router-link to="/">Home</router-link> |</li>
        <li>
          <router-link to="/clothing">Clothing</router-link>
        </li>
        <li>
          <router-link to="/collections">Collections</router-link>
        </li>
        <li>
          <router-link to="/journal">Journal</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconListItems from "./IconListItems.vue";

export default {
  name: "Navbar",
  components: {
    IconListItems,
  },
};
</script>

<style scoped>
.navbar-container {
  height: 182px;
  padding: 0 70px;
  width: 100%;
  background: #1e1f1c;
}

.navbar-top {
  display: flex;
}

.left__side,
.center__side,
.right__side {
  width: 33.33%;
}

.left__side,
.right__side {
  color: #ffffff;
  flex-direction: column;
  padding-top: 52px;
}

.right__side {
  text-align: right;
}

.left__side svg,
.right__side svg {
  margin: 0 5px;
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
  margin-top: 19px;
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
}
</style>
