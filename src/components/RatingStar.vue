<template>
  <div class="d-flex gap-3">
    <div class="star" v-for="rate in 5 - rating + rating" :key="rate">
      <img
        :src="
          require(`../assets/img/${
            rate <= rating ? 'star-selected' : 'star'
          }.svg`)
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingStar",
  props: {
    rating: Number, //ex: pass 4 it will be rated 4 star
  },
  mounted() {},
};
</script>

<style>
.star img {
  height: 12px;
}

.gap-3 {
  gap: 5px;
}
</style>