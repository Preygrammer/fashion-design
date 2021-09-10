<template>
  <div class="overlay">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppOverlay",
};
</script>

<style>
.overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
  top: 0;
}
</style>