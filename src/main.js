import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import JQuery from 'jquery'
let $ = JQuery
import VueSimpleAlert from "vue-simple-alert";
import LoadScript from 'vue-plugin-load-script';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faExchangeAlt, faUniversity, faGlobeAfrica, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)
library.add(faExchangeAlt, faUniversity, faGlobeAfrica, faEnvelope, faPhoneAlt)

 
Vue.use(LoadScript);
Vue.use(VueSimpleAlert);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.loadScript("https://smtpjs.com/v3/smtp.js")
.then(() => {
  // Script is loaded, do something
})
.catch(() => {
  // Failed to fetch script
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
