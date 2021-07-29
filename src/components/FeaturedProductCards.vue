<template>
  <div class="fpc__image">
    <!-- <div class="fpc__sale-tag" v-if="isSale">Sale</div> -->
    <SaleTag v-if="isSale" />
    <img
      :src="require(`../assets/img/${source}`)"
      :style="style"
      :alt="source"
    />

    <div class="fpc__details">
      <div class="fpc__details_title">
        {{ title }}
      </div>
      <div class="fpc__details_price"><span>£</span>{{ price }}.00</div>
    </div>
  </div>
</template>

<script>
import SaleTag from "@/components/SaleTag.vue";

export default {
  name: "FeaturedProductCards",
  components: {
    SaleTag,
  },
  props: {
    source: String,
    title: String,
    width: String,
    price: [String, Number],
    isSale: Boolean,
  },
  computed: {
    style() {
      return {
        width: this.width,
      };
    },
  },
};
</script>

<style scoped>
.fpc__image {
  height: 375px;
  width: 19.99%;
  padding: 0 15px;
  position: relative;
}

.fpc__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fpc__details {
  text-align: center;
}

.fpc__details_title,
.fpc__details_price {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
}

.fpc__details_title {
  margin-top: 20px;
}
</style>