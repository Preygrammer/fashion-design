// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false



import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserAlt, faHeart, faSearch, faShoppingBag, faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faUserAlt, faHeart, faSearch, faShoppingBag, faBars, faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('navbar', Navbar)

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