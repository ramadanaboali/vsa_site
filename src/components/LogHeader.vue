<template>
  <div id="logHeader">
    <div class="appContainer">
      <div class="lang">
        <button
          v-for="entry in languages"
          :key="entry.title"
          @click="changeLocale(entry.language)"
        >
          <flag :iso="entry.flag" v-bind:squared="false" /> {{ entry.title }}
        </button>
      </div>
      <div class="auth">
        <router-link to="login">{{ $t("login") }}</router-link> |
        <router-link to="register">{{ $t("register") }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import i18n from "./../i18n";
export default {
  name: "LogHeader",
  data() {
    return {
      languages: [
        {
          flag: "us",
          language: "en",
          title: "ENG"
        },
        {
          flag: "eg",
          language: "ar",
          title: "AR"
        }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      if (i18n.locale == "ar") {
        document.querySelector("html").classList.add("is-rtl");
      }
      if (i18n.locale == "en") {
        document.querySelector("html").classList.remove("is-rtl");
      }
    }
  }
};
</script>

<style scoped>
#logHeader {
  background-color: #212121;
  display: block;
  overflow: hidden;
  padding: 0.5rem 0;
}

.lang {
  display: inline-block;
  width: 50%;
  float: left;
}
.is-rtl .lang {
  float: right;
  text-align: right;
}

.lang button {
  border: 1px solid var(--second-color);
  font-size: 12px;
  margin: 0 0.2rem;
  background-color: var(--second-color);
}
.lang button:hover,
.lang button:focus {
  background-color: var(--dark);
  color: var(--second-color);
  border: 1px solid var(--dark);
}

.auth {
  display: inline-block;
  width: 50%;
  text-align: right;
  color: #fff;
}
.is-rtl .auth {
  text-align: left;
}
.auth a {
  color: #fff;
  text-transform: capitalize;
  margin: 0 1rem;
}

.auth a:hover,
.auth a:focus {
  color: var(--main-color);
}
</style>
