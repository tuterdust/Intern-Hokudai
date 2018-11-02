<template>
  <div class="main-container">
    <h1 class="home-header">{{ title }}</h1>
    <b-carousel id="foods-carousel"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               img-width="1024"
               img-height="480"
               v-model="slide"
               @sliding-start="onSlideStart"
               @sliding-end="onSlideEnd"
               style="margin-top: 40px !important;"
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
    <br><br>
    <topic-info
      image=""
      header="k"
      description="n"
      source="c" />
  </div>
</template>

<style lang="css">
</style>

<script>
import TopicInfo from '../components/ContentView'
export default {
  name: 'Life',
  components: { TopicInfo },
  data () {
    return {
      title: 'Life at University'
    }
  }
}
</script>
