Vue.component("app-home", appHome);
Vue.component("app-projects", appProjects);
Vue.component("app-about", appAbout);
Vue.component("app-nav", appNav);

var app = new Vue({
    el: "#app",
    data() {
        return {
            currentView: 'app-home',
            message: 'TEST'
        };
    },
    components: {
        'app-home': appHome,
        'app-projects': appProjects,
        'app-about': appAbout,
        'app-nav': appNav,
      },
    methods: {
        swapComp: function (comp) {
            this.currentView = comp
        }
    },
});