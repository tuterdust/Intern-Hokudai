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
               style="margin-top: 40px !important; height: 60%; width: 80%;"
    >
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           :src="require(`@/assets/images/cover/img-cover-1.jpg`)" alt="image slot">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           :src="require(`@/assets/images/cover/img-cover-2.jpg`)" alt="image slot">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           :src="require(`@/assets/images/cover/img-cover-3.jpg`)" alt="image slot">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           :src="require(`@/assets/images/cover/img-cover-4.jpg`)" alt="image slot">
    </b-carousel-slide>
    </b-carousel>
    <topic-info
      :image="require(`@/assets/images/hokudai-logo.png`)"
      :header="universityIntro.header"
      :description="universityIntro.description"
      :source="universityIntro.source"
      style="margin-bottom: 50px;" />
    <topic-info
      :image="require(`@/assets/images/ist-img.jpg`)"
      :header="facultyIntro.header"
      :description="facultyIntro.description"
      :source="facultyIntro.source"
      style="margin-top: -10px !important" />
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
import descriptionDict from '@/assets/description.json'
import TopicInfo from '@/components/ContentView'

export default {
  name: 'HomePage',
  components: { TopicInfo },
  data () {
    return {
      title: 'Internship at Hokkaido University',
      slide: 0,

      universityIntro: {
        header: 'Hokkaido University',
        description: descriptionDict.intro,
        source: '(https://www.global.hokudai.ac.jp/prospective-students/why-hokkaido-university)'
      },

      facultyIntro: {
        header: 'Graduate School of Information Science and Technology',
        description: descriptionDict.ist,
        source: '(https://www.ist.hokudai.ac.jp/eng/about/ideal.html)'
      },

      sections: [{
        id: 0,
        title: 'Research',
        pictures: require('@/assets/images/img-research-link.jpg'),
        link: '/research'
      },
      {
        id: 1,
        title: 'Accommodation',
        pictures: require('@/assets/images/img-dorm-link.jpg'),
        link: '/accommodation'
      },
      {
        id: 2,
        title: 'Life in University',
        pictures: require('@/assets/images/img-life-link.jpg'),
        link: '/life'
      },
      {
        id: 3,
        title: 'Foods',
        pictures: require('@/assets/images/img-food-link.jpg'),
        link: '/foods'
      },
      {
        id: 4,
        title: 'Travel',
        pictures: require('@/assets/images/img-furano-link.jpg'),
        link: '/travel'
      },
      {
        id: 5,
        title: 'Contact',
        pictures: require('@/assets/images/img-contact-link.jpg'),
        link: '/contact'
      }]
    }
  }
}
</script>

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
  grid-auto-rows: 250px 250px;
}

.section {
  position: relative;
}

.section h2 {
  color: blue;
  overflow: hidden;
}

.section img {
  object-fit:cover;
  width: 100%;
  max-height: 100%;
}

.img-fluid {
  height: 700px !important;
}

</style>
