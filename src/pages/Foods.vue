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
               style="margin-top: 40px !important;height: 40%; width: 40%;"
    >
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/foods/img-food-1.jpg" alt="image slot">
        <h1>Black Thunder</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/foods/img-food-2.jpg" alt="image slot">
        <h1>Okonomiyaki</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/foods/img-food-3.jpg" alt="image slot">
        <h1>Curry Soup</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/foods/img-food-4.jpg" alt="image slot">
        <h1>Mabo(Mapo) Tofu Set</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/foods/img-food-5.jpg" alt="image slot">
        <h1>Ramen</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/foods/img-food-6.jpg" alt="image slot">
        <h1>Soba</h1>
      </b-carousel-slide>
    </b-carousel>
    <topic-info
      style="margin-top: -10px;"
      image=""
      :header=subTitle[0]
      :description=descriptionDict.food
      source="" />

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
             src="@/assets/images/foods/img-drink-1.jpg" alt="image slot">
        <h1 style="text-shadow: 1px 1px 2px black;">Pokka Sapporo Vending Machine</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/foods/img-drink-2.jpg" alt="image slot">
        <h1 style="text-shadow: 1px 1px 2px black;">Hokkaido Limited Coca-Cola</h1>
      </b-carousel-slide>
    </b-carousel>
    <topic-info
      style="margin-top: -10px;"
      image=""
      :header=subTitle[1]
      :description=descriptionDict.drink
      source="" />
    <button class="btn btn-info back-to-top-btn" v-on:click="$backToPageTop()">Back To Top</button>
  </div>
</template>

<style lang="css">
</style>

<script>
import descriptionDict from '@/assets/description.json'
import TopicInfo from '@/components/ContentView'

export default {
  name: 'Foods',
  components: { TopicInfo },
  data () {
    return {
      title: 'Foods in Hokkaido',
      subTitle: ['Food', 'Drink'],
      descriptionDict: descriptionDict
    }
  }
}
</script>
