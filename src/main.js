import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate'
import VuePageTransition from 'vue-page-transition'
import "jquery";
import "popper.js";
import "bootstrap";
import "@/assets/app.scss";
import { fb } from '@/firebase'

Vue.config.productionTip = false;
Vue.use(Vuelidate)
Vue.use(VuePageTransition)

let app = ''

fb.auth().onAuthStateChanged(function(user) {
  if(!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
