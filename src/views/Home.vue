<template>
  <div>
    <AppHeader>
      <GridContainer>
        <GridRow>
          <GridColumn xs="md-3">
            <RouterLink to="/" class="AppHeader__logo">
              <AppLogo />
            </RouterLink>
          </GridColumn>
          <GridColumn alignSelf="center" xs="md-9">
            <FilterIcon />
          </GridColumn>
        </GridRow>
      </GridContainer>
    </AppHeader>
    <GridContainer>
      <GridRow>
        <GridColumn xs="md-6">
          <h1>{{ name }}</h1>

          <span>Card Name is: {{ name }}</span>
          <AppIcon icon="spinner" class="fa-3x"></AppIcon>

          <br />
          <input
            v-on:keyup.enter="fetchCards()"
            type="text"
            v-model="name"
            placeholder="Search All"
          />
        </GridColumn>
        <GridColumn xs="md-6">
          <div v-for="card in cards.cards" :key="card.index">
            <div>{{ card.name }}</div>

            <!-- <div>{{ card.text }}</div> -->
            <img v-if="card.imageUrl" :src="card.imageUrl" :alt="card.name" />
            <img
              v-if="!card.imageUrl"
              src="https://via.placeholder.com/275/300"
              alt="Image Not Found"
            />
          </div>
        </GridColumn>
      </GridRow>
    </GridContainer>
  </div>
</template>

<script>
import { API } from "@/services";
import AppHeader from "@/components/layout/AppHeader.vue";
import {
  GridContainer,
  GridRow,
  GridColumn,
  AppLogo,
  FilterIcon,
  AppIcon
} from "@/components/ui";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      cards: []
    };
  },
  components: {
    GridContainer,
    GridRow,
    GridColumn,
    FilterIcon,
    AppHeader,
    AppLogo,
    AppIcon
  },
  methods: {
    async fetchCards() {
      this.cards = await API.getCards({ page: 1, name: this.name });

      console.log(this.cards);
      console.log(this.name);
    }
  },

  created() {
    this.fetchCards();
  }
};
</script>

<style lang="scss">
@import "@/styles/app.scss";
</style>
