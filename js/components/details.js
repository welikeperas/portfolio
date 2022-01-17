import navbar from "../components/navbar.js";
import slider from "../components/slider.js";

export default {
    template: `
    <div class="col-md-8 col-lg-9 content-column white-background">
        <navbar></navbar>
        <div class="row">
            <div class="col-xl-10">
                <div class="content-column-content">
                    <h1>{{info.title}}</h1>
                    <p class="lead" v-html="info.description"></p>
                    <a v-if="validateLink" :href="info.web_link" target="blank" class="btn btn-primary rounded mb-5">Visitar Sitio</a>
                    <slider v-bind:images="info.imagesArray"></slider>
                    
                </div>
            </div>
        </div>
    </div>
    `,
    components: {
        navbar,
        slider,
    },
    data: () => ({
        info: {
            id: null,
            title: "",
            description: "",
            imagesArray: [],
            web_link: "",
        },
    }),
    methods: {
        fetchDetailsData: async function () {
            let projectId = null;
            let projectData;
            let workResponse;

            try {
                workResponse = await fetch("./data/projects.json");
            } catch (error) {
                console.log(error);
            }
            let projectsObj = await workResponse.json();

            for (let project of projectsObj.projects) {
                if (project.id === parseInt(this.$route.params.id)) {
                    projectId = project.id;
                }
            }

            return (projectData = projectsObj.projects[projectId]);
        },
        updateDetailsData: async function () {
            const {
                id,
                title,
                "long-description": description,
                imagesArray,
                "web-link": link,
            } = await this.fetchDetailsData();

            this.info.id = id;
            this.info.title = title;
            this.info.description = description;
            this.info.imagesArray = imagesArray;
            this.info.web_link = link;
        },
    },
    computed: {
        validateLink() {
            return this.info.web_link !== "";
        },
    },
    created: function () {
        this.updateDetailsData();
    },
};
