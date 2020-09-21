<template>
  <div class="CardView">
    <paginate
      :page-count="20"
      :click-handler="handlePageChange"
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
    <paginate
      :page-count="20"
      :click-handler="handlePageChange"
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
import { GridRow, GridColumn } from "@/components/ui";
import Paginate from "vuejs-paginate";
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
    Paginate,
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_mixins.scss";

.CardView {
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
