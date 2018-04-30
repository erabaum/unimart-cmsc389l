import Vue from 'vue'
import Vuetify from 'vuetify'
import Vue_router from 'vue-router'
import Vue_resource from 'vue-resource'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import Home from './components/Home'
import Browser from './components/Browser'
import Item from './components/Item'
import ItemCard from './components/ItemCard'

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.darken1,
    secondary:colors.green.lighten4,
    accent: colors.indigo.base
  }
});
Vue.use(Vue_resource);
Vue.use(Vue_router);

const router = new Vue_router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home},
    { path: '/browse', component: Browser},
    { path: '/item/:id', component: Item}
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
