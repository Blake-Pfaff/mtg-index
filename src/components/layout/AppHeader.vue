<template>
  <div class="AppHeader">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.AppHeader {
  box-shadow: 0 4px 2px -2px gray;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background: map-get($colors, "background");
}
</style>
