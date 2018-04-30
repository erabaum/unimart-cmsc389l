<template>
  <div id="browser">
    <h1>Browse</h1>
    <item-card v-for="item in all" :key="item.key" :id="item.name"></item-card>
  </div>
</template>

<script>
import ItemCard from './ItemCard'

export default {
  name: 'browser',
  data () {
    return {
      all: [
        {
          key: 1,
          name: 'Eric'
        },
        {
          key: 2,
          name: 'Colin'
        }
      ]
    }
  },
  components: {'item-card': ItemCard}
}
</script>

<style>
#browser {
  margin-top: 60px;
}
</style>
