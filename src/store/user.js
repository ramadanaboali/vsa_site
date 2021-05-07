import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: "",
        token: localStorage.getItem("token") || "",
        id: localStorage.getItem("id") || "",
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = "loading";
        },
        auth_success(state, token, user) {
            state.status = "success";
            state.token = token;
            state.user = user;
        },
        auth_error(state) {
            state.status = "error";
        },
        logout(state) {
            state.status = "";
            state.token = "";
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit("auth_request");
                axios({
                        url: "https://vsa.2bill.net/api/users/auth/login",
                        data: user,
                        method: "POST"
                    })
                    .then(resp => {
                        const token = resp.data.token;
                        const id = resp.data.user.id;
                        const name = resp.data.user.name;
                        const user = resp.data.user;
                        console.log(token);
                        console.log(name);
                        localStorage.setItem("token", token);
                        localStorage.setItem("id", id);
                        localStorage.setItem("name", name);
                        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                        commit("auth_success", token, user);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit("auth_error");
                        localStorage.removeItem("token");
                        localStorage.removeItem("id");
                        reject(err);
                    });
            });
        },
        logout({ commit }) {
            return new Promise(resolve => {
                commit("logout");
                localStorage.removeItem("token");
                localStorage.removeItem("id");
                delete axios.defaults.headers.common["Authorization"];
                resolve();
            });
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    }
});