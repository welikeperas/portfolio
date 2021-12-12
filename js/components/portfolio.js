import navbar from "../components/navbar.js";
import gridItems from "../components/grid-items.js";

export default {
    template: `
    <div class="col-md-8 col-lg-9 content-column">
        <navbar></navbar>
        <div class="grid row">
            <grid-items
                v-for="web in projects"
                v-bind:key="web.id"
                v-bind:web="web"
            ></grid-items>
        </div>
    </div>
    `,
    data: () => ({
        projects: [],
    }),
    methods: {
        addProjectsToData: function () {
            fetch("../../data/projects.json")
                .then((projectsJson) => projectsJson.json())
                .then((projectsObj) => {
                    this.projects.push(...projectsObj.projects);
                })
                .catch(err)(console.log(err));
        },
    },
    created: function () {
        this.addProjectsToData();
    },
    components: { navbar, gridItems },
};
