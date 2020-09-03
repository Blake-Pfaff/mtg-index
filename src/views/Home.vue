<template>
  <div>test</div>
</template>

<script>
import { API } from "@/services";
export default {
  methods: {
    async fetchCards() {
      this.cards = await API.getCards();
      console.log(this.cards);
    }
  },
  created() {
    this.fetchCards();
  }
};
</script>

<style></style>
