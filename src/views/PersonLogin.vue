<template>
  <div class="person_auth">
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
            <li>تسجيل الدخول كفرد</li>
          </ul>
          <h3>تسجيل الدخول كــفــرد</h3>
        </div>
      </div>
    </div>
    <!-- Inner Banner End -->

    <!-- Sign In Area -->
    <div class="sign-in-area pt-100 pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="user-all-form">
              <div class="contact-form">
                <div class="section-title text-center">
                  <span class="sp-color">تسجيل الدخول</span>
                  <h2>تسجيل الدخول إلى حسابك!</h2>
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
                          data-error="Please enter your Username or Email"
                          placeholder="Username or Email"
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

                    <div class="col-lg-6 col-sm-6 form-condition">
                      <div class="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label for="chb1">
                          تذكرني
                        </label>
                      </div>
                    </div>

                    <div class="col-lg-6 col-sm-6">
                      <router-link to="/hotel/forget-password" class="forget"
                        >هل نسيت كلمة السر؟!</router-link
                      >
                    </div>

                    <div class="col-lg-12 col-md-12 text-center">
                      <button
                        type="submit"
                        class="default-btn btn-bg-three border-radius-5"
                      >
                        تسجيل الدخول الان
                      </button>
                    </div>

                    <div class="col-12">
                      <p class="account-desc">
                        لست عضو؟
                        <router-link to="/person/register"
                          >إنشاء حساب جديد</router-link
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
    <!-- Sign In Area End -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "PersonLogin",
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
