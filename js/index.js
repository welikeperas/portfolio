Vue.component("app", {
    template: `
    <div class="container-fluid">
        <div class="row row-offcanvas row-offcanvas-left">
            <slot></slot>
        </div>
    </div>
    `,
});

Vue.component("sidebar", {
    template: `
    <div id="sidebar" class="col-md-4 col-lg-3 sidebar-offcanvas">
        <div class="sidebar-content">
            <h1 class="sidebar-heading">
                <a href="index.html">We Like Peras</a>
            </h1>
            <slot></slot>
        </div>
    </div>
    `,
});

Vue.component("sidebarMenu", {
    template: `
    <ul class="sidebar-menu">
        <li class="sidebar-item">
            <a href="index.html" class="sidebar-link active">Home</a>
        </li>
    </ul>
    `,
});

Vue.component("social", {
    template: `
    <p class="social">
            <a
                href="https://www.behance.net/welikeperas"
                target="blank"
                data-animate-hover="pulse"
                class="external gplus"
                ><i class="fa fa-behance"></i></a
            ><a
                href="https://www.instagram.com/welikeperas/"
                target="blank"
                title=""
                class="external instagram"
                ><i class="fa fa-instagram"></i></a
            ><a
                href="mailto:welikeperas@gmail.com"
                data-animate-hover="pulse"
                class="email"
                ><i class="fa fa-envelope"></i
            ></a>
        </p>
    `,
});

Vue.component("copyright", {
    template: `
    <div class="copyright text-center text-md-left">
        <p class="credit">
            &copy;2022 We Like Peras | Template by
            <a
                href="http://bootstrapious.com/portfolio-themes"
                class="external"
                >Bootstrapious.com</a
            >
        </p>
        <!-- Please do not remove the backlink to us, unless you support the development at http://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :)        -->
    </div>
    `,
});

Vue.component("portfolios", {
    template: `
    <div class="col-md-8 col-lg-9 content-column">
        <slot name="navbar"></slot>
        <div class="grid row">
            <slot name="grid-item"></slot>
        </div>
    </div>
    `,
});

Vue.component("navbar", {
    template: `
    <div class="small-navbar d-flex d-md-none">
        <button
            type="button"
            data-toggle="offcanvas"
            class="btn btn-outline-primary"
        >
            <i class="fa fa-align-left mr-2"></i>Menu
        </button>
        <h1 class="small-navbar-heading">
            <a href="index.html">Creative</a>
        </h1>
    </div>
    `,
});

Vue.component("gridItems", {
    props: {
        web: {
            type: Object,
            default: () => ({
                id: 1,
                title: "Prueba",
                description: "prueba description",
                href: "./pages/details-nomina360.html",
                img: "./img/portfolio/a4-paper.jpg",
            }),
        },
    },
    template: `
    <div class="col-md-6 col-lg-3 grid-item">
        <div class="box-masonry">
            <a
                v-bind:href="web.href"
                title=""
                class="
                    box-masonry-image
                    with-hover-overlay with-hover-icon
                "
                ><img
                    v-bind:src="web.img"
                    alt=""
                    class="img-fluid"
            /></a>
            <div class="box-masonry-text">
                <h4>
                    <a
                        v-bind:href="web.href"
                        >{{web.title}}</a
                    >
                </h4>
                <div class="box-masonry-desription">
                    <p>
                        {{web.description}}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `,
});

let data = function () {
    return {
        projects: [
            {
                id: 1,
                title: "Tu Amiga Psicologa",
                description: "",
                href: "./pages/details-nomina360.html",
                img: "./img/tuamigapsicologa/image1.jpg",
            },
            {
                id: 2,
                title: "Chronus",
                description: "",
                href: "./pages/details-nomina360.html",
                img: "./img/chronus/image1.jpg",
            },
            {
                id: 3,
                title: "911 Formulario",
                description: "",
                href: "./pages/details-nomina360.html",
                img: "./img/911/image1.jpg",
            },
            {
                id: 4,
                title: "Alitura",
                description: "",
                href: "./pages/details-nomina360.html",
                img: "./img/alitura/image1.jpg",
            },
            {
                id: 5,
                title: "So Ferrara",
                description: "",
                href: "./pages/details-nomina360.html",
                img: "./img/soferrara/image1.jpg",
            },
            {
                id: 6,
                title: "Frimarine",
                description: "",
                href: "./pages/details-nomina360.html",
                img: "./img/frimarine/image1.jpg",
            },
            {
                id: 7,
                title: "SrCrabs",
                description: "",
                href: "./pages/details-nomina360.html",
                img: "./img/srcrabs/image1.jpg",
            },
            {
                id: 8,
                title: "Cumbre Internacional de Negocios",
                description: "",
                href: "./pages/details-nomina360.html",
                img: "./img/cumineg/image1.jpg",
            },
        ],
    };
};

let app = new Vue({
    el: "#app",
    data: data,
});
