<template>
  <div class="slider__bullet__container">
    <div
      v-for="(bullet, index) in bullets"
      class="bullet"
      @click="sampleFn(bullet)"
      :key="index"
    >
      &bullet;
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSliderBullet",
  props: {
    bullets: Number,
  },
  methods: {
    sampleFn(bullet) {
      console.log("Clicked " + bullet);
      var method = "";
      if (bullet > 1) {
        method = "mwPrevious";
      } else {
        method = "mwNext";
      }
      this.$emit("moveSlide", method);
    },
  },
};
</script>

<style>
.slider__bullet__container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bullet {
  color: white;
  font-size: 40px;
  margin: 0 7.5px;
  padding: 40px 0 50px;
}

.bullet-active {
  color: #2b2e37;
}
</style>