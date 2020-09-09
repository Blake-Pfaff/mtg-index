<template>
  <div class="AppHeader">
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.AppHeader {
  box-shadow: 0 4px 2px -2px gray;
}
</style>
