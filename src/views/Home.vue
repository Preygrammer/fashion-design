<template>
  <div class="wrapper">
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
          <BorderLine bgColor="#ffffff" width="15%" location="center" />
        </div>
      </div>
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
      <div
        v-for="banner in bannerItems"
        :key="banner.id"
        class="banner__promo__card"
      >
        <div class="banner__promo__details">
          <h2>{{ banner.title }}</h2>
          <BorderLine bgColor="#ffffff" width="30%" location="left" />
          <div class="banner__promo__category">
            {{ banner.category }}
          </div>
          <div class="banner__promo__btn">
            <AppButton text="Shop Now" icon="arrow-right" />
          </div>
        </div>
        <AppImage
          :src="require(`../assets/img/${banner.source}`)"
          :alt="banner.source"
        />
      </div>
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

      <!-- <div class="most__wanted__products"> -->
      <transition-group class="most__wanted__products" tag="div">
        <ProductCard
          v-for="mwitem in mostWantedItems"
          :key="mwitem.id"
          :source="mwitem.source"
          :title="mwitem.title"
          :price="mwitem.price"
          :isSale="mwitem.isSale"
          width="568px"
          height="622px"
        />
        <!-- </div> -->
      </transition-group>

      <div class="mwp__arrows">
        <div @click="mwPrevious" class="arrow__left">
          <img src="../assets/img/arrow.png" />
        </div>
        <div @click="mwNext" class="arrow__right">
          <img src="../assets/img/arrow.png" />
        </div>
      </div>
      <AppSliderBullet
        :bullets="mostWantedItems.length"
        @moveSlide="handleFunctionCall($event, $event)"
      />
    </div>

    <!-- Countdown Product -->

    <!-- Tab Product -->
    <div class="tab__product__container">
      <div class="tab__product__content">
        <div class="tab__product__title">
          Best Selling
          <BorderLine width="10%" bgColor="#000000" location="center" />
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
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="shopping-bag"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="heart"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="search-plus"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="chart-bar"
                  />
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
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="shopping-bag"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="heart"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="search-plus"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="chart-bar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab__product__more">
          <AppButton
            text="View More"
            width="200px"
            border="2px solid #000000"
            textColor="#000000"
            icon="arrow-right"
          />
        </div>
      </div>

      <div class="tab__product__content">
        <div class="tab__product__title">
          Top Rate
          <BorderLine width="10%" bgColor="#000000" location="center" />
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
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="shopping-bag"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="heart"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="search-plus"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="chart-bar"
                  />
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
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="shopping-bag"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="heart"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="search-plus"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="chart-bar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab__product__more">
          <AppButton
            text="View More"
            width="200px"
            border="2px solid #000000"
            textColor="#000000"
            icon="arrow-right"
          />
        </div>
      </div>

      <div class="tab__product__content">
        <div class="tab__product__title">
          Special
          <BorderLine width="10%" bgColor="#000000" location="center" />
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
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="shopping-bag"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="heart"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="search-plus"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="chart-bar"
                  />
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
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="shopping-bag"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="heart"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="search-plus"
                  />
                </div>
                <div class="tp__actions__btn">
                  <AppButton
                    bgColor="#f1f1f1"
                    width="50px"
                    height="50px"
                    icon="chart-bar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab__product__more">
          <AppButton
            text="View More"
            width="200px"
            border="2px solid #000000"
            textColor="#000000"
            icon="arrow-right"
          />
        </div>
      </div>
    </div>
    <!-- Tab Product -->

    <!-- From Our Blog -->
    <div class="fob__container">
      <div class="fob__title">
        From Our Blog
        <BorderLine bgColor="#515368" width="3%" location="center" />
      </div>
      <TransitionGroup class="fob__slide__container" tag="div">
        <Slide
          v-for="item in blogItems"
          :key="item.id"
          :imgSrc="item.imgSrc"
          :postTitle="item.postTitle"
          :postUser="item.postUser"
          :postCommentsTotal="item.postCommentsTotal"
          :postCategory="item.postCategory"
        />
      </TransitionGroup>

      <div class="carousel-controls">
        <button class="carousel-controls__button" @click="previous">
          &#60;
        </button>
        <button class="carousel-controls__button" @click="next">&#62;</button>
      </div>
    </div>
    <!-- From Our Blog -->

    <!-- Newsletter Sign up -->
    <div class="newsletter__container">
      <Overlay>
        <div class="newsletter__details">
          <img src="../assets/img/envelope-open.svg" />
          <h2 style="color: white">Sign up for newsletter</h2>
          <BorderLine bgColor="#ffffff" width="3%" location="center" />
          <p>To Receive Updates</p>
        </div>
        <div class="newsletter__form">
          <AppInput placeholder="Enter your email address here..." />
          <AppButton
            text="Subscribe"
            icon="arrow-right"
            bgColor="#000000"
            textColor="#ffffff"
            border="2px solid #000000"
          />
        </div>
      </Overlay>
    </div>
    <!-- Newsletter Sign up -->
  </div>
</template>

<script>
// @ is an alias to /src

import AppSliderBullet from "@/components/AppSliderBullet.vue";
import ProductCard from "@/components/ProductCard.vue";
import BorderLine from "@/components/BorderLine.vue";
import CountdownTimer from "@/components/CountdownTimer.vue";
import RatingStar from "@/components/RatingStar.vue";
import AppButton from "@/components/AppButton.vue";
import AppImage from "@/components/AppImage.vue";
import Slide from "@/components/Slide.vue";
import AppInput from "@/components/AppInput.vue";
import Overlay from "@/components/Overlay.vue";
import "../assets/scss/home.scss";

export default {
  name: "Home",
  components: {
    AppSliderBullet,
    CountdownTimer,
    ProductCard,
    BorderLine,
    RatingStar,
    Overlay,
    AppButton,
    AppImage,
    Slide,
    AppInput,
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
          imgSrc: "pexels-mídia-1454184.jpg",
          postTitle: "Dramatically scale centric",
          postUser: "John Doe",
          postCommentsTotal: 3,
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
    mwNext() {
      const first = this.mostWantedItems.shift();
      this.mostWantedItems = this.mostWantedItems.concat(first);
    },
    mwPrevious() {
      const last = this.mostWantedItems.pop();
      this.mostWantedItems = [last].concat(this.mostWantedItems);
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

