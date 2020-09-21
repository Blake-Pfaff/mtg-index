<template>
  <div class="CardView">
    <GridRow justifyContent="center">
      <GridColumn xs="auto" v-for="card in cards" :key="card.id">
        <div class="CardView__card">
          <h2>{{ card.name }}</h2>

          <!-- <div>{{ card.text }}</div> -->
          <img v-if="card.imageUrl" :src="card.imageUrl" :alt="card.name" />
          <img
            v-if="!card.imageUrl"
            src="https://via.placeholder.com/225"
            alt="Image Not Found"
          />
        </div>
      </GridColumn>
    </GridRow>
  </div>
</template>

<script>
import { GridRow, GridColumn } from "@/components/ui";

export default {
  name: "Cards",
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    GridRow,
    GridColumn,
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_mixins.scss";

.CardView {
  &__card {
    margin: 20px 0;
    transition: all 1s ease-out;
    position: relative;
    z-index: 2;
    h2 {
      font-family: $header-font-family;
      text-transform: capitalize;
      background-color: map-get($colors, "background");
      border-radius: 5px;
    }
    div {
      background-color: map-get($colors, "background");
      border-radius: 5px;
    }
    &:hover {
      transform: scale(1.4);
      z-index: 3;
    }
  }
  @media (max-width: $breakpoint-tablet) {
    &__card {
      &:hover {
        transform: scale(1);
      }
    }
  }
}
</style>
