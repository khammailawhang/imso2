import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'
import Maska from "maska";
// import ShardsVue from 'shards-vue'

// vue bootstrp
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import base styles (Bootstrap and Shards)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'shards-ui/dist/css/shards.css'


Vue.use(Vuetify)
Vue.use(Maska)
// Vue.use(ShardsVue);


// Install BootstrapVue
// Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                iconfont: 'md',
                secondary: colors.red.headers, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
    },
})