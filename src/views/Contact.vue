<template>
  <div class="contact_us">
    <Navbar />
    <!-- Inner Banner -->
    <div class="inner-banner inner-bg2">
      <div class="container">
        <div class="inner-title">
          <ul>
            <li>
              <router-link to="/" class="nav-link">الرئيسية </router-link>
            </li>
            <li><i class="bx bx-chevron-right"></i></li>
            <li>تواصل معنا</li>
          </ul>
          <h3>تواصل معنـــــــا</h3>
        </div>
      </div>
    </div>
    <!-- Inner Banner End -->

    <!-- Contact Area -->
    <div class="contact-area pt-100 pb-70">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="contact-content">
              <div class="section-title">
                <h2>
                  إبدأ في إرسال رسالة إلينا والاتصال بنا
                </h2>
              </div>
              <div class="contact-img">
                <img
                  src="../assets/img/contact/contact-img1.jpg"
                  alt="Images"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="contact-form">
              <form id="contactForm">
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Email"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        required
                        data-error="Please enter your number"
                        class="form-control"
                        placeholder="Phone"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-6 col-sm-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        class="form-control"
                        required
                        data-error="Please enter your subject"
                        placeholder="Your Subject"
                      />
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <textarea
                        name="message"
                        class="form-control"
                        id="message"
                        cols="30"
                        rows="8"
                        required
                        data-error="Write your message"
                        placeholder="Your Message"
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group checkbox-option">
                      <input type="checkbox" id="chb2" />
                      <p>
                        Accept
                        <a href="terms-condition.html">Terms & Conditions</a>
                        And <a href="privacy-policy.html">Privacy Policy.</a>
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="default-btn btn-bg-three">
                      إرســــال
                    </button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Area End -->

    <!-- contact Another -->
    <div class="contact-another pb-70">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-another-content">
              <div class="section-title">
                <h2>وسائل الإنصال</h2>
                <p>
                  نحن واحدة من أفضل الوكالات ويمكننا بسهولة إبرام عقد معنا في أي
                  وقت على التفاصيل أدناه.
                </p>
              </div>

              <div class="contact-item">
                <ul>
                  <li>
                    <i class="bx bx-home-alt"></i>
                    <div class="content">
                      <span>123 Virgil A Stanton, Virginia, SA</span>
                      <span>163 Virgil A Stanton, Virginia, SA</span>
                    </div>
                  </li>
                  <li>
                    <i class="bx bx-phone-call"></i>
                    <div class="content">
                      <span
                        ><a href="tel:+1(123)4567890">+(977) 456 7890</a></span
                      >
                      <span
                        ><a href="tel:+1(123)4567896">+(977) 456 7896</a></span
                      >
                    </div>
                  </li>
                  <li>
                    <i class="bx bx-envelope"></i>
                    <div class="content">
                      <span
                        ><a href="info@visitorSA.com"
                          >info@visitorSA.com</a
                        ></span
                      >
                      <span
                        ><a href="hello@visitorSA.com"
                          >hello@visitorSA.com</a
                        ></span
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="contact-another-img">
              <img src="../assets/img/contact/contact-img2.jpg" alt="Images" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- contact Another End -->

    <!-- Map Area -->
    <div class="map-area">
      <div class="container-fluid m-0 p-0">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=17y--WIYiSD0jE3-HTtI8jQNtDz4&hl=en"
        ></iframe>
      </div>
    </div>
    <!-- Map Area End -->
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Contact",
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
