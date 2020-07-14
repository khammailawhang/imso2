import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';


import VueEvaInput from "vue-eva-input";
Vue.use(VueEvaInput);


// import storeSnack from './store/snack.js';
// import store from './store/index';
import i18n from "./i18n";
import Axios from 'axios';
import vuetify from '@/plugins/vuetify';

import { applyPolyfills, defineCustomElements }
from '@deckdeckgo/qrcode/dist/loader';
Vue.config.ignoredElements = [/deckgo-\w*/];

Vue.config.productionTip = false;
import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);


import moment from 'moment'
Vue.filter('formatDate', function(value) {

    if (value) {

        return moment(String(value)).format('MM/DD/YYYY hh:mm')

    }

});

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
    // use the language from the routing param or default language
    let language = to.params.lang;
    if (!language) {
        language = "la";
    }

    // set the current language for i18n.
    i18n.locale = language;
    next();
});
// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
new Vue({
        i18n,
        router,
        store,
        // Qrcode,
        // storeSnack,
        vuetify,
        render: h => h(App)

    }).$mount('#app'),

    // B. We load our component 
    applyPolyfills().then(() => {
        defineCustomElements(window);

    });