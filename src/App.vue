<template>
  <div id="app">
    <v-toolbar>
      <router-link to="/"><v-toolbar-title>UniMart</v-toolbar-title></router-link>
      <v-toolbar-items class="hidden-sm-and-down">
        <router-link to="/browse"><v-btn flat>Browse</v-btn></router-link>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to UniMart!',
      desc: 'This is the home page that you\'re viewing on Amazon S3'
    }
  }
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
  font-weight: normal;
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
  color: #42b983;
}
</style>
