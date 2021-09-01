<template>
  <form :method="method" :action="url">
    <slot />
  </form>
</template>

<script>
export default {
  name: "AppForm",
  props: {
    url: String,
    method: String,
  },
};
</script>