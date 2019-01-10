import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import firebase from "firebase";
import "./utils/firebase";

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
