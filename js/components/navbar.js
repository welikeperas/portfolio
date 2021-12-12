export default {
    template: `
    <div class="small-navbar d-flex d-md-none">
        <button
            type="button"
            data-toggle="offcanvas"
            class="btn btn-outline-primary"
            v-on:click="toggle"
        >
            <i class="fa fa-align-left mr-2"></i>Menu
        </button>
        <h1 class="small-navbar-heading">
            <router-link to="/" translate="no">We Like Peras</router-link>
        </h1>
    </div>
    `,
    methods: {
        toggle: function () {
            $(".row-offcanvas").toggleClass("active");
        },
    },
};
