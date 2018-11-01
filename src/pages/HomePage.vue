
<template>
  <div class="main-container">
    <h1 class="home-header">{{ title }}</h1>
    <br><br><br><br>
    <b-carousel id="university-pv-carousel"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               img-width="1024"
               img-height="480"
               v-model="slide"
               @sliding-start="onSlideStart"
               @sliding-end="onSlideEnd"
    >
    <!-- Text slides with image -->
    <b-carousel-slide caption="First slide"
                      text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                      img-src="https://picsum.photos/1024/480/?image=52"
    ></b-carousel-slide>

    <!-- Slides with custom text -->
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
      <h1>Hello world!</h1>
    </b-carousel-slide>

    <!-- Slides with image only -->
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
    </b-carousel-slide>

    <!-- Slides with img slot -->
    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           src="https://picsum.photos/1024/480/?image=55" alt="image slot">
    </b-carousel-slide>

    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
        ut lacus vel interdum.
      </p>
    </b-carousel-slide>
    </b-carousel>
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
        <img :src="section.pictures" v-on:click="changePage(section.link)">
      </div>
    </div>
  </div>
</template>

<script>
import strings from '../assets/strings.txt'
import router from '../router'
import TopicInfo from '../components/ContentView'
export default {
  name: 'HomePage',
  components: { TopicInfo },
  data () {
    return {
      title: 'Internship at Hokkaido University',

      universityIntro: {
        header: 'Hokkaido University',
        description: this.splitString(strings, 1),
        source: '(https://www.global.hokudai.ac.jp/prospective-students/why-hokkaido-university)'
      },

      facultyIntro: {
        header: 'Graduate School of Information Science and Technology',
        description: this.splitString(strings, 3),
        source: '(https://www.ist.hokudai.ac.jp/eng/about/ideal.html)'
      },

      sections: [{
        id: 0,
        title: 'section1',
        pictures: require('@/assets/images/img-dorm-1.jpg'),
        link: '/content1'
      },
      {
        id: 1,
        title: 'section2',
        pictures: require('@/assets/images/img-dorm-1.jpg'),
        link: 'Content1'
      },
      {
        id: 2,
        title: 'section3',
        pictures: require('@/assets/images/img-dorm-1.jpg'),
        link: 'Content1'
      },
      {
        id: 3,
        title: 'section3',
        pictures: require('@/assets/images/img-dorm-1.jpg'),
        link: 'Content1'
      },
      {
        id: 4,
        title: 'section4',
        pictures: require('@/assets/images/img-dorm-1.jpg'),
        link: 'Content1'
      },
      {
        id: 5,
        title: 'section5',
        pictures: require('@/assets/images/img-dorm-1.jpg'),
        link: 'Content1'
      },
      {
        id: 6,
        title: 'section6',
        pictures: require('@/assets/images/img-dorm-1.jpg'),
        link: 'Content1'
      }]
    }
  },
  methods: {
    scrollTo (targetSection) {

    },
    splitString (str, index) {
      return str.split(': ')[++index]
    },
    changePage (url) {
      router.push(url)
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

b-carousel {
  text-shadow: 1px 1px 2px #333;
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

</style>
