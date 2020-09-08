<template>
  <div>
    <h1>{{ name }}</h1>

    <span>CardName is: {{ name }}</span>
    <!-- <h2>{{ this.cards.cards[0] }}</h2> -->

    <br />
    <input v-on:keyup.enter="fetchCards()" type="text" v-model="name" placeholder="Search All" />
    <div v-for="card in cards.cards" :key="card.index">
      <div>{{ card.name }}</div>
      <div>{{ card.text }}</div>
      <img :src="`${card.imageUrl}`" alt />
    </div>
  </div>
</template>

<script>
import { API } from "@/services";
export default {
  data() {
    return {
      name: "",
      cards: []
    };
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

<style></style>
