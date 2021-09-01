<template>
  <div class="rating-star d-flex gap__5">
    <div class="star" v-for="rate in 5 - rating + rating" :key="rate">
      <img
        :src="
          require(`../assets/img/${
            rate <= rating ? 'star-selected' : 'star'
          }.svg`)
        "
        :class="rate <= rating ? 'star-selected-white' : 'star-unselected'"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingStar",
  props: {
    rating: Number, //ex: pass 4 it will be rated 4 star
    isColorWhite: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.star img {
  height: 12px;
}

.gap__5 {
  gap: 5px;
}
</style>