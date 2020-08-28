import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import JQuery from 'jquery'
let $ = JQuery

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faExchangeAlt, faUniversity, faGlobeAfrica, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)
library.add(faExchangeAlt, faUniversity, faGlobeAfrica, faEnvelope, faPhoneAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
