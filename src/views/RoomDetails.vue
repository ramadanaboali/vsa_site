<template>
    <div class="room-details">
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
                        <li>تفاصيل الغرفة</li>
                    </ul>
                    <h3>تفاصيل الغرفة</h3>
                </div>
            </div>
        </div>
        <!--  -->
        
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
                roomId: "",
                hotelId: "",
                roomDescription: "",
            };
        },
        computed: {

        },
        mounted() {
            this.roomId = localStorage.getItem("roomId");
            this.hotelId = localStorage.getItem("hotelId");
            $(document).ready(function () {
            });
        },
        methods: {
            getHotelDetails() {
                const hotel_id = localStorage.getItem("hotelId");
                this.roomId = localStorage.getItem("roomId");
                console.log(this.roomId);
                axios.post(`https://vsa.2bill.net/api/users/search/hotel-details`, {
                    hotel_id
                }).then(
                response => {
                    this.roomItems = response.data.data.rooms;
                    // this.roomDescription = response.data.data.rooms[this.roomId].id;
                    console.log(this.roomItems);
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