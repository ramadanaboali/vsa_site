import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// ***********************************************
Vue.config.productionTip = false;
// ***********************************************
// Css Files
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/fonts/flaticon.css";
import "boxicons/css/boxicons.min.css";
import "./assets/css/magnific-popup.css";
import "owl-carousel/owl-carousel/owl.carousel.css";
import "owl-carousel/owl-carousel/owl.theme.css";
import "./assets/css/nice-select.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/rtl.css";
// ***********************************************
// JS Files
import "jquery/dist/jquery.slim.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// import 'owl-carousel/owl-carousel/owl.carousel.min.js';
// import "magnific-popup/dist/jquery.magnific-popup.min.js";
// import "owl.carousel/dist/owl.carousel.min.js";
// import "jquery-nice-select/js/jquery.nice-select.min.js";
// import "wowjs/dist/wow.min.js";
// import "jquery-ui/external/jquery-1.12.1/jquery.js";
// import "mmenu-js/dist/mmenu.js";
// import "ajaxchimp/jquery.ajaxchimp.min.js";
// import "validator/validator.min.js";
// import "./assets/js/contact-form-script.js";
// import "./assets/js/custom";
// ***********************************************
// Language
import i18n from "./i18n";
import FlagIcon from "vue-flag-icon";
Vue.use(FlagIcon);
// ***********************************************
new Vue({
  router,
  store,
  i18n,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
