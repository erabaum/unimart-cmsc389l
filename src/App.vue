<template>
  <div id="app">
    <v-app>
      <toolbar></toolbar>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to UniMart!',
      desc: 'This is the home page that you\'re viewing on Amazon S3'
    }
  },
  components: {'toolbar': Toolbar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {

}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {

}
</style>
