<template>
  <div class="account__wrapper">
    <div class="account__hero">
      <div class="account__hero__title">My Account</div>
      <AppBorderLine
        class="account__hero__border-top"
        bgColor="#ffffff"
        width="10%"
        location="center"
      />
      <AppBorderLine
        class="account__hero__border-bot"
        bgColor="#ffffff"
        width="5%"
        location="center"
      />
      <Overlay class="account__hero__overlay" />
    </div>

    <div class="account__body">
      <AppForm class="account__body__form">
        <div class="personal__information">
          <div class="edit__your__details">
            <div class="details__title">Edit your details</div>
            <AppBorderLine bgColor="#000000" />
            <div class="details__group__column">
              <label for="">Name*</label>
              <AppInput class="account__input" placeholder="Name" />
            </div>
            <div class="details__group__column">
              <label for="">Phone Number*</label>
              <AppInput class="account__input" placeholder="Phone Number" />
            </div>
            <div class="details__group__column">
              <label for="">Email*</label>
              <AppInput class="account__input" placeholder="Email" />
            </div>
            <div class="details__group__column">
              <label for="">Date of Birth*</label>
              <AppInput class="account__input" placeholder="DD / MM / YYYY" />
            </div>
          </div>
          <div class="account__details">
            <div class="details__title account__details__title">
              Account details
            </div>
            <AppBorderLine bgColor="#000000" />
            <div class="details__group__column">
              <label for="">Email ID*</label>
              <AppInput class="account__input" placeholder="Email" />
            </div>
            <div class="details__group__column">
              <label for="">Password*</label>
              <AppInput class="account__input" placeholder="Email" />
            </div>
          </div>
        </div>

        <div class="billing__information">
          <div class="details__title">Edit your billing address</div>
          <AppBorderLine bgColor="#000000" />
          <div class="edit__billing">
            <div class="details__group__row">
              <div class="details__group__column edit__billing__input-half">
                <label for="">Name*</label>
                <AppInput class="account__input" placeholder="First Name*" />
              </div>
              <div class="details__group__column edit__billing__input-half">
                <label for="">Name*</label>
                <AppInput class="account__input" placeholder="Last Name*" />
              </div>
            </div>

            <div class="details__group__column">
              <label for="">Company Name*</label>
              <AppInput class="account__input" placeholder="Company Name*" />
            </div>
            <div class="details__group__row">
              <div class="details__group__column edit__billing__input-half">
                <label for="">Email*</label>
                <AppInput class="account__input" placeholder="Email ID*" />
              </div>
              <div class="details__group__column edit__billing__input-half">
                <label for="">Phone No*</label>
                <AppInput class="account__input" placeholder="Phone Number*" />
              </div>
            </div>

            <div class="details__group__column">
              <label for="">Country*</label>
              <AppInput class="account__input" placeholder="Country" />
            </div>
            <div class="details__group__column">
              <label for="">Address*</label>
              <AppTextarea
                :rows="4"
                class="account__input"
                placeholder="Address*"
              />
            </div>

            <div class="details__group__row">
              <div class="details__group__column edit__billing__input-half">
                <label for="">Post Code*</label>
                <AppInput
                  class="account__input"
                  placeholder="Post Code / ZIP*"
                />
              </div>
              <div class="details__group__column edit__billing__input-half">
                <label for="">Town / City*</label>
                <AppInput class="account__input" placeholder="Town / City*" />
              </div>
            </div>
          </div>

          <div class="account__actions">
            <div class="account__actions__cancel">
              <AppButton class="account__actions__btn">Cancel</AppButton>
            </div>
            <div class="account__actions__save">
              <AppButton class="account__actions__btn">Save</AppButton>
            </div>
          </div>
        </div>
      </AppForm>
    </div>
  </div>
</template>

<script>
import AppInput from "../components/AppInput.vue";
import AppButton from "../components/AppButton.vue";
import AppForm from "../components/AppForm.vue";
import AppTextarea from "../components/AppTextarea.vue";
import AppBorderLine from "../components/AppBorderLine.vue";
import Overlay from "../components/Overlay.vue";

import "../assets/scss/pages/_myaccount.scss";

export default {
  name: "MyAccount",
  components: {
    AppInput,
    AppButton,
    AppForm,
    AppTextarea,
    AppBorderLine,
    Overlay,
  },
};
</script>