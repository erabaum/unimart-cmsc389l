<template>
  <div id="home">
    <v-container>
      <h1 class="text-md-center">Welcome to UniMart!</h1>
      <p class="text-md-center">Your go-to website for buying ans selling school related materials incliding</p>
      <v-flex md4 offset-md4>
        <v-list>
          <v-list-tile>Tickets</v-list-tile>
          <v-list-tile>Books</v-list-tile>
          <v-list-tile>Furniture</v-list-tile>
          <v-list-tile>Sports Equipment</v-list-tile>
        </v-list>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>

<style>


#home {
  margin-top: 100px;
}


</style>
