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
                    <p class="lead">
                        {{info.description}}
                    </p>
                    <slider v-bind:images="info.img"></slider>
                    
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
        },
    }),
    methods: {
        fetchDetailsData: async function () {
            let projectId = null;
            let projectData;
            let workResponse;

            try {
                workResponse = await fetch("../../data/projects.json");
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
            } = await this.fetchDetailsData();

            this.info.id = id;
            this.info.title = title;
            this.info.description = description;
            this.info.imagesArray = imagesArray;
        },
    },
    created: function () {
        this.updateDetailsData();
    },
    watch: {
        $route(to, from) {
            console.log("pis");
        },
    },
};
