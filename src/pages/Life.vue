<template>
  <div class="main-container">
    <h1 class="home-header">{{ title }}</h1>
    <b-carousel id="life-carousel"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               img-width="1024"
               img-height="480"
               v-model="slide"
               style="margin-top: 40px !important;height: 60%; width: 60%;"
    >

    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           src="/static/images/research/img-research-1.JPG" alt="image slot">
      <h1>Working Desk</h1>
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           src="/static/images/research/img-research-2.JPG" alt="image slot">
      <h1>Kawaya Terminal</h1>
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           src="/static/images/research/img-research-3.JPG" alt="image slot">
      <h1>Kawaya Terminal UI - 1</h1>
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
           src="/static/images/research/img-research-4.JPG" alt="image slot">
      <h1>Kawaya Terminal UI - 2</h1>
    </b-carousel-slide>

    </b-carousel>
    <br><br>
    <topic-info
      image=""
      header="Lift At Sapporo"
      :description="$splitString(stringSrc, 9)"
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
  name: 'Life',
  components: { TopicInfo },
  data () {
    return {
      title: 'Life at University',
      topicHeader: 'Life At Sapporo',
      stringSrc: strings
    }
  }
}
</script>
