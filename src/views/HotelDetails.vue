<template>
    <div class="hotel-details">
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
                        <li>تفاصيل الفندق</li>
                    </ul>
                    <h3>تفاصيل الفندق</h3>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="room-area pt-100 pb-70">
            <div class="container">
                <div class="section-title text-center">
                    <span class="sp-color">فندق {{ hotelName }}</span>
                    <h2>الــغــــرف</h2>
                </div>
                <!-- Rooms -->
                <div class="row pt-45">
                    <div class="col-lg-4 col-md-6" v-for="(roomItem, index) in roomItems" :key="index">
                        <div class="room-card">
                            <img src="../assets/img/room-img1.jpg" alt="Images">
                            <div class="content">
                                <h3>غرفة {{ roomItem.room_type_ar }}</h3>
                                <ul>
                                    <li class="text-color">{{roomItem.person_price}}</li>
                                    <li class="text-color">لليلة الواحدة</li>
                                </ul>
                                <div class="rating text-color">
                                    <i v-if="roomItem.is_available == '1'">متاحة</i>
                                    <i v-if="roomItem.is_available == '0'"> غير متاحة</i>
                                </div>
                                <router-link to="/hotel/room-details" class="details-btn">تفاصيل الغرفة</router-link>
                            </div>
                        </div>
                    </div>
                    <!-- pagination -->
                    <!-- <div class="col-lg-12 col-md-12">
                        <div class="pagination-area">
                            <a href="#" class="prev page-numbers">
                                <i class="bx bx-chevrons-left"></i>
                            </a>
                            <span class="page-numbers current" aria-current="page">1</span>
                            <a href="#" class="page-numbers">2</a>
                            <a href="#" class="page-numbers">3</a>
                            <a href="#" class="next page-numbers">
                                <i class="bx bx-chevrons-right"></i>
                            </a>
                        </div>
                    </div> -->
                    <!-- /pagination -->
                </div>
                <!--  -->
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
    import axios from "axios";
    export default {
        name: "HotelDetails",
        components: {
            NavbarLogged,
            Footer
        },
        props: [''],
        data() {
            return {
                hotelId: "",
                roomId: "",
                hotelName: "",
                roomItems: [],
            };
        },
        computed: {

        },
        mounted() {
            this.hotelId = localStorage.getItem("hotelId");
            this.hotelName = localStorage.getItem("hotelName");
            $(document).ready(function () {


            });
        },
        methods: {
            getHotelDetails() {
                const hotel_id = localStorage.getItem("hotelId");
                axios.post(`https://vsa.2bill.net/api/users/search/hotel-details`, {
                    hotel_id
                }).then(
                response => {
                    this.roomItems = response.data.data.rooms;
                    var i;
                    for(i=0; i<this.roomItems.length; i++){
                        this.roomId = response.data.data.rooms[i].id;
                        console.log(this.roomId);
                        // localStorage.setItem("roomId", this.roomId);
                    };
                });
            },
            // ****************************
        },
        // Get All
        async created() {
            this.getHotelDetails();
        }
    }
</script>