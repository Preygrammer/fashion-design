<template>
  <!-- <app-link> Your Element </app-link> -->
  <a :href="url" :title="title" :target="target">
    <slot />
  </a>
</template>

<script>
export default {
  name: "AppLink",
  props: {
    url: String,
    title: String,
    target: {
      type: String,
      default: "_blank",
    },
  },
};
</script>