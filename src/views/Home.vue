<template>
  <div class="wrapper">
    <!-- categories__carousel__container -->
    <div class="categories__carousel__container">
      <CategoriesCarouselCards
        source="pexels-maryia-plashchynskaya-3393793.jpg"
        width="100%"
        height="808px"
        title="Features"
        description="Recaptiualize Quality"
      />
      <CategoriesCarouselCards
        source="pexels-hudson-marques-3378973.jpg"
        width="100%"
        height="808px"
        title="New Arrivals"
        description="Recaptiualize Quality"
      />
      <CategoriesCarouselCards
        source="pexels-mika-borgia-1317712.jpg"
        width="100%"
        height="808px"
        title="Lookbook"
        description="Recaptiualize Quality"
      />
      <CategoriesCarouselCards
        source="pexels-photo-3254131.jpeg"
        width="100%"
        height="808px"
        title="House & Home"
        description="Recaptiualize Quality"
      />
    </div>
    <!-- categories__carousel__container -->

    <!-- Featured Product -->
    <div class="featured__products">
      <h2>Featured Products</h2>
      <BorderBottomSlash bgColor="#000000" width="3%" location="center" />
      <div class="fpc__container">
        <FeaturedProductCards
          source="pexels-mikotoraw-3737392.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
          :isSale="true"
        />

        <FeaturedProductCards
          source="pexels-philip-boakye-910143.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
        />
        <FeaturedProductCards
          source="pexels-olenka-sergienko-3686769.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
        />
        <FeaturedProductCards
          source="pexels-elle-hughes-1549200.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
        />
        <FeaturedProductCards
          source="pexels-mídia-1454184.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
        />
      </div>
    </div>
    <!-- Featured Product -->

    <!-- Promo Banner  -->
    <div class="promo__banner__container">
      <BannerPromoCards
        title="Summer Collection"
        category="Best Collection 2016"
        source="pexels-anfisa-eremina-2543042.jpg"
        width="100%"
        height="468px"
      />

      <BannerPromoCards
        title="Summer Collection"
        category="Best Collection 2016"
        source="pexels-min-an-1163194.jpg"
        width="100%"
        height="930px"
      />

      <BannerPromoCards
        title="Summer Collection"
        category="Best Collection 2016"
        source="pexels-philip-boakye-1813947.jpg"
        width="100%"
        height="935px"
        marginTop="-462px"
      />

      <BannerPromoCards
        title="Summer Collection"
        category="Best Collection 2016"
        source="pexels-godisable-jacob-965324.jpg"
        width="100%"
        height="473px"
      />
    </div>
    <!-- Promo Banner  -->
  </div>
</template>

<script>
// @ is an alias to /src
import CategoriesCarouselCards from "@/components/CategoriesCarouselCards.vue";
import BorderBottomSlash from "../components/BorderBottomSlash.vue";
import FeaturedProductCards from "../components/FeaturedProductCards.vue";
import BannerPromoCards from "../components/BannerPromoCards.vue";

export default {
  name: "Home",
  components: {
    CategoriesCarouselCards,
    BorderBottomSlash,
    FeaturedProductCards,
    BannerPromoCards,
  },
};
</script>

<style scoped>
.categories__carousel__container {
  display: flex;
}

.featured__products {
  padding: 50px 0;
  height: 670px;
}

.featured__products h2 {
  font-family: "Oswald", sans-serif;
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}

.fpc__container {
  display: flex;
  padding: 70px 55px;
}

.promo__banner__container {
  display: flex;
  flex-flow: row wrap;
}
</style>
