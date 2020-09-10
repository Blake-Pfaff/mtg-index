<template>
  <div class="Header__filterIcon">
    <button @click="handleButtonClick">
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
    AppIcon,
  },
  methods: {
    // When the button is clicked, it will fire this function
    // The only thing this function does is tell the parent that an event has been emitted
    // This event name is called "showFlters"
    handleButtonClick() {
      this.$emit("show-filters");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_mixins.scss";
.Header__filterIcon {
  button {
    @include button;
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
