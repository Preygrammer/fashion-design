<template>
  <button :type="type" class="btn-standard" :style="style">
    <slot />
    <!-- {{ text }}
    <span v-if="icon">
      <font-awesome-icon :icon="icon" />
    </span> -->
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    height: String,
    width: String,
    border: String,
    textColor: String,
    bgColor: String,
  },

  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
        border: this.border,
        color: this.textColor,
        backgroundColor: this.bgColor,
      };
    },
  },
};
</script>

<style>
.btn-standard {
  background: transparent;
  color: #ffffff;
  width: 125px;
  height: 30px;
  /* margin-top: 20px; */
  border: 2px solid #ffffff;
  font-family: "Oswald";
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.btn-standard:hover {
  background: #ffffff;
  color: #000000;
  cursor: pointer;
}
</style>