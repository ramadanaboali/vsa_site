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
            <li>إنشاء حساب للفرد</li>
          </ul>
          <h3>إنشاء حساب للــفــرد</h3>
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
                <form id="pRegisterFrm">
                  <div class="row">
                    <div class="col-lg-12 ">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          v-model="name"
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
                          v-model="email"
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
                          v-model="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                     <div class="col-lg-12 ">
                      <div class="form-group">
                        <input
                          type="text"
                          name="mobile"
                          v-model="mobile"
                          id="mobile"
                          class="form-control"
                          required
                          data-error="Please enter your mobile"
                          placeholder="mobile"
                        />
                      </div>
                    </div>

                     <div class="col-lg-12 ">
                      <div class="form-group">
                        <input
                          type="text"
                          name="address"
                          v-model="address"
                          id="address"
                          class="form-control"
                          required
                          data-error="Please enter your address"
                          placeholder="address"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 text-center">
                      <button
                        type="submit"
                        @click="handleSubmit"
                        class="default-btn btn-bg-three border-radius-5"
                      >
                        انشئ حساب جديد الان
                      </button>
                    </div>

                    <div class="col-12">
                      <p class="account-desc">
                        هل لديك حساب بالفعل؟
                        <router-link to="/person/login"
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
  name: "PersonRegister",
  components: {
    Navbar
  },
  data() {
    return {
      name : "",
      email : "",
      password : "",
      mobile : "",
      address : "",
    };
  },
  methods : {
    handleSubmit(e) {
        e.preventDefault()

        if (this.password.length > 0)
        {
            let url = "https://vsa.2bill.net/api/users/auth/signup"
            this.$http.post(url, {
                name: this.name,
                email: this.email,
                password: this.password,
                mobile: this.mobile,
                address: this.address
            })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.error(error);
            });
        } 
    }
  }
};
</script>

<style scoped></style>
