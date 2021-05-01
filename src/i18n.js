import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    // General
    login: "Login",
    register: "Register"
    // **********************************

    // **********************************

    // **********************************

    // **********************************
  },
  ar: {
    // General
    login: "تسجيل الدخول",
    register: "إنشاء حساب"
    // **********************************

    // **********************************

    // **********************************

    // **********************************
  }
};

const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "ar", // set fallback locale
  messages // set locale messages
});

export default i18n;
// {{ $t('') }}
