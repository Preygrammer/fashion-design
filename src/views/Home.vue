<template>
  <div class="home-wrapper">
    <!-- categories__carousel__container -->
    <div class="categories__carousel__container">
      <div
        v-for="carousel in categoriesCarouselItems"
        :key="carousel.id"
        class="categories__carousel__cards"
      >
        <div
          :style="categoriesCssStyle(carousel.imgSrc)"
          class="categories__image"
        ></div>

        <div class="categories__text">
          <div class="categories__title">{{ carousel.title }}</div>
          <div class="categories__description">{{ carousel.description }}</div>
          <div class="categories__border__slash"></div>
          <AppBorderLine bgColor="#ffffff" width="15%" location="center" />
        </div>
      </div>
    </div>
    <!-- categories__carousel__container -->

    <!-- Featured Product -->
    <div class="featured__products">
      <h2>Featured Products</h2>
      <AppBorderLine bgColor="#000000" width="3%" location="center" />
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
      <div
        v-for="banner in bannerItems"
        :key="banner.id"
        class="banner__promo__card"
      >
        <div class="banner__promo__details">
          <h2>{{ banner.title }}</h2>
          <AppBorderLine bgColor="#ffffff" width="30%" location="left" />
          <div class="banner__promo__category">
            {{ banner.category }}
          </div>
          <div class="banner__promo__btn">
            <AppButton icon="arrow-right">Shop Now</AppButton>
          </div>
        </div>
        <AppImage :imgSrc="banner.source" :alt="banner.source" />
      </div>
    </div>
    <!-- Promo Banner  -->

    <!-- Countdown Product -->
    <div class="countdown__product__container">
      <div class="countdown__product__title">
        <h4>Most Wanted</h4>
        <AppBorderLine bgColor="#515368" width="3%" location="center" />
      </div>

      <div class="countdown__timer__container">
        <TheCountdownTimer date="12/25/2022" />
      </div>

      <VueperSlides
        class="no-shadow"
        ref="mostWantedSlides"
        :visible-slides="3"
        :gap="2"
        :dragging-distance="270"
        slide-multiple
        transition-speed="250"
        @slide="
          $refs.mostWantedSlidesDetails &&
            $refs.mostWantedSlidesDetails.goToSlide($event.currentSlide.index, {
              emit: false,
            })
        "
      >
        <VueperSlide
          v-for="mwitem in mostWantedItems"
          :key="mwitem.id"
          :image="dynamicImageSource(mwitem.source)"
        />
      </VueperSlides>

      <!-- <VueperSlides
        class="no-shadow"
        ref="mostWantedSlidesDetails"
        :visible-slides="3"
        :gap="2"
        :dragging-distance="270"
        slide-multiple
        transition-speed="250"
        @slide="
          $refs.mostWantedSlides &&
            $refs.mostWantedSlides.goToSlide($event.currentSlide.index, {
              emit: false,
            })
        "
      >
        <VueperSlide v-for="mwitem in mostWantedItems" :key="mwitem.id">
          <template class="fpc__image" #content>
            <div class="fpc__details">
              <div class="fpc__details_title">
                {{ mwitem.title }}
              </div>
              <div v-if="mwitem.price" class="fpc__details_price">
                <span>£</span>{{ mwitem.price }}.00
              </div>
            </div>
          </template>
        </VueperSlide>
      </VueperSlides> -->

      <div class="mwp__arrows">
        <div @click="$refs.mostWantedSlides.previous()" class="arrow__left">
          <img src="../assets/img/arrow.png" />
        </div>
        <div @click="$refs.mostWantedSlides.next()" class="arrow__right">
          <img src="../assets/img/arrow.png" />
        </div>
      </div>
    </div>

    <!-- Countdown Product -->

    <!-- Tab Product -->
    <div class="tab__product__container">
      <div class="tab__product__content">
        <div class="tab__product__title">
          Best Selling
          <AppBorderLine width="10%" bgColor="#000000" location="center" />
        </div>

        <div class="tab__product__body">
          <div class="d-flex">
            <ProductCard
              source="pexels-wendy-wei-2723118.jpg"
              title="Eiusmod mauris torquen"
              price="89"
              height="240px"
              width="210px"
            />

            <div class="tab__product__actions">
              <RatingStar :rating="5" />

              <div class="tp__actions__list">
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="shopping-bag" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="heart" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="search-plus" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="chart-bar" />
                  </AppButton>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex position-relative">
            <ProductCard
              source="pexels-photo-3913428.jpeg"
              title="Eiusmod mauris torquen"
              price="89"
              height="240px"
              width="210px"
            />

            <div class="tab__product__actions">
              <RatingStar :rating="4" />

              <div class="tp__actions__list">
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="shopping-bag" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="heart" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="search-plus" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="chart-bar" />
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab__product__more">
          <AppButton
            width="200px"
            border="2px solid #000000"
            textColor="#000000"
            >View More <font-awesome-icon icon="arrow-right"
          /></AppButton>
        </div>
      </div>

      <div class="tab__product__content">
        <div class="tab__product__title">
          Top Rate
          <AppBorderLine width="10%" bgColor="#000000" location="center" />
        </div>

        <div class="tab__product__body">
          <div class="d-flex">
            <ProductCard
              source="pexels-breston-kenya-3299174.jpg"
              title="Eiusmod mauris torquen"
              price="89"
              height="240px"
              width="210px"
            />

            <div class="tab__product__actions">
              <RatingStar :rating="4" />

              <div class="tp__actions__list">
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="shopping-bag" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="heart" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="search-plus" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="chart-bar" />
                  </AppButton>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex position-relative">
            <ProductCard
              source="pexels-pixabay-160599.jpg"
              title="Eiusmod mauris torquen"
              price="89"
              height="240px"
              width="210px"
            />

            <div class="tab__product__actions">
              <RatingStar :rating="3" />

              <div class="tp__actions__list">
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="shopping-bag" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="heart" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="search-plus" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="chart-bar" />
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab__product__more">
          <AppButton
            width="200px"
            border="2px solid #000000"
            textColor="#000000"
            >View More <font-awesome-icon icon="arrow-right"
          /></AppButton>
        </div>
      </div>

      <div class="tab__product__content">
        <div class="tab__product__title">
          Special
          <AppBorderLine width="10%" bgColor="#000000" location="center" />
        </div>

        <div class="tab__product__body">
          <div class="d-flex">
            <ProductCard
              source="pexels-andrew-dick-1139871.jpg"
              title="Eiusmod mauris torquen"
              price="89"
              height="240px"
              width="210px"
            />

            <div class="tab__product__actions">
              <RatingStar :rating="3" />

              <div class="tp__actions__list">
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="shopping-bag" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="heart" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="search-plus" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="chart-bar" />
                  </AppButton>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex position-relative">
            <ProductCard
              source="pexels-wendy-wei-2723118.jpg"
              title="Eiusmod mauris torquen"
              price="89"
              height="240px"
              width="210px"
            />

            <div class="tab__product__actions">
              <RatingStar :rating="4" />

              <div class="tp__actions__list">
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="shopping-bag" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="heart" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="search-plus" />
                  </AppButton>
                </div>
                <div class="tp__actions__btn">
                  <AppButton bgColor="#f1f1f1" width="50px" height="50px">
                    <font-awesome-icon icon="chart-bar" />
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab__product__more">
          <AppButton
            width="200px"
            border="2px solid #000000"
            textColor="#000000"
            >View More <font-awesome-icon icon="arrow-right"
          /></AppButton>
        </div>
      </div>
    </div>
    <!-- Tab Product -->

    <!-- From Our Blog -->
    <div class="fob__container">
      <div class="fob__title">
        From Our Blog
        <AppBorderLine bgColor="#515368" width="3%" location="center" />
      </div>
      <!-- <TransitionGroup class="fob__slide__container" tag="div">
        <Slider
          v-for="item in blogItems"
          :key="item.id"
          :imgSrc="item.imgSrc"
          :postTitle="item.postTitle"
          :postUser="item.postUser"
          :postCommentsTotal="item.postCommentsTotal"
          :postCategory="item.postCategory"
        />
      </TransitionGroup> -->

      <VueperSlides
        ref="slideImage"
        @slide="
          $refs.slideDetails &&
            $refs.slideDetails.goToSlide($event.currentSlide.index, {
              emit: false,
            })
        "
        class="no-shadow"
        slide-multiple
        :visible-slides="3"
        :gap="2"
        :dragging-distance="270"
        :bullets="false"
        transition-speed="250"
      >
        <VueperSlide
          v-for="item in blogItems"
          :key="item.id"
          :image="dynamicImageSource(item.imgSrc)"
        />
      </VueperSlides>

      <VueperSlides
        ref="slideDetails"
        @slide="
          $refs.slideImage &&
            $refs.slideImage.goToSlide($event.currentSlide.index, {
              emit: false,
            })
        "
        class="no-shadow slide-details-parent"
        slide-multiple
        :visible-slides="3"
        :gap="2"
        :dragging-distance="50"
        transition-speed="250"
      >
        <VueperSlide v-for="item in blogItems" :key="item.id">
          <template class="fob__slide" #content>
            <div class="fob__slide__details">
              <div class="fob__sd__category text-center">
                {{ item.postCategory }}
                <AppBorderLine
                  width="10%"
                  bgColor="#000000"
                  location="center"
                />
              </div>
              <div class="fob__sd__details">
                <div class="fob__post__title text-center">
                  {{ item.postTitle }}
                </div>
                <div class="fob__post__details">
                  <div class="fob__post__user">
                    By: <span>{{ item.postUser }} </span>
                  </div>
                  <div class="fob__post__comments">
                    | &nbsp; {{ item.postCommentsTotal }} comments
                  </div>
                </div>
              </div>
            </div>
          </template>
        </VueperSlide>
      </VueperSlides>
    </div>
    <!-- From Our Blog -->

    <!-- Newsletter Sign up -->
    <div class="newsletter__container">
      <AppOverlay>
        <div class="newsletter__details">
          <img src="../assets/img/envelope-open.svg" />
          <h2 style="color: white">Sign up for newsletter</h2>
          <AppBorderLine bgColor="#ffffff" width="3%" location="center" />
          <p>To Receive Updates</p>
        </div>
        <div class="newsletter__form">
          <AppInput placeholder="Enter your email address here..." />
          <AppButton
            bgColor="#000000"
            textColor="#ffffff"
            border="2px solid #000000"
          >
            Subscribe <font-awesome-icon icon="arrow-right"
          /></AppButton>
        </div>
      </AppOverlay>
    </div>
    <!-- Newsletter Sign up -->
  </div>
</template>

<script>
// @ is an alias to /src

// import AppSliderBullet from "@/components/AppSliderBullet.vue";
import AppBorderLine from "@/components/AppBorderLine.vue";
import AppButton from "@/components/AppButton.vue";
import AppImage from "@/components/AppImage.vue";
import AppInput from "@/components/AppInput.vue";
// import Slider from "@/components/Slider.vue";
import TheCountdownTimer from "../components/TheCountdownTimer.vue";
import ProductCard from "../components/ProductCard.vue";
import RatingStar from "@/components/RatingStar.vue";
import AppOverlay from "@/components/AppOverlay.vue";
import "../assets/scss/pages/_home.scss";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Home",
  components: {
    AppInput,
    AppBorderLine,
    AppButton,
    AppImage,
    // AppSliderBullet,
    // Slider,
    TheCountdownTimer,
    ProductCard,
    RatingStar,
    AppOverlay,
    VueperSlides,
    VueperSlide,
  },
  props: {
    height: String,
    width: String,
    marginTop: String,
  },
  data() {
    return {
      categoriesCarouselItems: [
        {
          id: 1,
          imgSrc: "pexels-maryia-plashchynskaya-3393793.jpg",
          title: "Features",
          description: "Recaptiualize Quality",
        },
        {
          id: 2,
          imgSrc: "pexels-hudson-marques-3378973.jpg",
          title: "New Arrivals",
          description: "Recaptiualize Quality",
        },
        {
          id: 3,
          imgSrc: "pexels-mika-borgia-1317712.jpg",
          title: "Lookbook",
          description: "Recaptiualize Quality",
        },
        {
          id: 4,
          imgSrc: "pexels-photo-3254131.jpeg",
          title: "Features",
          description: "Recaptiualize Quality",
        },
      ],

      featureProductItems: [
        {
          id: 1,
          imgSrc: "pexels-mikotoraw-3737392.jpg",
          title: "Eiusmod mauris torquen",
          price: 89,
          isSale: true,
        },
        {
          id: 2,
          imgSrc: "pexels-philip-boakye-910143.jpg",
          title: "Eiusmod mauris torquen",
          price: 89,
          isSale: false,
        },
        {
          id: 3,
          imgSrc: "pexels-olenka-sergienko-3686769.jpg",
          title: "Eiusmod mauris torquen",
          price: 89,
          isSale: false,
        },
        {
          id: 4,
          imgSrc: "pexels-elle-hughes-1549200.jpg",
          title: "Eiusmod mauris torquen",
          price: 89,
          isSale: false,
        },
        {
          id: 5,
          imgSrc: "pexels-mídia-1454184.jpg",
          title: "Eiusmod mauris torquen",
          price: 89,
          isSale: false,
        },
      ],

      blogItems: [
        {
          id: 1,
          imgSrc: "pexels-philip-boakye-910143.jpg",
          postTitle: "Dramatically scale centric",
          postUser: "John Doe",
          postCommentsTotal: 2,
          postCategory: "Fashion",
        },
        {
          id: 2,
          imgSrc: "pexels-mika-borgia-1317712.jpg",
          postTitle: "Dramatically scale centric",
          postUser: "John Doe",
          postCommentsTotal: 2,
          postCategory: "Fashion",
        },
        {
          id: 3,
          imgSrc: "pexels-mídia-1454184.jpg",
          postTitle: "Dramatically scale centric",
          postUser: "John Doe",
          postCommentsTotal: 3,
          postCategory: "Fashion",
        },
        {
          id: 4,
          imgSrc: "pexels-mika-borgia-1317712.jpg",
          postTitle: "Dramatically scale centric",
          postUser: "John Doe",
          postCommentsTotal: 3,
          postCategory: "Fashion",
        },
        {
          id: 5,
          imgSrc: "pexels-philip-boakye-910143.jpg",
          postTitle: "Dramatically scale centric",
          postUser: "John Doe",
          postCommentsTotal: 2,
          postCategory: "Fashion",
        },
      ],

      mostWantedItems: [
        {
          id: 1,
          source: "woman-in-white-long-sleeved-dress-1030895.jpg",
          title: "Demin Report",
          price: 89,
          isSale: false,
        },
        {
          id: 2,
          source: "pexels-min-an-977380.jpg",
          title: "Demin Report",
          price: 89,
          isSale: true,
        },
        {
          id: 3,
          source: "pexels-godisable-jacob-2703181.jpg",
          title: "Report Demin",
          price: 89,
          isSale: false,
        },
        {
          id: 4,
          source: "pexels-anfisa-eremina-2543042.jpg",
          title: "Report Demin",
          price: 89,
          isSale: false,
        },
        {
          id: 5,
          source: "pexels-philip-boakye-1813947.jpg",
          title: "Report Demen",
          price: 89,
          isSale: false,
        },
        {
          id: 6,
          source: "pexels-godisable-jacob-2703181.jpg",
          title: "Report Demin",
          price: 89,
          isSale: false,
        },
      ],

      bannerItems: [
        {
          id: 1,
          category: "Best Collection 2016",
          source: "pexels-anfisa-eremina-2543042.jpg",
          title: "Summer Collection",
        },
        {
          id: 2,
          category: "Sale up to 50% off",
          source: "pexels-min-an-1163194.jpg",
          title: "Dream Commerce",
        },
        {
          id: 3,
          category: "New Trending 2016",
          source: "pexels-philip-boakye-1813947.jpg",
          title: "Men's wear",
        },
        {
          id: 4,
          category: "Best Collection 2016",
          source: "pexels-godisable-jacob-965324.jpg",
          title: "Summer Collection",
        },
      ],
      //Slide Content
      sliderContentData: [
        {
          title: "",
          price: 0,
        },
      ],
    };
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
        marginTop: this.marginTop,
      };
    },
  },
  methods: {
    next() {
      const first = this.blogItems.shift();
      this.blogItems = this.blogItems.concat(first);
    },
    previous() {
      const last = this.blogItems.pop();
      this.blogItems = [last].concat(this.blogItems);
    },
    //Concatenate Dynamic Image Source
    dynamicImageSource(source) {
      return require(`../assets/img/${source}`);
    },
    //categories image background image dynamic source
    categoriesCssStyle(imageSource) {
      return {
        backgroundImage: "url(" + require(`../assets/img/${imageSource}`) + ")",
      };
    },
    handleFunctionCall(functionName, event) {
      this[functionName](event);
    },
  },
};
</script>

