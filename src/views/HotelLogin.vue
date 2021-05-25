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
            <li>تسجيل الدخول كفندق</li>
          </ul>
          <h3>تسجيل الدخول كفــنــدق</h3>
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
                <form id="hLoginFrm">
                  <div class="row">
                    <div class="col-lg-12 ">
                      <div class="form-group">
                        <input
                          type="text"
                          name="email"
                          v-model="email"
                          id="name"
                          class="form-control"
                          required
                          data-error="Please enter your Username or Email"
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
                          required
                          placeholder="Password"
                        />
                      </div>
                    </div>


                    <div class="col-lg-12 col-sm-12">
                      <router-link to="/hotel/forget-password" class="forget"
                        >هل نسيت كلمة السر؟!</router-link
                      >
                    </div>

                    <div class="col-lg-12 col-md-12 text-center">
                      <button
                        type="submit" @click="handleSubmit"
                        class="default-btn btn-bg-three border-radius-5"
                      >
                        تسجيل الدخول الان
                      </button>
                    </div>
                    <b class="errMsg"> {{ errMsg }}</b>
                    <div class="col-12">
                      <p class="account-desc">
                        لست عضو؟
                        <router-link to="/hotel/register"
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
  name: "HotelLogin",
  components: {
    Navbar
  },
  data() {
    return {
      email: "",
      password: "",
      errMsg: ""
    };
  },
  methods: {
    handleSubmit(e){
      e.preventDefault()
      if (this.password.length > 0) {
        this.$http.post('https://vsa.2bill.net/api/hotels/auth/login', {
            email: this.email,
            password: this.password
        })
        .then(response => {
          console.log(response.data.user.access_token);
          const hotelToken = response.data.user.access_token;
          const hotelId = response.data.user.id;
          const hotelName = response.data.user.name;
          localStorage.setItem("hotelToken", hotelToken);
          localStorage.setItem("hotelId", hotelId);
          localStorage.setItem("hotelName", hotelName);
          this.$router.push("/hotel/home");
          if(response.data.status == false ){
            this.errMsg = response.data.msg;
          }
          
        })
        .catch(function (error) {
            console.error(error.response);
        });
      }
    }
  }
};
</script>

<style scoped></style>
