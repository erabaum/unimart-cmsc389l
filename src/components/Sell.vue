<template>
  <div id="sell">
    <h1>Sell Something</h1>
    <v-container>
      <v-flex md8 offset-md1>
        <v-form @submit.prevent="submit" v-model="valid" lazy-validation>
          <v-text-field
            v-model="title"
            label="Title"
            required></v-text-field>
          <v-text-field
            v-model="seller_name"
            label="Name"
            required></v-text-field>
          <v-text-field
            v-model="seller_email"
            label="Email Address"
            required></v-text-field>
          <v-text-field
            v-model="description"
            label="Description"
            required></v-text-field>
          <v-btn :disabled="!valid" @click="submit">Submit</v-btn>
          <v-btn @click="clear">Clear</v-btn>
        </v-form>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'sell',
  data () {
    return {
      title: '',
      seller_name: '',
      seller_email: '',
      description: '',
      valid: false
    }
  },
  methods: {
    submit: function () {
      console.log(this.query);
      var self = this;

      if( this.valid )
      axios.post('https://acgfcb3png.execute-api.us-east-1.amazonaws.com/prod/items/',
      {
        title: self.title,
        seller_name: self.seller_name,
        seller_email: self.seller_email,
        description: self.description
      },
      {
        "Access-Control-Allow-Origin": "*"
      })
      .then( (res) => {
        console.log(res);
      }).catch( (err) => {
        console.log(err);
      });
      this.clear();
    },
    clear: function () {
      this.title = '';
      this.seller_name = '';
      this.seller_email = '';
      this.description = '';
    }
  }
}
</script>

<style>
#sell {
  margin-top: 80px;
  margin-left: 80px;
}
</style>
