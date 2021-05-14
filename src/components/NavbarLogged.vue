<template>
  <!-- Start Navbar Area -->
  <div class="navbar-area">
    <!-- Menu For Mobile Device -->
    <div class="mobile-nav">
      <router-link to="/" class="logo">
        <img src="../assets/img/logos/logo.png" alt="Logo" />
      </router-link>
    </div>

    <!-- Menu For Desktop Device -->
    <div class="main-nav nav-two">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light ">
          <router-link to="/" class="navbar-brand">
            <img src="../assets/img/logos/logo.png" alt="Logo" />
          </router-link>

          <div
            class="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <router-link to="/person/home" class="nav-link">الرئيسية </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">من نحن</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact-us" class="nav-link"
                  >تواصل معنا</router-link
                >
              </li>
            </ul>

            <div class="other-option">
              <div class="option-item d-line">
                <div class="language-list">
                  <div class="dropdown language-list-dropdown">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {{ personName }}
                      <i class="bx bx-chevron-down"></i>
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item">
                        الصفحة الشخصية
                      </a>
                      <a>
                        تسجيل الخروج
                      </a>
                    </div>
                  </div>
                </div>
                <div class="language-list">
                  <div class="dropdown language-list-dropdown">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      اللغة
                      <i class="bx bx-chevron-down"></i>
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item">
                        <img
                          src="../assets/img/language-flag/eng.png"
                          alt="Images"
                        />
                        English
                      </a>
                      <a>
                        <img
                          src="../assets/img/language-flag/arabic.png"
                          alt="Images"
                        />
                        اللغة العربية
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="side-nav-responsive">
      <div class="container">
        <div class="dot-menu">
          <div class="circle-inner">
            <div class="circle circle-one"></div>
            <div class="circle circle-two"></div>
            <div class="circle circle-three"></div>
          </div>
        </div>

        <div class="container">
          <div class="side-nav-inner">
            <div class="side-nav justify-content-center align-items-center">
              <div class="side-item">
                <div class="option-item">
                  <div class="language-list">
                    <div class="dropdown language-list-dropdown">
                      <button
                        class="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        اللغة
                        <i class="bx bx-chevron-down"></i>
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          <img
                            src="../assets/img/language-flag/eng.png"
                            alt="Images"
                          />
                          English
                        </a>
                        <a href="#">
                          <img
                            src="../assets/img/language-flag/arabic.png"
                            alt="Images"
                          />
                          اللغة العربية
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="side-item">
                <div class="option-item">
                  <div class="menu-icon">
                    <a href="#" class="burger-menu menu-icon-one">
                      <i class="bx bx-menu"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Navbar Area -->
</template>
<script>
import $ from "jquery";
// import i18n from "./../i18n";
export default {
  name: "NavbarLogged",
  data() {
    return {
        personName: "",
    };
  },
  mounted() {
    this.personName = localStorage.getItem("personName");
    $(document).ready(function() {
      // Navbar Area
      $(window).on("scroll", function() {
        if ($(this).scrollTop() > 150) {
          $(".navbar-area").addClass("sticky-nav");
        } else {
          $(".navbar-area").removeClass("sticky-nav");
        }
      });
    });
  },
  methods: {}
};
</script>

<style scoped>
.navbar-brand img {
  width: 110px;
  height: 44px;
}

.mobile-nav img {
  width: 100px;
  height: 40px;
}
</style>
