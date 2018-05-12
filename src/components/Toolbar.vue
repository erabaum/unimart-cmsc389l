<template>
  <div id="toolbar">
    <v-toolbar app dark height="50px">
    <v-toolbar-title id="title">UniMart</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/browse">Browse</v-btn>
        <v-btn flat to="/sell">Sell</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {

    }
  }
}
</script>

<style>
#toolbar {

}

#title {
  padding-right: 20px;
}

</style>
