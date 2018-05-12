<template>
  <div id="item-card">
    <v-card>
      <v-card-title primary-title>
        <h3>{{ item.title }}</h3><br />
      </v-card-title>
      <div>Seller: {{ item.seller_name }} &lt;{{ item.seller_email }}&gt;</div><br />
      <div>{{ item.description }}</div>
      <v-card-actions>
        <v-btn flat :to="/item/ + id">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'item-card',
  props: ['item', 'id'],
  data () {
    return {
      item: {
        title: "Not Set",
        seller_name: "Not Set",
        seller_email: "Not Set",
        description: "Not Set"
      }
    }
  }
}
</script>

<style>
#item-card {
  padding: 5px
}
</style>
