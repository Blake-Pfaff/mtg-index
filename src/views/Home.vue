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
    <GridContainer>
      <GridRow justifyContent="center">
        <h3 v-show="showNoCardsMessage">Sorry no cards found</h3>
      </GridRow>
    </GridContainer>
    <paginate
      v-show="showCards"
      v-model="pagination.currentPage"
      :page-count="pagination.lastPage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="`page-class`"
      :page-link-class="`page-link-class`"
      :prev-class="`prev-class`"
      :prev-link-class="`prev-link-class`"
      :next-class="`next-class`"
      :next-link-class="`next-link-class`"
      :break-view-class="`break-view-class`"
      :break-view-link-class="`break-view-link-class`"
      :active-class="`active-class`"
      :disabled-class="`disabled-class`"
    >
    </paginate>
    <Cards v-show="showCards" :cards="cards" />

    <paginate
      v-show="showCards"
      v-model="pagination.currentPage"
      :page-count="pagination.lastPage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="`page-class`"
      :page-link-class="`page-link-class`"
      :prev-class="`prev-class`"
      :prev-link-class="`prev-link-class`"
      :next-class="`next-class`"
      :next-link-class="`next-link-class`"
      :break-view-class="`break-view-class`"
      :break-view-link-class="`break-view-link-class`"
      :active-class="`active-class`"
      :disabled-class="`disabled-class`"
    >
    </paginate>
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
      colors: [],
      filterMenuSelected: false,
      transitionName: "fade",
      loading: true,
      pagination: {
        pageSize: 1,
        total: 1,
        currentPage: 1,
        lastPage: 1,
      },
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
    async fetchCards(options) {
      this.loading = true;
      try {
        const res = await API.getCards({
          page: this.pagination.currentPage,
          ...options,
        });
        this.cards = res.data;
        this.pagination = res.pagination;
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
  computed: {
    noCardsAvailable() {
      return this.cards.length === 0;
    },
    showNoCardsMessage() {
      return this.noCardsAvailable && !this.loading;
    },
    showCards() {
      return !this.noCardsAvailable && !this.loading;
    },
  },
  watch: {
    "pagination.currentPage": {
      immediate: true,
      handler: function() {
        this.fetchCards();
      },
    },
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
  .pagination {
    @include flexbox;
    justify-content: center;
    list-style-type: none;

    .prev-link-class,
    .next-link-class,
    .page-link-class {
      border: 1px solid map-get($colors, "light-gray");
      padding: 10px;
      color: map-get($colors, "light-gray");

      &:hover {
        text-decoration: none;
        background: map-get($colors, "light-gray");
        color: map-get($colors, "white");
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
    .page-link-class {
      border-left: 0px;
      border-right: 0px;
    }
    .page-class {
      a {
        border-left: 1px solid map-get($colors, "dark-gray");
      }
    }
    .prev-link-class {
      border-right: 0px;
    }
    .active-class {
      a {
        background: map-get($colors, "dark-gray");
        color: map-get($colors, "white");
      }
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
