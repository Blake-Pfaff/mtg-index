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
      <FilterMenu
        v-show="filterMenuSelected"
        v-on:fetch-cards="fetchCards"
        v-on:close-filters="closeFilters"
      />
    </transition>
    <GridContainer>
      <GridRow justifyContent="center">
        <div class="LoadingContainer" v-show="loading">
          <i class="fa fa-cog fa-spin fa-5x fa-fw"></i>
          <span class="sr-only">Loading...</span>
          <h2 class="loading">Loading...</h2>
        </div>
      </GridRow>
    </GridContainer>
    <Cards v-show="!loading" :cards="cards" />
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
      loading: true,
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
      this.loading = true;
      try {
        const res = await API.getCards({ page: 1, name: name });
        this.cards = res.cards;
      } catch (error) {
        alert(error.message);
      } finally {
        this.loading = false;
      }
    },
    handleShowFilters() {
      if (this.filterMenuSelected === false) {
        this.filterMenuSelected = true;
      } else {
        this.filterMenuSelected = false;
      }
    },
    closeFilters() {
      this.filterMenuSelected = false;
    },
  },
  created() {
    this.fetchCards();
  },
};
</script>

<style lang="scss">
@import "@/styles/app.scss";
@import "@/styles/_mixins.scss";

.Home {
  position: relative;
  z-index: 100;
  .LoadingContainer {
    .loading {
      @include flash;
    }
  }
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

  @include fade;
  @media (max-width: $breakpoint-tablet) {
    .fixed-top-spacer {
      margin-top: 220px;
    }
  }
}
</style>
