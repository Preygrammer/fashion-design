<template>
  <div class="countdown__timer__content">
    <div class="countdown__timer__details">
      <div class="ct__number">650</div>
      <div class="ct__text">Days</div>
    </div>
    <div class="countdown__timer__details">
      <div class="ct__number">21</div>
      <div class="ct__text">Hrs</div>
    </div>
    <div class="countdown__timer__details">
      <div class="ct__number">50</div>
      <div class="ct__text">Mins</div>
    </div>
    <div class="countdown__timer__details">
      <div class="ct__number">30</div>
      <div class="ct__text">Secs</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountdownTimer",
};
</script>

<style scoped>
.countdown__timer__content {
  margin-top: 80px;
  margin-bottom: 84px;
  display: flex;
  justify-content: center;
  gap: 100px;
}

.countdown__timer__details {
  display: flex;
  flex-wrap: nowrap;
  gap: 2px;
}

.ct__number {
  font-family: "Oswald";
  font-weight: normal;
  font-size: 50px;
  color: #ffffff;
}

.ct__text {
  font-family: "Oswald";
  font-weight: normal;
  font-size: 20px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 4px;
}
</style>