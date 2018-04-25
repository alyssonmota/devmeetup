import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify, {
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBVcxWY8PNd3aXem8RSwuiD00taXd81oUc',
      authDomain: 'devmeetup-24e5e.firebaseapp.com',
      databaseURL: 'https://devmeetup-24e5e.firebaseio.com',
      projectId: 'devmeetup-24e5e',
      storageBucket: '',
      messagingSenderId: '657941132845'
    })
    this.$store.dispatch('loadMeetups')
  }
})
