import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import PersonLogin from "../views/PersonLogin.vue";
import PersonRegister from "../views/PersonRegister.vue";
import CompanyLogin from "../views/CompanyLogin.vue";
import CompanyRegister from "../views/CompanyRegister.vue";
import HotelLogin from "../views/HotelLogin.vue";
import HotelRegister from "../views/HotelRegister.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact
  },
  {
    path: "/person/login",
    name: "PersonLogin",
    component: PersonLogin
  },
  {
    path: "/person/register",
    name: "PersonRegister",
    component: PersonRegister
  },
  {
    path: "/company/login",
    name: "CompanyLogin",
    component: CompanyLogin
  },
  {
    path: "/company/register",
    name: "CompanyRegister",
    component: CompanyRegister
  },
  {
    path: "/hotel/login",
    name: "HotelLogin",
    component: HotelLogin
  },
  {
    path: "/hotel/register",
    name: "HotelRegister",
    component: HotelRegister
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
