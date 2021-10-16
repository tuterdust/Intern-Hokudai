<template>
  <div class="main-container">
    <h1 class="home-header" style="margin-bottom: 20px;">{{ title }}</h1>
    <b-carousel id="life-nh-carousel"
                 controls
                 indicators
                 background="#ababab"
                 :interval="4000"
                 img-width="1024"
                 img-height="480"
                 style="margin-top: 40px !important;height: 40%; width: 40%;"
      >
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/life/neighborhood/img-nh-5.jpg" alt="image slot">
          <h1>Odori - 1</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/life/neighborhood/img-nh-2.jpg" alt="image slot">
          <h1>Odori - 2</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/life/neighborhood/img-nh-3.jpg" alt="image slot">
          <h1>Arcade Center</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/life/neighborhood/img-nh-4.jpg" alt="image slot">
          <h1>Hokkaido Residence</h1>
        </b-carousel-slide>
      </b-carousel>
    <topic-info
        style="margin-top: -10px;"
        image=""
        :header=subTitle[0]
        :description="$splitString(stringSrc, 11)"
        source="" />
    <br><br>
    <b-carousel id="life-event-carousel"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               img-width="1024"
               img-height="480"
               style="margin-top: 40px !important;height: 40%; width: 40%;"
    >
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/event/img-hanabi-6.jpg" alt="image slot">
        <h1>Hanabi Taikai - 1</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/event/img-hanabi-2.jpg" alt="image slot">
        <h1>Hanabi Taikai - 2</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/event/img-hanabi-3.jpg" alt="image slot">
        <h1>Hanabi Taikai - 3</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/event/img-hanabi-4.jpg" alt="image slot">
        <h1>Hanabi Taikai - 4</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/event/img-hanabi-5.jpg" alt="image slot">
        <h1>Hanabi Taikai - 5</h1>
      </b-carousel-slide>
    </b-carousel>
    <topic-info
        style="margin-top: -10px;"
        image=""
        :header=subTitle[1]
        :description="$splitString(stringSrc, 13)"
        source="" />
    <br><br>
    <b-carousel id="life-transport-carousel"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               img-width="1024"
               img-height="480"
               style="margin-top: 40px !important;height: 40%; width: 40%;"
    >
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/transportation/img-transport-1.jpg" alt="image slot">
        <h1>Sapporo Subway - 1</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/transportation/img-transport-2.jpg" alt="image slot">
        <h1>Sapporo Subway - 2</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/transportation/img-transport-3.jpg" alt="image slot">
        <h1>Local Train</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/transportation/img-transport-4.jpg" alt="image slot">
        <h1>Street Car</h1>
      </b-carousel-slide>
    </b-carousel>
    <topic-info
        style="margin-top: -10px;"
        image=""
        :header=subTitle[2]
        :description="$splitString(stringSrc, 15)"
        source="" />
    <br><br>
    <b-carousel id="life-university-carousel"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               img-width="1024"
               img-height="480"
               style="margin-top: 40px !important;height: 40%; width: 40%;"
    >
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/university/img-uni-1.jpg" alt="image slot">
        <h1>BBQ-Party</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/university/img-uni-5.jpg" alt="image slot">
        <h1>Snow Crystal Monument</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/university/img-uni-3.jpg" alt="image slot">
        <h1>Pond</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/life/university/img-uni-4.jpg" alt="image slot">
        <h1>Waterfall</h1>
      </b-carousel-slide>
    </b-carousel>
    <topic-info
        style="margin-top: -10px;"
        image=""
        :header=subTitle[3]
        :description="$splitString(stringSrc, 17)"
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
  name: 'life',
  components: { TopicInfo },
  data () {
    return {
      title: 'Life in Hokkaido',
      subTitle: ['Sapporo', 'Event', 'Transportation', 'University'],
      topicHeader: 'life At Sapporo',
      stringSrc: strings
    }
  }
}
</script>
