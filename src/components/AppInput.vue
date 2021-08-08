<template>
  <input type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  components: {},
  name: "AppInput",
  props: {
    placeholder: String,
  },
};
</script>