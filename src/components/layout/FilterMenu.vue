<template>
  <div class="FilterMenu">
    <h3>Search By Name</h3>
    <form @submit.prevent="handleSearch">
      <input v-model="name" type="text" placeholder="Search All" />
    </form>

    <br />

    <div class="FilterMenu__colors">
      <h3>Serach By Color</h3>
      <label for="red">
        Red <input value="red" type="checkbox" id="red" v-model="colors" />
      </label>
      <label for="blue">
        Blue <input value="blue" type="checkbox" id="blue" v-model="colors" />
      </label>
      <label for="green">
        Green
        <input value="green" type="checkbox" id="green" v-model="colors" />
      </label>
      <label for="white">
        White
        <input value="white" type="checkbox" id="white" v-model="colors" />
      </label>
      <label for="black">
        Black
        <input value="black" type="checkbox" id="black" v-model="colors" />
      </label>
    </div>
    <div class="FilterMenu__rarity">
      <h3>Search By Rarity</h3>
      <label for="common">
        Common
        <input value="Common" type="checkbox" id="common" v-model="rarity" />
      </label>
      <label for="Uncommon">
        Uncommon
        <input
          value="Uncommon"
          type="checkbox"
          id="uncommon"
          v-model="rarity"
        />
      </label>
      <label for="rare">
        Rare
        <input value="Rare" type="checkbox" id="rare" v-model="rarity" />
      </label>
      <label for="mythicRare">
        Mythic Rare
        <input
          value="Mythic"
          type="checkbox"
          id="mythicRare"
          v-model="rarity"
        />
      </label>
    </div>

    <button @click="handleSearch">
      Press to Search
      <AppIcon icon="search" class="appIcon" />
    </button>
    <button @click="handleClose">
      Press to close <AppIcon icon="times" class="appIcon" />
    </button>
  </div>
</template>

<script>
import { AppIcon } from "@/components/ui";

export default {
  name: "FilterMenu",
  data() {
    return {
      name: "",
      colors: [],
      rarity: [],
    };
  },
  components: {
    AppIcon,
  },
  methods: {
    handleSearch() {
      this.$emit("fetch-cards", {
        name: this.name,
        colors: this.colors.join(","),
        rarity: this.rarity.join(","),
      });
    },
    handleClose() {
      this.$emit("close-filters");
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
  overflow: scroll;
  padding-bottom: 150px;
  &__colors,
  &__rarity {
    @include flexbox;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0;
    flex-direction: column;
  }
  button {
    @include button;
    width: 80%;
    margin: 10px 0;
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
