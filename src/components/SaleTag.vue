<template>
  <div class="fpc__sale-tag">Sale</div>
</template>

<script>
export default {
  props: {},
};
</script>

<!-- Some changes later for dynamic props -->
<style scoped>
.fpc__sale-tag {
  position: absolute;
  top: 12px;
  right: 25px;
  height: 28px;
  width: 58px;
  border: 2px solid #e95252;
  color: #e95252;
  font-family: "Oswald", serif;
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
