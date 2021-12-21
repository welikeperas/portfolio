import sidebar from "../js/components/sidebar.js";
import portafolios from "../js/components/portfolio.js";
import detailsPage from "../js/components/details.js";

const Home = {
    template: `
    <portafolios></portafolios>
    `,
    components: {
        portafolios,
    },
};

const Details = {
    template: `
    <detailsPage></detailsPage>
    `,
    components: {
        detailsPage,
    },
};

const routes = [
    { path: "/", component: Home },
    { path: "/works/:id", component: Details },
];

const router = new VueRouter({
    routes, // short for `routes: routes`
});

const app = new Vue({
    template: `
    <div id="app">
        <div class="container-fluid">
            <div class="row row-offcanvas row-offcanvas-left">
                <sidebar></sidebar>
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
    `,
    router,
    components: {
        sidebar,
    },
}).$mount("#app");
