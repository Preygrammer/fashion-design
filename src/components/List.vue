<template>
  <ul class="list__container">
    <li v-for="(item, index) in items" :key="index">
      <RouterLink v-if="hasRouteItems" :to="item.route">{{
        item.displayName
      }}</RouterLink>
      <div v-else>
        {{ item.displayName }}
      </div>
    </li>
  </ul>
</template>


<script>
export default {
  name: "List",
  props: {
    items: [Array, Object],
    hasRouteItems: Boolean,
  },
};
</script>

<style>
.list__container ul {
  list-style: none;
}

.list__container ul li a {
  color: #ffffff;
}
</style>