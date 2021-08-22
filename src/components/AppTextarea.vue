<template>
  <textarea :placeholder="placeholder"></textarea>
</template>

<script>
export default {
  name: "AppTextarea",
  props: {
    placeholder: String,
  },
};
</script>