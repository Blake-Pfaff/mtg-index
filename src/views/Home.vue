<template>
  <GridContainer>
    <GridRow>
      <GridColumn xs="md-6">
        <h1>{{ name }}</h1>

        <span>Card Name is: {{ name }}</span>
        <AppIcon icon="spinner" class="fa-3x"></AppIcon>

        <br />
        <input v-on:keyup.enter="fetchCards()" type="text" v-model="name" placeholder="Search All" />
      </GridColumn>
      <GridColumn xs="md-6">
        <div v-for="card in cards.cards" :key="card.index">
          <div>{{ card.name }}</div>
          <!-- <div>{{ card.text }}</div> -->
          <img :src="`${card.imageUrl}`" alt />
        </div>
      </GridColumn>
    </GridRow>
  </GridContainer>
</template>

<script>
import { API } from "@/services";
import { GridContainer, GridRow, GridColumn, AppIcon } from "@/components/ui";
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
