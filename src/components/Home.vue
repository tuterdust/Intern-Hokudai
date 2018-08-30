<template>
  <div class="main-container">
    <vue2-sidebar class="side-nav-bar" :links="navItems" heading="Menu">
    <h1>{{ msg }}</h1>
    <div class="content">
      <p v-for="section in contentData" :key="section.id">{{ section.header }}</p>
    </div>
  </vue2-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Internship at Hokkaido University',
      contentData: [{
        id: 0,
        header: 'Fist Item',
        content: 'Seicomart Da best',
        pictures: [
          'a', 'b', 'c'
        ]
      },
      {
        id: 1,
        header: 'Second Item',
        content: 'セイコーマートへようこそ',
        pictures: [
          'a', 'b', 'c'
        ]
      }],
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
  },
  methods: {
    scrollTo (targetSection) {

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
