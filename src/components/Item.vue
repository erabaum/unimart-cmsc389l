<template>
  <div id="item">
    <h1>{{ item.title }}</h1>
    <h3>Sold By: {{ item.seller_name }} &lt;{{ item.seller_email }}&gt;</h3>
    <h3>Description: {{ item.description }}</h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'item',
  data () {
    return {
      id: this.$route.params.id,
      item: {
        title: "Not Set",
        seller_name: "Not Set",
        seller_email: "Not Set",
        description: "Not Set"
      }
    }
  },
  created: function () {
    console.log(this.query);
    var self = this;

    axios.get('https://acgfcb3png.execute-api.us-east-1.amazonaws.com/prod/items/' + self.id,
    {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then( (res) => {
      console.log(res);

      self.item = res.data._source;
    }).catch( (err) => {
      console.log(err);
    });
  }
}
</script>

<style>
#item {
  margin-top: 80px;
}
</style>
