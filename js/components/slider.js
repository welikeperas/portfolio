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
    <div class="col-lg-12 project-images">
        <a v-for="(img, index) in images" :key="index" :href="img" class="glightbox is-loading">
            <img class="img-fluid mb-4" :src="img" />
            <!-- Loading spinner -->
            <!-- <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div> -->
            <!-- End of Loading spinner -->
        </a>
    </div>
    `,
    mounted: function () {
        const lightbox = GLightbox();
    },
    updated: function () {
        const lightbox = GLightbox();
    },
};
