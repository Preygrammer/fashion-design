<template>
  <input :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
  components: {},
  name: "AppInput",
  props: {
    type: { 
      type: String,
      default: "text"
    },
    placeholder: String,
  },
};
</script>