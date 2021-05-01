<template>
  <div class="home">
    <Navbar />

    <!-- Banner Area Two -->
    <div class="banner-area-two">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="banner-another">
              <h1>زائــر الــحرمــيـن</h1>
              <p>
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                كونسيكيوات .
              </p>
              <div class="banner-btn">
                <router-link
                  to="/"
                  class="default-btn btn-bg-two border-radius-50"
                >
                  احجز الان
                </router-link>
              </div>

              <div class="banner-shape">
                <img
                  src="../assets/img/home-two/layer_shape.png"
                  alt="Images"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="banner-img">
              <img src="../assets/img/home-two/home-two-img.jpg" alt="Images" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner Area Two End -->

    <!-- About Area -->
    <div class="about-area pt-100 pb-70">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-img-2">
              <img src="../assets/img/about/about-img2.png" alt="Images" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-title">
                <h2>
                  نحن الأفضل على الإطلاق ، لذا يرجى الحصول على حجز سريع
                </h2>
                <p>
                  لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                  أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                  ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                  سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                  كونسيكيوات .
                </p>
              </div>

              <div class="about-form">
                <form>
                  <div class="row align-items-center">
                    <div class="col-lg-4 col-md-4">
                      <div class="form-group">
                        <label>Check in</label>
                        <div class="input-group">
                          <input
                            id="datetimepicker"
                            type="text"
                            class="form-control"
                            placeholder="09/29/2020"
                          />
                          <span class="input-group-addon"></span>
                        </div>
                        <i class="bx bxs-calendar"></i>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                      <div class="form-group">
                        <label>Persons</label>
                        <select class="form-control">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                          <option>04</option>
                          <option>05</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                      <div class="form-group">
                        <label>Check Out</label>
                        <div class="input-group">
                          <input
                            id="datetimepicker-check"
                            type="text"
                            class="form-control"
                            placeholder="09/29/2020"
                          />
                          <span class="input-group-addon"></span>
                        </div>
                        <i class="bx bxs-calendar"></i>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                      <button
                        type="submit"
                        class="default-btn btn-bg-two border-radius-50"
                      >
                        Check Availability
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About Area End -->

    <!-- Services Area Two -->
    <div class="services-area-two pb-70">
      <div class="container">
        <div class="section-title text-center">
          <h2>خدماتنا وجميع التفاصيل الأخرى</h2>
        </div>
        <div class="row pt-45">
          <div class="col-lg-4 col-sm-6">
            <div class="services-card">
              <i class="flaticon-wifi-signal-1"></i>
              <h3>
                <router-link to="/">خدمة 1</router-link>
              </h3>
              <p>
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                كونسيكيوات .
              </p>
              <router-link to="/about" class="get-btn"
                >للحصول عليها
              </router-link>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="services-card">
              <i class="flaticon-sauna"></i>
              <h3>
                <router-link to="/">خدمة 2</router-link>
              </h3>
              <p>
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                كونسيكيوات .
              </p>
              <router-link to="/" class="get-btn">للحصول عليها </router-link>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="services-card">
              <i class="flaticon-tea-cup-with-muffin-and-cookies"></i>
              <h3>
                <router-link to="/"> خدمة 3</router-link>
              </h3>
              <p>
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                كونسيكيوات .
              </p>
              <router-link to="/" class="get-btn">للحصول عليها </router-link>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="services-card">
              <i class="flaticon-champagne-glass"></i>
              <h3>
                <router-link to="/">خدمة 4 </router-link>
              </h3>
              <p>
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                كونسيكيوات .
              </p>
              <router-link to="/" class="get-btn">للحصول عليها </router-link>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="services-card">
              <i class="flaticon-vacuum"></i>
              <h3>
                <router-link to="/">خدمة 5 </router-link>
              </h3>
              <p>
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                كونسيكيوات .
              </p>
              <router-link to="/" class="get-btn">للحصول عليها </router-link>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="services-card">
              <i class="flaticon-beach-vacation"></i>
              <h3>
                <router-link to="/">خدمة 6</router-link>
              </h3>
              <p>
                لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                كونسيكيوات .
              </p>
              <router-link to="/" class="get-btn">للحصول عليها</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Services Area Two End -->

    <!-- Ability Area -->
    <div class="ability-area  pt-100 pb-70">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="ability-content">
              <div class="section-title">
                <h2>قدرتنا على السوق العالمية والدولية</h2>
                <p>
                  لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                  أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار
                  ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير
                  سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو
                  كونسيكيوات .
                </p>
              </div>
              <div class="row">
                <div class="col-lg-6 col-sm-6">
                  <div class="ability-counter">
                    <h3>14K</h3>
                    <p>لوريم ايبسوم دولار سيت أميت</p>
                  </div>
                </div>

                <div class="col-lg-6 col-sm-6">
                  <div class="ability-counter">
                    <h3>225K</h3>
                    <p>لوريم ايبسوم دولار سيت أميت</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="ability-img">
              <img src="../assets/img/ability-img.jpg" alt="Images" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Ability Area  End -->

    <!-- FAQ Area -->
    <div class="faq-area pt-100 pb-70 section-bg-2">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="faq-content faq-content-bg">
              <div class="section-title">
                <h2>للبدأ في الاسئلة والحصول على دعم سريع</h2>
              </div>

              <div class="faq-accordion">
                <ul class="accordion">
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      السؤال الاول؟
                    </a>

                    <div class="accordion-content">
                      <p>
                        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                        أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات
                        دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس
                        نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس
                        أيا كوممودو كونسيكيوات .
                      </p>
                    </div>
                  </li>

                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      السؤال الثاني؟
                    </a>

                    <div class="accordion-content">
                      <p>
                        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                        أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات
                        دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس
                        نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس
                        أيا كوممودو كونسيكيوات .
                      </p>
                    </div>
                  </li>

                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i>
                      السؤال الثالث؟
                    </a>

                    <div class="accordion-content">
                      <p>
                        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                        أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات
                        دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس
                        نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس
                        أيا كوممودو كونسيكيوات .
                      </p>
                    </div>
                  </li>

                  <li class="accordion-item">
                    <a class="accordion-title active" href="javascript:void(0)">
                      <i class="bx bx-chevron-down"></i> السؤال الرابع؟
                    </a>

                    <div class="accordion-content show">
                      <p>
                        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
                        أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات
                        دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس
                        نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس
                        أيا كوممودو كونسيكيوات .
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="faq-img-2">
              <img src="../assets/img/faq/faq-img2.jpg" alt="Images" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FAQ Area End -->

    <Footer />

    <!-- =================================== -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import $ from "jquery";
export default {
  name: "Home",
  components: {
    Navbar,
    Footer
  },
  mounted() {
    $(document).ready(function() {
      // FAQ Accordion JS
      $(".accordion")
        .find(".accordion-title")
        .on("click", function() {
          // Adds Active Class
          $(this).toggleClass("active");
          // Expand or Collapse This Panel
          $(this)
            .next()
            .slideToggle("fast");
          // Hide The Other Panels
          $(".accordion-content")
            .not($(this).next())
            .slideUp("fast");
          // Removes Active Class From Other Titles
          $(".accordion-title")
            .not($(this))
            .removeClass("active");
        });
    });
  }
};
</script>
