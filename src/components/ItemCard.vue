<template>
  <div id="item-card">
    <v-card>
      <v-card-title primary-title>
        <h3>{{ item.title }}</h3><br />
      </v-card-title>
      <div>Seller: {{ item.seller_name }} &lt;{{ item.seller_email }}&gt;</div><br />
      <div>{{ item.description }}</div>
      <v-card-actions>
        <router-link :to="'/item/' + item.title"><v-btn flat>Explore</v-btn></router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'item-card',
  props: ['id'],
  data () {
    return {
      item: {
        title: "Not Set",
        seller_name: "Not Set",
        seller_email: "Not Set",
        description: "Not Set"
      },
      items: [
        {
          title: "Art Attk Tix",
          seller_name: "Eric",
          seller_email: "erabaum@mock.me",
          description: "This are Art Attack tickets for 2018"
        },
        {
          title: "Michigan Game Tix",
          seller_name: "Colin",
          seller_email: "colink@mock.me",
          description: "This is the description for the Mich v maryland football game"
        }
      ]
    }
  },
  methods: {
    getItem: function () {
      var item_id = this.id;

      console.log(this.items.find((e) => {
        return item_id == e.seller_name;
      }));

      this.item = this.items.find((e) => {
        return item_id == e.seller_name;
      });
    }
  },
  beforeMount: function () {
     this.getItem();
  }
}
</script>

<style>
#item-card {
}
</style>
