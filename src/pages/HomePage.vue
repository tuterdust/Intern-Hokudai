<template>
  <div class="main-container">
    <h1 class="home-header">{{ title }}</h1>
    <b-carousel id="university-pv-carousel"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               img-width="1024"
               img-height="480"
               v-model="slide"
               style="margin-top: 40px !important; width: 100%;"
    >
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" wdth="1024" height="480"
           src="/static/images/cover/img-cover-1.JPG" alt="image slot">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           src="/static/images/cover/img-cover-2.JPG" alt="image slot">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           src="/static/images/cover/img-cover-3.JPG" alt="image slot">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           src="/static/images/cover/img-cover-4.JPG" alt="image slot">
    </b-carousel-slide>
    </b-carousel>
    <br><br>
    <topic-info
      image="static/images/hokudai-logo.png"
      :header="universityIntro.header"
      :description="universityIntro.description"
      :source="universityIntro.source" />
    <topic-info
      image="static/images/ist-img.jpg"
      :header="facultyIntro.header"
      :description="facultyIntro.description"
      :source="facultyIntro.source" />
    <div class="grid-sections-link">
      <div v-for="section in sections" :key="section.id" class="section">
        <h2>{{ section.title }}</h2>
        <img :src="section.pictures" v-on:click="$changePage(section.link)">
      </div>
    </div>
    <button class="btn btn-info back-to-top-btn" v-on:click="$backToPageTop()">Back To Top</button>
  </div>
</template>

<script>
import strings from '../assets/strings.txt'
import TopicInfo from '../components/ContentView'
export default {
  name: 'HomePage',
  components: { TopicInfo },
  data () {
    return {
      title: 'Internship at Hokkaido University',

      universityIntro: {
        header: 'Hokkaido University',
        description: this.$splitString(strings, 1),
        source: '(https://www.global.hokudai.ac.jp/prospective-students/why-hokkaido-university)'
      },

      facultyIntro: {
        header: 'Graduate School of Information Science and Technology',
        description: this.$splitString(strings, 3),
        source: '(https://www.ist.hokudai.ac.jp/eng/about/ideal.html)'
      },

      sections: [{
        id: 0,
        title: 'Research',
        pictures: require('@/assets/images/img-research-1.jpg'),
        link: '/research'
      },
      {
        id: 1,
        title: 'Accommodation',
        pictures: require('@/assets/images/img-dorm-1.jpg'),
        link: '/accommodation'
      },
      {
        id: 2,
        title: 'Life in University',
        pictures: require('@/assets/images/img-life-1.jpg'),
        link: '/life'
      },
      {
        id: 3,
        title: 'Foods',
        pictures: require('@/assets/images/img-food-1.jpg'),
        link: '/foods'
      },
      {
        id: 4,
        title: 'Travel',
        pictures: require('@/assets/images/img-furano-1.jpg'),
        link: '/travel'
      },
      {
        id: 5,
        title: 'Contact',
        pictures: require('@/assets/images/img-contact-1.jpg'),
        link: '/contact'
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

.home-header {
  font-size: 50px;
}

p {
  text-align: justify;
  white-space: normal;
  margin: 0px 250px;
}

.grid-sections-link {
  margin-top: 40px;
  display: grid;
  justify-content: center;
  grid-template-columns: 250px 250px 250px;
}

.section {
  position: relative;
}

.section h2 {
  color: blue;
  overflow: auto;
}

.section img {
  width: 100%;
  height: 100%;
}

.img-fluid {
  height: 700px !important;
}

</style>
