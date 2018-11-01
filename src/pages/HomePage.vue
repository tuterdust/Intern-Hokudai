
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
    <div class="introduction-content">
      <img src="../assets/images/hokudai-logo.png" />
      <h1 class="intro-header">{{ universityIntro.header }}</h1>
      <div>
        <p>{{ universityIntro.description }}</p>
        <p>{{ universityIntro.source }}</p>
      </div>
    </div>
    <div class="introduction-content">
      <img style="width: 50%; height: 50%;" src="../assets/images/ist-img.jpg" />
      <h1 class="intro-header">{{ facultyIntro.header }}</h1>
      <div>
        <p>{{ facultyIntro.description }}</p>
        <p>{{ facultyIntro.source }}</p>
      </div>
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
      return str.split(': ')[++index]
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

.introduction-content {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-header {
  width: 80%;
  margin: auto;
}

</style>
