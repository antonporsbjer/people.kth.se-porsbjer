Vue.component("app-splash", appSplash);
Vue.component("app-home", appHome);
Vue.component("app-projects", appProjects);
Vue.component("app-about", appAbout);
Vue.component("app-nav", appNav);

var app = new Vue({
    el: "#app",
    data() {
        return {
        };
    },
    components: {
        'app-splash': appSplash,
        'app-home': appHome,
        'app-projects': appProjects,
        'app-about': appAbout,
        'app-nav': appNav,
      },
    methods: {
    },
});