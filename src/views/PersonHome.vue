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
                        <li>الحجز</li>
                    </ul>
                    <h3>الحجز</h3>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="reservation-widget-area pt-100 pb-70">
            <div class="container">
                <div class="tab reservation-tab">
                    <ul class="tabs active">
                        <li class="current">
                            <a href="#">الفنادق</a>
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
                                    <div class="col-lg-4">
                                        <div class="side-bar-form">
                                            <h3>ابحث</h3>
                                            <form>
                                                <div class="row align-items-center">
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <label>اختر المدينة</label>
                                                            <select v-model="citySelected"  class="form-control" >
                                                                <option v-for="(cityItem, index) in cityItems" :key="index" v-bind:value="cityItem.id">{{ cityItem.name }}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <label>اختر اليوم</label>
                                                            <div class="input-group">
                                                                <datepicker :format="dateFormat" v-model="date" class="form-control hasDatepicker"></datepicker>
                                                                <span class="input-group-addon"></span>
                                                            </div>
                                                            <i class="bx bxs-calendar"></i>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <button type="submit" @click="hotelSearchSubmit"
                                                            class="default-btn btn-bg-three border-radius-5">
                                                            ابحث الان
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="reservation-widget-content">
                                            <h2>نتائج البحث</h2>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6" v-for="(hotelItem, index) in hotelItems" :key="index">
                                                    <div class="room-item reservation-room">
                                                        <img :src="hotelItem.logo" alt="Images">
                                                        <div class="content">
                                                            <h3>فندق {{ hotelItem.name }}</h3>
                                                            <p>{{ hotelItem.description }}</p>
                                                            <ul>
                                                                <li class="text-color">{{ hotelItem.price_starts_from }}</li>
                                                                <li><span>لليلة الواحدة</span></li>
                                                            </ul>
                                                            <router-link to="/hotel/details" class="book-btn">تفاصيل الفندق</router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Cars -->
                        <div class="tabs_item" style="">
                            <div class="reservation-tab-item">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="side-bar-form">
                                            <h3>ابحث</h3>
                                            <form>
                                                <div class="row align-items-center">
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <label>اختر المدينة</label>
                                                            <select v-model="citySelected"  class="form-control" >
                                                                <option v-for="(cityItem, index) in cityItems" :key="index" v-bind:value="cityItem.id">{{ cityItem.name }}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <button type="submit" @click="carSearchSubmit"
                                                            class="default-btn btn-bg-three border-radius-5">
                                                            ابحث الان
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="reservation-widget-content">
                                            <h2>نتائج البحث</h2>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6" v-for="(carItem, index) in carItems" :key="index">
                                                    <div class="room-item reservation-room">
                                                        <!-- <img :src="carImg.photo" alt="Images"> -->
                                                        <div class="content">
                                                            <h3>{{ carItem.name }}</h3>
                                                            <p>{{ carItem.description }}</p>
                                                            <ul>
                                                                <li class="text-color">{{ carItem.user_price }}</li>
                                                            </ul>
                                                            <router-link to="/car/details" class="book-btn">تفاصيل السيارة</router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Trains -->
                        <div class="tabs_item" style="">
                            <div class="reservation-tab-item">
                                <div class="row">
                                    <div class="col-lg-10">
                                        <div class="reservation-widget-content">
                                            <h2>مدن القطارات</h2>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6" v-for="(trainItem, index) in trainItems" :key="index">
                                                    <div class="room-item reservation-room">
                                                        <div class="content ">
                                                            <h3>{{ trainItem.name }}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Airlines -->
                        <div class="tabs_item" style="">
                            <div class="reservation-tab-item">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="side-bar-form">
                                            <h3>ابحث</h3>
                                            <form>
                                                <div class="row align-items-center">
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <label>اختر المدينة</label>
                                                            <select v-model="citySelected"  class="form-control" >
                                                                <option v-for="(cityItem, index) in cityItems" :key="index" v-bind:value="cityItem.id">{{ cityItem.name }}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <button type="submit" @click="carSearchSubmit"
                                                            class="default-btn btn-bg-three border-radius-5">
                                                            ابحث الان
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="reservation-widget-content">
                                            <h2>نتائج البحث</h2>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6" v-for="(carItem, index) in carItems" :key="index">
                                                    <div class="room-item reservation-room">
                                                        <img :src="carItem.logo" alt="Images">
                                                        <div class="content">
                                                            <h3>{{ carItem.name }}</h3>
                                                            <p>{{ carItem.description }}</p>
                                                            <ul>
                                                                <li class="text-color">{{ carItem.user_price }}</li>
                                                            </ul>
                                                            <router-link to="/car/details" class="book-btn">تفاصيل السيارة</router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
        <Footer />
    </div>
</template>
<style>
    .vdp-datepicker.form-control.hasDatepicker input {
        display: block;
        width: 100%;
        height: 45px;
        padding: 0 15px;
        border: none;
        color: #292323;
        background-color: #ffffff;
        font-weight: 400;
        border-radius: 5px;
    }
    .vdp-datepicker.form-control.hasDatepicker input:focus-visible {
        outline: none;
    }
</style>
<script>
    import NavbarLogged from "@/components/NavbarLogged.vue";
    import Footer from "@/components/Footer.vue";
    import Datepicker from 'vuejs-datepicker';
    import $ from "jquery";
    import axios from "axios";
    export default {
        name: "PersonHome",
        components: {
            Datepicker,
            NavbarLogged,
            Footer
        },
        props: ['format'],
        data() {
            return {
                personName: "",
                date: null,
                cityItems: [],
                hotelItems: [],
                carItems: [],
                trainItems: [],
                citySelected: "",
                
            };
        },
        computed: {
            dateFormat: function() {
                let date = new Date(this.date);
                return date.getFullYear() + '-' + 
                (date.getMonth() +1) + '-' + 
                date.getDate();  
            }
        },
        mounted() {
            this.personName = localStorage.getItem("personName");
            $(document).ready(function () {
                $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
                $('.tab ul.tabs li a').on('click', function (g) {
                    var tab = $(this).closest('.tab'), 
                    index = $(this).closest('li').index();
                    tab.find('ul.tabs > li').removeClass('current');
                    $(this).closest('li').addClass('current');
                    tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                    tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                    g.preventDefault();
                });
                
            });
        },
        methods: {
            // ****************************
            getAllCities() {
                axios.get(`https://vsa.2bill.net/api/users/get-cities`).then(
                response => {
                    this.cityItems = response.data.data;
                });
            },
            // ****************************
            getAllTrains() {
                axios.get(`https://vsa.2bill.net/api/users/train-cities`).then(
                response => {
                    this.trainItems = response.data.data;
                });
            },
            // ****************************
            hotelSearchSubmit(e) {
                e.preventDefault();
                const city_id = this.citySelected;
                const date = this.dateFormat;
                axios.post(`https://vsa.2bill.net/api/users/search/get-hotels`, {
                    city_id, date
                }).then(
                response => {
                    this.hotelItems = response.data.data;
                    console.log(this.hotelItems);
                    var i;
                    for(i=0; i<this.hotelItems.length; i++){
                        const hotelId = this.hotelItems[i].id;
                        const hotelName = this.hotelItems[i].name;
                        localStorage.setItem("hotelId", hotelId);
                        localStorage.setItem("hotelName", hotelName);
                        console.log(hotelId);
                    };
                });
            },
            // ****************************
            carSearchSubmit(e) {
                e.preventDefault();
                const city_id = this.citySelected;
                axios.post(`https://vsa.2bill.net/api/users/search/get-cars`, {
                    city_id
                }).then(
                response => {
                    this.carItems = response.data.data;
                    console.log(this.carImg);
                });
            },
            // ****************************
           
        },
        // Get All
        async created() {
            this.getAllCities();
            this.getAllTrains();
        }
    };
</script>