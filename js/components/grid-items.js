export default {
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
            <router-link
                :to="web.href"
                title=""
                class="
                    box-masonry-image
                    with-hover-overlay with-hover-icon
                "
                ><img
                    v-bind:src="web.img"
                    alt=""
                    class="img-fluid"
            /></router-link>
            <div class="box-masonry-text">
                <h4>
                    <router-link
                        :to="web.href"
                        translate="no"
                        >{{web.title}}</router-link
                    >
                </h4>
                <div class="box-masonry-desription">
                    <p>
                        {{web["short-description"]}}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        masonryEffect() {
            $(".grid").masonry({
                itemSelector: ".grid-item",
                columnWidth: 0,
                horizontalOrder: true,
            });
        },
    },
    mounted() {
        this.masonryEffect();
    },
    updated() {
        this.masonryEffect();
    },
};
