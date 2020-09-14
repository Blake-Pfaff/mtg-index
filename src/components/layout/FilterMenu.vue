<template>
  <div class="FilterMenu">
    <span>Search By Name</span>
    <form @submit.prevent="handleSearch">
      <input v-model="name" type="text" placeholder="Search All" />
    </form>

    <br />
    <span>or</span>
    <div class="FilterMenu__field">
      <label for="mana">
        Search by Color
        <input type="checkbox" id="color" />
      </label>
    </div>

    <div class="FilterMenu__field">
      <label for="mana">
        Search by Type
        <input type="checkbox" id="type" />
      </label>
    </div>

    <div class="FilterMenu__field">
      <label for="mana">
        Search by Rarity
        <input type="checkbox" id="type" />
      </label>
    </div>

    <button @click="handleSearch">Press to Search</button>

    <!-- <h1>{{ name }}TEST</h1>

    <span>Card Name is: {{ name }}</span>
    <AppIcon icon="spinner" class="fa-3x"></AppIcon>

    <br />
  

    <div v-for="card in cards.cards" :key="card.index">
    <div>{{ card.name }}</div>-->

    <!-- <div>{{ card.text }}</div> -->
    <!-- <img v-if="card.imageUrl" :src="card.imageUrl" :alt="card.name" />
    <img v-if="!card.imageUrl" src="https://via.placeholder.com/275/300" alt="Image Not Found" />-->
    <!-- </div> -->
    <!-- <AppIcon icon="spinner" class="fa-3x"></AppIcon> -->
  </div>
</template>

<script>
// import { AppIcon } from "@/components/ui";

export default {
  name: "FilterMenu",
  data() {
    return {
      name: "",
    };
  },
  components: {
    // AppIcon
  },
  methods: {
    handleSearch() {
      this.$emit("fetch-cards", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_mixins.scss";
.FilterMenu {
  width: 250px;
  border-right: 1px solid map-get($colors, "light-gray");
  border-bottom: 1px solid map-get($colors, "light-gray");
  border-radius: 5px;
  height: 100vh;
  position: fixed;
  top: 80px;
  z-index: 900;
  background-color: map-get($colors, "background");
  padding-top: 50px;
  opacity: 0.97;

  &__field {
    @include flexbox;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0;
  }
  button {
    @include button;
  }
  @media (max-width: $breakpoint-tablet) {
    width: 100%;
    span {
      display: block;
    }
    top: 50px;
  }
  @media (max-width: $breakpoint-mobile) {
    top: 130px;
  }
}
</style>
