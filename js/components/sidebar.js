import sidebarMenu from "../components/sidebar-menu.js";
import social from "../components/social.js";
import copyright from "../components/copyright.js";

export default {
    template: `
    <div id="sidebar" class="col-md-4 col-lg-3 sidebar-offcanvas">
        <div class="sidebar-content">
            <h1 class="sidebar-heading">
                <router-link to="/" translate="no">We Like Peras</router-link>
            </h1>
            <sidebar-menu></sidebar-menu>
            <social></social>
            <copyright></copyright>
        </div>
    </div>
    `,
    components: {
        sidebarMenu,
        social,
        copyright,
    },
    methods: {
        toggle: function () {
            if ($(".row-offcanvas").hasClass("active")) {
                $(".row-offcanvas").toggleClass("active");
            }
        },
    },
    watch: {
        $route(to, from) {
            this.toggle();
        },
    },
};
