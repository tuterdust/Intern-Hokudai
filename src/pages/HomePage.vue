
<template>
  <div class="main-container">
    <h1 class="home-header">{{ title }}</h1>
    <br><br><br><br>
    Carousel Here
    <br><br><br><br>
    <p>{{ description }}</p>
    <br><br><br><br>
    <div class="content">
      <p v-for="section in contentData" :key="section.id">{{ section.header }}</p>
    </div>
  </div>
</template>

<script>
import strings from '../assets/strings.txt'
export default {
  name: 'HomePage',
  data () {
    return {
      title: 'Internship at Hokkaido University',
      description: this.splitString(strings, 1),
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
      }]
    }
  },
  methods: {
    scrollTo (targetSection) {

    },
    splitString (str, index) {
      return str.split(': ')[index]
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
.home-header {
  font-size: 50px;
}
p {
  text-align: justify;
  white-space: normal;
  margin: 250px;
}
</style>
