import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Add this to your imports at the top
import Paginate from "vuejs-paginate";
// Install the component as a global component
Vue.component("paginate", Paginate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
