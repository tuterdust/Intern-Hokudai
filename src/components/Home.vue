<template>
  <div class="main-container">
    <vue2-sidebar :links="navItems" heading="Menu">
    <h1>{{ msg }}</h1>
  </vue2-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Internship at Hokkaido University',
      navItems: [{
        label: 'First Item',
        href: '',
        icon: '',
        class: 'item',
        links: ''
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
