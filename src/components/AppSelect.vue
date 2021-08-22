<template>
  <select name="select">
    <option v-for="item in items" :key="item.value" :value="item.value">
      {{ item.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>