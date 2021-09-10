<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "TheTab",
    },
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>