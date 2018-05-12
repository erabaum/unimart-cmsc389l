<template>
  <div id="browser">
    <h1>Browse</h1>
    <v-form @submit.prevent="search">
      <v-text-field v-model="query" label="Search"></v-text-field>
    </v-form>
    <v-container>
      <v-flex md10 offet-md1>
        <v-list>
          <item-card v-for="item in all" :key="item._id" :id="item._id" :item="item._source"></item-card>
          <p v-for="item in all"></p>
        </v-list>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import ItemCard from './ItemCard'
import axios from 'axios'

export default {
  name: 'browser',
  data () {
    return {
      all: [],
      query: ""
    }
  },
  components: {'item-card': ItemCard},
  methods: {
    search : function() {
      console.log(this.query);
      var self = this;

      axios.get('https://acgfcb3png.execute-api.us-east-1.amazonaws.com/prod/items?search=' + self.query,
      {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then( (res) => {
        console.log(res);

        self.all = [];
        res.data.hits.forEach((item) => {
          self.all.push(item);
        })
      }).catch( (err) => {
        console.log(err);
      });
    }
  },
  created: function() {
    var self = this;
    console.log("Created, calling axios");

    axios.get('https://acgfcb3png.execute-api.us-east-1.amazonaws.com/prod/items',
    {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then( (res) => {
      console.log(res);

      self.all = [];
      res.data.hits.forEach((item) => {
        self.all.push(item);
        console.log(item._source);
      })
    }).catch( (err) => {
      console.log(err);
    });

    console.log(this.all);
  }
}
</script>

<style>
#browser {
  margin-top: 80px;
  margin-left: 80px;
}


</style>
