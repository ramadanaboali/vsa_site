<template>
  <div class="hotel_auth">
    <Navbar />
    <!-- Inner Banner -->
    <div class="inner-banner inner-bg9">
      <div class="container">
        <div class="inner-title">
          <ul>
            <li>
              <router-link to="/">الرئيسية</router-link>
            </li>
            <li><i class="bx bx-chevron-right"></i></li>
            <li>إنشاء حساب للشركة</li>
          </ul>
          <h3>إنشاء حساب للــشــركة</h3>
        </div>
      </div>
    </div>
    <!-- Inner Banner End -->

    <!-- Sign Up Area -->
    <div class="sign-up-area pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="user-all-form">
              <div class="contact-form">
                <div class="section-title text-center">
                  <span class="sp-color">إنشاء حساب</span>
                  <h2>انشئ حساب جديد!</h2>
                </div>
                <form id="contactForm">
                  <div class="row">
                    <div class="col-lg-12 ">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="form-control"
                          required
                          data-error="Please enter your Username"
                          placeholder="Username"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="form-control"
                          required
                          data-error="Please enter email"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 text-center">
                      <button
                        type="submit"
                        class="default-btn btn-bg-three border-radius-5"
                      >
                        انشئ حساب جديد الان
                      </button>
                    </div>

                    <div class="col-12">
                      <p class="account-desc">
                        هل لديك حساب بالفعل؟
                        <router-link to="/company/login"
                          >تسجيل الدخول</router-link
                        >
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sign Up Area End -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "CompanyRegister",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
