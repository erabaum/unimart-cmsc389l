import Vue from 'vue'
import Vuetify from 'vuetify'
import Vue_router from 'vue-router'
import Axios from 'axios'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import Toolbar from './components/Toolbar'
import Home from './components/Home'
import Browser from './components/Browser'
import Item from './components/Item'
import ItemCard from './components/ItemCard'
import Sell from './components/Sell'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1,
    secondary:colors.green.lighten4,
    accent: colors.indigo.base
  }
});
Vue.use(Vue_router);

const router = new Vue_router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home},
    { path: '/browse', component: Browser},
    { path: '/item/:id', component: Item},
    { path: '/sell', component: Sell}
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
