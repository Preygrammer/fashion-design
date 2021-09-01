<template>
  <div class="wrapper">
    <div class="single__product">
      <div class="sp__product">
        <div
          v-for="(image, index) in product.thumbs"
          :key="index"
          :class="'sp__image ' + activeImage(image.id)"
          @click="changeImage(image.id, image.imgSrc)"
        >
          <AppImage :imgSrc="image.imgSrc" />
        </div>
      </div>
      <div class="sp__main__image">
        <!-- <AppImage :imgSrc="currentSelectedImage" /> -->
        <inner-image-zoom
          :src="require(`../assets/img/${currentSelectedImage}`)"
          :zoomSrc="require(`../assets/img/${currentSelectedImage}`)"
        />
      </div>

      <div class="sp__product__details__container">
        <div class="sp__product__details__top">
          <!-- To be implemented | Breadcrumb Component -->
          <div class="sp__breadcrumb">
            <ul>
              <li>
                <a href="#">Home <span>></span></a>
              </li>
              <li>
                <a href="#">Shop All Products <span>></span></a>
              </li>
              <li>
                <a href="#">Women <span>></span></a>
              </li>
              <li>
                <a class="active" href="#">Bonded knit jumper</a>
              </li>
            </ul>
          </div>
          <AppBorderLine bgColor="#eaeaea" width="98%" location="center" />

          <div class="sp__arrows">
            <AppButton>
              <font-awesome-icon icon="arrow-left" />
            </AppButton>
            <AppButton>
              <font-awesome-icon icon="arrow-right" />
            </AppButton>
          </div>

          <div class="sp__product__title">
            {{ productDetails.productTitle }}
          </div>

          <div class="sp__product__reviews">
            <RatingStar :rating="productReview.total" :isColorWhite="true" />
            <AppLink :url="productReview.url">
              ({{
                productReview.total != 1
                  ? productReview.total + " reviews"
                  : productReview.total + " review"
              }})
            </AppLink>
          </div>

          <AppBorderLine bgColor="#eaeaea" width="98%" location="center" />

          <div class="sp__product__price">
            <span>£</span> {{ productDetails.productPrice }}.00
          </div>
        </div>

        <div class="sp__product__details__mid">
          <div class="sp__product__description">
            {{ productDetails.productDescription }}
          </div>

          <div class="sp__product__actions">
            <div class="product__actions__container">
              <div class="input__container">
                <input type="text" v-model="itemsCount" />
                <div class="input__buttons">
                  <AppButton
                    @click.native="
                      itemsCount = $functions.increment(itemsCount, 1)
                    "
                  >
                    +
                  </AppButton>
                  <AppButton
                    @click.native="
                      itemsCount = $functions.decrement(itemsCount, 1)
                    "
                  >
                    -
                  </AppButton>
                </div>
              </div>

              <div class="add__to__cart">
                <AppButton>
                  <font-awesome-icon icon="shopping-bag" /> Add to
                  cart</AppButton
                >
              </div>

              <div class="add__to__wishlist">
                <AppButton>
                  <font-awesome-icon icon="heart" />
                </AppButton>
              </div>

              <div class="add__to__compare">
                <AppButton>
                  <font-awesome-icon icon="chart-bar" />
                </AppButton>
              </div>
            </div>

            <AppBorderLine class="sp__last__border" bgColor="#767786" />
          </div>

          <div class="sp__product__meta">
            <div class="product__meta__sku">
              SKU : {{ productDetails.productSKU }}
            </div>
            <div class="product__meta__category">
              Category : {{ productDetails.productCategory }}
            </div>
            <div class="product__meta__tags">
              <div class="pm__tags__title">Tags :</div>
              <ul>
                <li
                  v-for="(tagItem, index) in productDetails.productTags"
                  :key="index"
                >
                  <AppLink :url="tagItem.link"
                    >{{ tagItem.tag
                    }}{{
                      index == productDetails.productTags.length - 1 ? "" : ","
                    }}</AppLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="sp__product__details__bottom">
          <div class="twitter">
            <AppButton>
              <AppImage imgSrc="twitter.svg" />
            </AppButton>
          </div>
          <div class="facebook">
            <AppButton>
              <AppImage imgSrc="facebook.svg" />
            </AppButton>
          </div>
          <div class="google-plus">
            <AppButton>
              <AppImage imgSrc="google-plus-logo.svg" />
            </AppButton>
          </div>
        </div>
      </div>
    </div>
    <!-- Static only first coz I'm confused on the flow or how it works -->
    <div class="single__product__tabs">
      <Tabs class="">
        <Tab title="Description">
          <div class="tab__description">
            <div class="td__image__first">
              <AppImage
                class="td__image"
                imgSrc="pexels-godisable-jacob-2703181.jpg"
              />
            </div>

            <div class="td__image__details">
              <div class="tdi__detail__left">
                <div class="td__image__details__title">
                  The quality is in the detail
                </div>
                <div class="td__image__details__category">Lookbook 2016</div>

                <AppBorderLine bgColor="#ffffff" width="9%" location="center" />

                <div class="td__image__details__description">
                  This jumper is made from a soft cotton-mix with an all-over
                  sheer material bonded<span
                    class="td__image__details__new-line"
                    >onto the knit, creating a matte finish. A straight fit, it
                    has a matte silver back zip, a round neckline and
                    ribbed</span
                  >
                  finishes.91% Cotton, 9% Polyester, Length: 54cm (Size S),
                  Machine washable
                </div>

                <AppButton
                  >View Details
                  <font-awesome-icon icon="arrow-right" />
                </AppButton>
              </div>

              <div class="tdi__right">
                <AppImage
                  class="td__image"
                  imgSrc="pexels-mika-borgia-1317712.jpg"
                />
              </div>

              <div class="tdi__left">
                <AppImage
                  class="td__image"
                  imgSrc="pexels-photo-3254131.jpeg"
                />
              </div>

              <div class="tdi__detail__right">
                <div class="td__image__details__title">
                  The quality is in the detail
                </div>
                <div class="td__image__details__category">Lookbook 2016</div>

                <AppBorderLine bgColor="#ffffff" width="9%" location="center" />

                <div class="td__image__details__description">
                  This jumper is made from a soft cotton-mix with an all-over
                  sheer material bonded<span
                    class="td__image__details__new-line"
                    >onto the knit, creating a matte finish. A straight fit, it
                    has a matte silver back zip, a round neckline and
                    ribbed</span
                  >
                  finishes.91% Cotton, 9% Polyester, Length: 54cm (Size S),
                  Machine washable
                </div>

                <AppButton
                  >View Details
                  <font-awesome-icon icon="arrow-right" />
                </AppButton>
              </div>
            </div>
          </div>
        </Tab>
        <Tab title="Additional Information">Additional Information</Tab>
        <Tab :title="`Reviews (${productReview.total})`"
          >Reviews ({{ productReview.total }})</Tab
        >
        <AppBorderLine
          class="sp-tabs-border"
          bgColor="#e8e8e8"
          width="100%"
          location="center"
        />
      </Tabs>
    </div>

    <!-- Related Products -->
    <div class="related__products">
      <h2>Related Products</h2>
      <AppBorderLine bgColor="#000000" width="3%" location="center" />
      <div class="related__products__list">
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
    <!-- Related Products -->
  </div>
</template>

<script>
import "vue-inner-image-zoom/lib/vue-inner-image-zoom.css";
import InnerImageZoom from "vue-inner-image-zoom";
//inner image zoom
import ProductCard from "../components/ProductCard.vue";
import AppButton from "../components/AppButton.vue";
import AppImage from "../components/AppImage.vue";
import AppLink from "../components/AppLink.vue";
import AppBorderLine from "../components/AppBorderLine.vue";
import RatingStar from "../components/RatingStar.vue";
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";
import "../assets/scss/pages/_singleproduct.scss";

export default {
  name: "SingleProduct",
  components: {
    InnerImageZoom,
    ProductCard,
    AppBorderLine,
    RatingStar,
    AppButton,
    AppImage,
    AppLink,
    Tabs,
    Tab,
  },
  data() {
    return {
      //product
      product: {
        thumbs: [
          {
            id: 1,
            imgSrc: "pexels-maryia-plashchynskaya-3393793.jpg",
          },
          {
            id: 2,
            imgSrc: "pexels-hudson-marques-3378973.jpg",
          },
        ],
        productDetails: [
          {
            productId: 1,
            productTitle: "Banded Unit Ramper",
            productSKU: 671272,
            productCategory: "Sweaters",
            productPrice: 89,
            productTags: [
              {
                tag: "Sweaters",
                link: "#",
              },
              {
                tag: "Turtleneck",
                link: "#",
              },
              {
                tag: "Wool",
                link: "#",
              },
            ],
            productDescription:
              "Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit. neque nulla, convallis non commodo et, euismod nonsese. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
            reviews: [
              {
                total: 4,
                url: "#",
              },
            ],
            breadCrumb: [
              {
                item: "Home",
                url: "#",
              },
              {
                item: "Shop All Products",
                url: "#",
              },
              {
                item: "Women",
                url: "#",
              },
              {
                item: "Banded knit jumper",
                url: "#",
              },
            ],
          },
        ],
      },
      //current selected image thumbnail
      currentSelectedImage: "",
      activeThumbImage: "",
      productReviewTotal: 0,
      itemsCount: 1, //increment decrement value
    };
  },

  created() {
    const [id, image] = [
      this.product.thumbs[0].id,
      this.product.thumbs[0].imgSrc,
    ];
    this.changeImage(id, image);

    this.productDetails = this.product.productDetails[0];

    //this.productReviewTotal = this.productDetails.reviews[0].total;
    this.productReview = this.productDetails.reviews[0];
  },

  methods: {
    changeImage(id, image) {
      this.activeThumbImage = id == this.activeThumbImage ? "" : id;
      this.currentSelectedImage = image;
    },

    activeImage(id) {
      let status = "";
      status = this.activeThumbImage == id ? "active" : "";
      return status;
    },
  },
};
</script>