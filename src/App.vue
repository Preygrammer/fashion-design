<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>



<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}

#app {
  font-family: "Playfair Display", serif, Oswald-Regular, Oswald-Bold,
    Oswald-Light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: inherit;
}
</style>