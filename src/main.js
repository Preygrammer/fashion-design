import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserAlt, faHeart, faSearch, faShoppingBag, faBars, faArrowRight, faSearchPlus, faChartBar, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

// import './assets/scss/style.scss';

library.add(faUserAlt, faHeart, faSearch, faShoppingBag, faBars, faArrowRight, faSearchPlus, faChartBar, faEnvelopeOpen)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    router,
    render: h => h(App)
})

// new Vue({
//     render: h => h(App),
// }).$mount('#app')