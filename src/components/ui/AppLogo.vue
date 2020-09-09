<template>
  <div class="HeaderLogo">
    <img src="@/assets/images/logo.png" alt="logo" />
  </div>
</template>

<script>
export default {
  name: "AppLogo",
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables";
.HeaderLogo {
  img {
    max-width: 250px;
  }
}
</style>
