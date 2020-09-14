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
    <transition name="fade">
      <FilterMenu v-show="filterMenuSelected" v-on:fetch-cards="fetchCards" />
    </transition>
    <Cards :cards="cards" />
  </div>
</template>

<script>
import { API } from "@/services";
import { AppHeader, FilterMenu, Cards } from "@/components/layout";
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
    Cards,
  },
  methods: {
    async fetchCards(name) {
      const res = await API.getCards({ page: 1, name: name });
      console.log(res);
    },
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

<script>
import { API } from "@/services";

import { AppHeader, FilterMenu, Cards } from "@/components/layout";
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
    Cards,
  },
  methods: {
    async fetchCards(name) {
      const response = await API.getCards({ page: 1, name: name });
      this.cards = response.cards;
    },
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
    margin-top: 150px;
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  @media (max-width: $breakpoint-tablet) {
    .fixed-top-spacer {
      margin-top: 220px;
    }
  }
}
</style>
