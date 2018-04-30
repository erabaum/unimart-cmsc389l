<template>
  <div id="item">
    <h1>Item {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
      id: $route.params.id
    }
  }
}
</script>

<style>
#item {
  margin-top: 60px;
}
</style>
