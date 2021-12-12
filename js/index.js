import sidebar from "../js/components/sidebar.js";
import portafolios from "../js/components/portfolio.js";
import detailsPage from "../js/components/details.js";

const Home = {
    template: `
    <div class="container-fluid">
        <div class="row row-offcanvas row-offcanvas-left">
            <sidebar></sidebar>
            <portafolios></portafolios>
        </div>
    </div>
    `,
    computed: {
        username() {
            // We will see what `params` is shortly
            return this.$route.params.username;
        },
    },
    components: {
        sidebar,
        portafolios,
    },
};

const Details = {
    template: `
    <div class="container-fluid">
        <div class="row row-offcanvas row-offcanvas-left">
            <sidebar></sidebar>
            <detailsPage></detailsPage>
        </div>
    </div>
    `,
    components: {
        sidebar,
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

// let app = new Vue({
//     el: "#app",
//     data: () => ({
//         currentRoute: window.location.pathname,
//     }),

//     computed: {
//         ViewComponent() {
//             return routes[this.currentRoute] || NotFound;
//         },
//     },

//     render(h) {
//         return h(this.ViewComponent);
//     },
// });

const app = new Vue({
    router,
}).$mount("#app");
