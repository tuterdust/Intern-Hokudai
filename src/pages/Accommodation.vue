<template>
  <div class="main-container">
    <h1 class="home-header">{{ title }}</h1>
    <b-carousel id="accommodation-carousel"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               img-width="1024"
               img-height="480"
               v-model="slide"
               style="margin-top: 40px !important;height: 40%; width: 40%;"
      >
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/accommodation/img-dorm-1.jpg" alt="image slot">
        <h1>Inside the room</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/accommodation/img-dorm-2.jpg" alt="image slot">
        <h1>Sapporo Station - 1</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/accommodation/img-dorm-3.jpg" alt="image slot">
        <h1>Sapporo Station - 2</h1>
      </b-carousel-slide>
    </b-carousel>
    <br><br>
    <topic-info
      image=""
      header="Hokkaido University International House Kita8"
      :description="$splitString(stringSrc, 5)"
      source="" />
    <br><br>
    <topic-info
        style="margin-top: -40px;"
        image=""
        header="More Options"
        :description="$splitString(stringSrc, 7)"
        source="" />
    <button class="btn btn-info back-to-top-btn" v-on:click="$backToPageTop()">Back To Top</button>
  </div>
</template>

<style lang="css">
</style>

<script>
import strings from '../assets/strings.txt'
import TopicInfo from '../components/ContentView'
export default {
  name: 'Accommodation',
  components: { TopicInfo },
  data () {
    return {
      title: 'Accommodation',
      stringSrc: strings,
      slide: 0
    }
  }
}
</script>
