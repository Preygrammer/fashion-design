<template>
  <div class="wrapper">
    <!-- categories__carousel__container -->
    <div class="categories__carousel__container">
      <CategoriesCarouselCard
        source="pexels-maryia-plashchynskaya-3393793.jpg"
        width="100%"
        height="808px"
        title="Features"
        description="Recaptiualize Quality"
      />
      <CategoriesCarouselCard
        source="pexels-hudson-marques-3378973.jpg"
        width="100%"
        height="808px"
        title="New Arrivals"
        description="Recaptiualize Quality"
      />
      <CategoriesCarouselCard
        source="pexels-mika-borgia-1317712.jpg"
        width="100%"
        height="808px"
        title="Lookbook"
        description="Recaptiualize Quality"
      />
      <CategoriesCarouselCard
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
      <BorderLine bgColor="#000000" width="3%" location="center" />
      <div class="fpc__container">
        <ProductCard
          source="pexels-mikotoraw-3737392.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
          :isSale="true"
        />

        <ProductCard
          source="pexels-philip-boakye-910143.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
        />
        <ProductCard
          source="pexels-olenka-sergienko-3686769.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
        />
        <ProductCard
          source="pexels-elle-hughes-1549200.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
        />
        <ProductCard
          source="pexels-mídia-1454184.jpg"
          title="Eiusmod mauris torquen"
          :price="89.0"
        />
      </div>
    </div>
    <!-- Featured Product -->

    <!-- Promo Banner  -->
    <div class="promo__banner__container">
      <BannerPromoCard
        title="Summer Collection"
        category="Best Collection 2016"
        source="pexels-anfisa-eremina-2543042.jpg"
        width="100%"
        height="468px"
      />

      <BannerPromoCard
        title="Dream Commerce"
        category="Sale up to 50% off"
        source="pexels-min-an-1163194.jpg"
        width="100%"
        height="930px"
      />

      <BannerPromoCard
        title="Summer Collection"
        category="New Trending 2016"
        source="pexels-philip-boakye-1813947.jpg"
        width="100%"
        height="935px"
        marginTop="-462px"
      />

      <BannerPromoCard
        title="Summer Collection"
        category="Best Collection 2016"
        source="pexels-godisable-jacob-965324.jpg"
        width="100%"
        height="473px"
      />
    </div>
    <!-- Promo Banner  -->

    <!-- Countdown Product -->
    <div class="countdown__product__container">
      <div class="countdown__product__title">
        <h4>Most Wanted</h4>
        <BorderLine bgColor="#515368" width="3%" location="center" />
      </div>

      <div class="countdown__timer__container">
        <CountdownTimer />
      </div>

      <div class="most__wanted__products">
        <ProductCard
          source="woman-in-white-long-sleeved-dress-1030895.jpg"
          width="100%"
          height="622px"
        />

        <ProductCard
          source="pexels-min-an-977380.jpg"
          width="100%"
          height="622px"
        />

        <ProductCard
          source="pexels-godisable-jacob-2703181.jpg"
          width="100%"
          height="622px"
        />
      </div>
    </div>
    <!-- Countdown Product -->
  </div>
</template>

<script>
// @ is an alias to /src
import CategoriesCarouselCard from "@/components/CategoriesCarouselCard.vue";
import BorderLine from "@/components/BorderLine.vue";
import BannerPromoCard from "@/components/BannerPromoCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import CountdownTimer from "@/components/CountdownTimer.vue";

export default {
  name: "Home",
  components: {
    CategoriesCarouselCard,
    BorderLine,
    BannerPromoCard,
    ProductCard,
    CountdownTimer,
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

.countdown__product__container {
  height: 1170px;
  background-color: #343532;
  padding: 65px 70px 0;
}

.countdown__product__title h4 {
  color: #ffffff;
  text-align: center;
  font-family: "Oswald";
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.most__wanted__products {
  display: flex;
}

.most__wanted__products .fpc__image {
  height: 100%;
}

.most__wanted__products .fpc__image:nth-child(1) {
  padding-left: 0;
}

.most__wanted__products .fpc__image:nth-child(3) {
  padding-right: 0;
}
</style>
