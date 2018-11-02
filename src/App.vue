<template>
  <div id="app" >
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
        label: 'Research',
        href: '#/research',
        icon: '',
        class: 'item',
        links: ''
      },
      {
        label: 'Accommodation',
        href: '#/accommodation',
        icon: '',
        class: 'item',
        links: ''
      },
      {
        label: 'Life In University',
        href: '#/life',
        icon: '',
        class: 'item',
        links: ''
      },
      {
        label: 'Foods',
        href: '#/foods',
        icon: '',
        class: 'item',
        links: ''
      },
      {
        label: 'Travel',
        href: '#/travel',
        icon: '',
        class: 'item',
        links: ''
      },
      {
        label: 'Contact',
        href: '#/contact',
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

div {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
