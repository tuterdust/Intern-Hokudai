<template>
  <div id="app" >
    <vue2-sidebar class="side-nav-bar" id="nav-bar" :links="navItems" heading="Menu">
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
        label: 'Home',
        href: '#/',
        icon: '',
        class: 'item',
        links: ''
      },
      {
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
        label: 'Life in Hokkaido',
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

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .back-to-top-btn {
    align-self: flex-end !important;
    margin-right: 5%;
    margin-bottom: 1%;
  }

  a {
    background: orange;
  }

  nav, .navbar {
    background: black !important;
  }

  .bg-light {
    background-color: #eff7f4 !important;
  }

  div {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }

  b-carousel {
    text-shadow: 1px 1px 2px #333;
  }
</style>
