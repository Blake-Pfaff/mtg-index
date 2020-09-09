<template>
  <div class="Header__filterIcon">
    <button>
      <AppIcon icon="list" class="appIcon" />
      <span>Click to apply search Filters</span>
    </button>
  </div>
</template>

<script>
import { AppIcon } from "@/components/ui";

export default {
  name: "FilterIcon",
  components: {
    AppIcon
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.Header__filterIcon {
  button {
    background: transparent;
    transition: 0.3s;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    &:hover {
      background: map-get($colors, "light-gray");
      color: map-get($colors, "white");
    }
    &:focus {
      outline: 0;
    }

    .appIcon {
      padding-right: 20px;
    }
  }
  @media (max-width: $breakpoint-tablet) {
    button {
      margin: 20px;
    }
  }
}
</style>
