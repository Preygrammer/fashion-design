<template>
  <div class="countdown__timer__content">
    <div class="countdown__timer__details">
      <div class="ct__number">{{ cdDays }}</div>
      <div class="ct__text">Days</div>
    </div>
    <div class="countdown__timer__details">
      <div class="ct__number">{{ cdHours }}</div>
      <div class="ct__text">Hrs</div>
    </div>
    <div class="countdown__timer__details">
      <div class="ct__number">{{ cdMinutes }}</div>
      <div class="ct__text">Mins</div>
    </div>
    <div class="countdown__timer__details">
      <div class="ct__number">{{ cdSeconds }}</div>
      <div class="ct__text">Secs</div>
    </div>
  </div>
</template>

<script>
import "../assets/scss/components/_thecountdowntimer.scss";
export default {
  name: "TheCountdownTimer",

  data() {
    return {
      cdDays: 0,
      cdHours: 0,
      cdMinutes: 0,
      cdSeconds: 0,
      days: "",
    };
  },
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  created: function () {
    var countdownDate = new Date(this.date).getTime();

    var timeInterval = setInterval(() => {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countdownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.cdDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.cdHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.cdMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.cdSeconds = Math.floor((distance % (1000 * 60)) / 1000);
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(timeInterval);
        //do something baby
      }
    }, 1000);
  },
};
</script>
