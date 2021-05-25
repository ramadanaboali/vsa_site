<template>
    <div class="person-home">
        <NavbarLogged />
        <!--  -->
        <div class="inner-banner inner-bg3">
            <div class="container">
                <div class="inner-title">
                    <ul>
                        <li>
                            <router-link to="/person/home" class="nav-link">الرئيسية </router-link>
                        </li>
                        <li><i class="bx bx-chevron-right"></i></li>
                        <li>الفندق</li>
                    </ul>
                    <h3>فندق {{ hotelName }}</h3>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="reservation-widget-area pt-100 pb-70">
            <div class="container">
                <!-- Slider -->
                <div class="room-details-slider owl-carousel owl-theme owl-rtl owl-loaded owl-drag">



                    <div class="owl-stage-outer">
                        <div class="owl-stage"
                            style="transform: translate3d(1772px, 0px, 0px); transition: all 0.25s ease 0s; width: 6202px;">
                            <div class="owl-item cloned" style="width: 856px; margin-left: 30px;">
                                <div class="room-details-item">
                                    <img src="../assets/img/room/room-img2.jpg" alt="Images">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 856px; margin-left: 30px;">
                                <div class="room-details-item">
                                    <img src="../assets/img/room/room-img3.jpg" alt="Images">
                                </div>
                            </div>
                            <div class="owl-item active" style="width: 856px; margin-left: 30px;">
                                <div class="room-details-item">
                                    <img src="../assets/img/room/room-img1.jpg" alt="Images">
                                </div>
                            </div>
                            <div class="owl-item" style="width: 856px; margin-left: 30px;">
                                <div class="room-details-item">
                                    <img src="../assets/img/room/room-img2.jpg" alt="Images">
                                </div>
                            </div>
                            <div class="owl-item" style="width: 856px; margin-left: 30px;">
                                <div class="room-details-item">
                                    <img src="../assets/img/room/room-img3.jpg" alt="Images">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 856px; margin-left: 30px;">
                                <div class="room-details-item">
                                    <img src="../assets/img/room/room-img1.jpg" alt="Images">
                                </div>
                            </div>
                            <div class="owl-item cloned" style="width: 856px; margin-left: 30px;">
                                <div class="room-details-item">
                                    <img src="../assets/img/room/room-img2.jpg" alt="Images">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><i
                                class="bx bx-chevron-left"></i></button><button type="button" role="presentation"
                            class="owl-next"><i class="bx bx-chevron-right"></i></button></div>
                    <div class="owl-dots disabled"></div>
                </div>
                <!-- /Slider -->
                <div class="tab reservation-tab">
                    <ul class="tabs active">
                        <li class="current">
                            <a href="#">معلومات الفندق</a>
                        </li>
                        <li class="">
                            <a href="#">السيارات</a>
                        </li>
                        <li class="">
                            <a href="#">القطارات</a>
                        </li>
                        <li class="">
                            <a href="#">الطيران</a>
                        </li>
                    </ul>
                    <div class="tab_content current active pt-45">
                        <div class="tabs_item current" style="">
                            <div class="reservation-tab-item">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <div class="reservation-widget-content">
                                            <h2>نتائج البحث</h2>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6" v-for="(hotelItem, index) in hotelItems"
                                                    :key="index">
                                                    <div class="room-item reservation-room">
                                                        <img :src="hotelItem.logo" alt="Images">
                                                        <div class="content">
                                                            <h3>فندق {{ hotelItem.name }}</h3>
                                                            <p>{{ hotelItem.description }}</p>
                                                            <ul>
                                                                <li class="text-color">{{ hotelItem.price_starts_from }}
                                                                </li>
                                                                <li><span>لليلة الواحدة</span></li>
                                                            </ul>
                                                            <router-link to="/hotel/details" class="book-btn">تفاصيل
                                                                الفندق</router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--  -->
                        
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <Footer />
    </div>
</template>
<style>

</style>
<script>
    import NavbarLogged from "@/components/NavbarLogged.vue";
    import Footer from "@/components/Footer.vue";
    import $ from "jquery";
    // import axios from "axios";
    export default {
        name: "HotelHome",
        components: {
            NavbarLogged,
            Footer
        },
        props: [''],
        data() {
            return {
                hotelName: "",
                hotelItems: [],

            };
        },
        computed: {

        },
        mounted() {
            this.hotelName = localStorage.getItem("hotelName");
            console.log(this.hotelName);
            $(document).ready(function () {
                $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
                $('.tab ul.tabs li a').on('click', function (g) {
                    var tab = $(this).closest('.tab'),
                        index = $(this).closest('li').index();
                    tab.find('ul.tabs > li').removeClass('current');
                    $(this).closest('li').addClass('current');
                    tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index +
                        ')').slideUp();
                    tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                    g.preventDefault();
                });
                // Slider
                

            });
        },
        methods: {
            // ****************************

            // ****************************

            // ****************************

            // ****************************
            // ****************************

        },
        // Get All
        async created() {}
    };
</script>