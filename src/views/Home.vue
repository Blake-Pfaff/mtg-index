<template>
  <div class="Home">
    <div class="fixed-top-spacer"></div>
    <AppHeader>
      <GridContainer>
        <GridRow>
          <GridColumn xs="md-3">
            <RouterLink to="/" class="AppHeader__logo">
              <AppLogo />
            </RouterLink>
          </GridColumn>
          <GridColumn alignSelf="center" xs="md-9">
            <FilterIcon @show-filters="handleShowFilters" />
          </GridColumn>
        </GridRow>
      </GridContainer>
    </AppHeader>
    <FilterMenu
      @fetch-cards="fetchCards"
      v-show="this.filterMenuSelected"
      transition="bounce"
    />
  </div>
</template>

<script>
import { API } from "@/services";

import { AppHeader, FilterMenu } from "@/components/layout";
import {
  GridContainer,
  GridRow,
  GridColumn,
  AppLogo,
  FilterIcon,
} from "@/components/ui";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      cards: [],
      filterMenuSelected: false,
      transitionName: "fade",
    };
  },
  components: {
    GridContainer,
    GridRow,
    GridColumn,
    FilterIcon,
    AppHeader,
    AppLogo,
    FilterMenu,
  },
  methods: {
    async fetchCards() {
      this.cards = await API.getCards({ page: 1, name: this.name });

      console.log(this.cards.cards);
      console.log(this.name);
    },
    // So now this function gets called when @show-flters event is fired from the child.
    handleShowFilters() {
      if (this.filterMenuSelected === false) {
        this.filterMenuSelected = true;
      } else {
        this.filterMenuSelected = false;
      }
    },
  },

  created() {
    this.fetchCards();
  },
};
</script>

<style lang="scss">
@import "@/styles/app.scss";
.Home {
  position: relative;
  z-index: 100;
  .fixed-top-spacer {
    margin-top: 80px;
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
    }
  }
  @media (max-width: $breakpoint-tablet) {
    .fixed-top-spacer {
      margin-top: 150px;
    }
  }
}
</style>
