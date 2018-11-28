<template>
  <div class="main-container">
    <h1 class="home-header" style="margin-bottom: 20px;">{{ title }}</h1>
    <b-carousel id="foods-carousel"
               controls
               indicators
               background="#ababab"
               :interval="4000"
               img-width="1024"
               img-height="480"
               style="margin-top: 40px !important;height: 60%; width: 60%;"
    >
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/foods/img-food-1.JPG" alt="image slot">
        <h1>Black Thunder</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/foods/img-food-2.JPG" alt="image slot">
        <h1>Okonomiyaki</h1>
      </b-carousel-slide>
      <!-- <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/foods/img-food-3.JPG" alt="image slot">
        <h1>Ramen</h1>
      </b-carousel-slide> -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/foods/img-food-4.JPG" alt="image slot">
        <h1>Curry Soup</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/foods/img-food-5.JPG" alt="image slot">
        <h1>Mabo(Mapo) Tofu Set</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/foods/img-food-6.JPG" alt="image slot">
        <h1>Ramen</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/foods/img-food-7.JPG" alt="image slot">
        <h1>Soba</h1>
      </b-carousel-slide>
      <!-- <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/foods/img-food-8.JPG" alt="image slot">
        <h1>(Giant Crab) Sushi</h1>
      </b-carousel-slide> -->
    </b-carousel>
    <topic-info
      style="margin-top: -10px;"
      image=""
      :header=subTitle[0]
      :description="$splitString(stringSrc, 19)"
      source="" />
    <br><br>
    <b-carousel id="drink-carousel"
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
             src="/static/images/foods/img-drink-1.JPG" alt="image slot">
        <h1 style="text-shadow: 1px 1px 2px black;">Pokka Sapporo Vending Machine</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="/static/images/foods/img-drink-2.JPG" alt="image slot">
        <h1 style="text-shadow: 1px 1px 2px black;">Hokkaido Limited Coca-Cola</h1>
      </b-carousel-slide>
    </b-carousel>
    <topic-info
      style="margin-top: -10px;"
      image=""
      :header=subTitle[1]
      :description="$splitString(stringSrc, 21)"
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
  name: 'Foods',
  components: { TopicInfo },
  data () {
    return {
      title: 'Foods in Hokkaido',
      subTitle: ['Food', 'Drink'],
      stringSrc: strings
    }
  }
}
</script>
