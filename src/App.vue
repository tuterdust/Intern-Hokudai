<template>
  <div id="app">
    <vue2-sidebar class="side-nav-bar" :links="navItems" heading="Menu">
    <router-view/>
    </vue2-sidebar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navItems: [{
        label: 'First Item',
        href: '',
        icon: '',
        class: 'item',
        links: ''
      },
      {
        label: 'Second Item',
        href: '',
        icon: '',
        class: 'item',
        links: ''
      },
      {
        label: 'Third Item',
        href: '',
        icon: '',
        class: 'item',
        links: ''
      },
      {
        label: 'Forth Item',
        href: '',
        icon: '',
        class: 'item',
        links: ''
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: #eff7f4;
}

a {
  background: orange;
}

nav, .navbar {
  background: black !important;
}

</style>
