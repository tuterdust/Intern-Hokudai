<template>
  <div class="main-container">
    <h1 class="home-header">{{ title }}</h1>
    <b-carousel id="research-carousel"
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
             src="@/assets/images/research/img-research-1.jpg" alt="image slot">
        <h1>Working Desk</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/research/img-research-2.jpg" alt="image slot">
        <h1>Kawaya Terminal</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/research/img-research-3.jpg" alt="image slot">
        <h1>Kawaya Terminal UI - 1</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/research/img-research-4.jpg" alt="image slot">
        <h1>Kawaya Terminal UI - 2</h1>
      </b-carousel-slide>
    </b-carousel>
    <br><br>
    <topic-info
      image=""
      header="Personal Healthcare Terminal"
      :description=descriptionDict.research
      source="" />
    <button class="btn btn-info back-to-top-btn" v-on:click="$backToPageTop()">Back To Top</button>
  </div>
</template>

<script>
import descriptionDict from '@/assets/description.json'
import TopicInfo from '@/components/ContentView'

export default {
  name: 'Research',
  components: { TopicInfo },
  data () {
    return {
      title: 'Research',
      descriptionDict: descriptionDict
    }
  }
}
</script>
