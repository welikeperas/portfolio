export default {
    props: {
        images: {
            type: Array,
            default: () => {
                return [
                    "./img/tuamigapsicologa/image1.jpg",
                    "./img/chronus/image1.jpg",
                    "./img/911/image1.jpg",
                ];
            },
        },
    },
    template: `
    <div
        id="main-slider"
        class="owl-carousel owl-theme"
    >
        <div 
            class="item"
            v-for="image in images"    
        >
        
            <img
                v-bind:src="image"
                alt=""
                class="img-fluid"
            />
        </div>
    </div>
    `,
    computed: {
        loadImages: function () {
            $("#main-slider").owlCarousel({
                items: 1,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayHoverPause: true,
                nav: true,
            });
        },
    },
    mounted: function () {
        this.loadImages;
    },
};
