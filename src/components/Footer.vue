<template>
  <!-- Footer Area -->
  <footer class="footer-area footer-bg">
    <div class="container">
      <div class="footer-top ptb-50">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="footer-widget">
              <div class="footer-logo">
                <router-link to="/">
                  <img src="../assets/img/logos/logo.png" alt="Images" />
                </router-link>
              </div>
              <p>
                This is one of the best and most creative company in the whole
                world and please contact.
              </p>
              <ul class="footer-list-contact">
                <li>
                  <i class="bx bx-home-alt"></i>
                  <a href="#">123 Stanton, Virginia, SA</a>
                </li>
                <li>
                  <i class="bx bx-phone-call"></i>
                  <a href="tel:+-(997)-456-7890">+(997) 456 7890</a>
                </li>
                <li>
                  <i class="bx bx-envelope"></i>
                  <a href="mailto:hello@visitorSA.com">hello@visitorSA.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="footer-widget">
              <h3>Newsletter</h3>
              <p>
                This is one of the best and most creative company in the whole
                world and please contact.
              </p>
              <div class="footer-form">
                <form
                  class="newsletter-form"
                  data-toggle="validator"
                  method="POST"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control border-radius-50"
                          placeholder="Your Email*"
                          name="EMAIL"
                          required
                          autocomplete="off"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                      <button
                        type="submit"
                        class="default-btn btn-bg-two border-radius-50"
                      >
                        Subscribe Now
                      </button>
                      <div id="validator-newsletter" class="form-result"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copy-right-area copy-right-top">
        <div class="row">
          <div class="col-lg-8 col-md-8">
            <div class="copy-right-text text-align1">
              <p>
                Copyright @2021 Visitor SA. All Rights Reserved.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-4">
            <div class="social-icon text-align2">
              <ul class="social-link">
                <li>
                  <a href="#" target="_blank"
                    ><i class="bx bxl-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="#" target="_blank"><i class="bx bxl-twitter"></i></a>
                </li>
                <li>
                  <a href="#" target="_blank"
                    ><i class="bx bxl-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="#" target="_blank"
                    ><i class="bx bxl-pinterest-alt"></i
                  ></a>
                </li>
                <li>
                  <a href="#" target="_blank"><i class="bx bxl-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Area End -->
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.footer-logo img {
  width: 110px;
  height: 44px;
}
</style>
