<template>
  <div class="main-container">
    <h1 class="home-header" style="margin-bottom: 20px;">{{ title }}</h1>
    <b-carousel id="travel-furano-carousel"
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
             src="@/assets/images/travel/furano/img-furano-1.jpg" alt="image slot">
        <h1>Mountain Range</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/travel/furano/img-furano-2.jpg" alt="image slot">
        <h1>Lavender</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/travel/furano/img-furano-3.jpg" alt="image slot">
        <h1>Lavender Field</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="@/assets/images/travel/furano/img-furano-4.jpg" alt="image slot">
        <h1>Tomita Farm</h1>
      </b-carousel-slide>
    </b-carousel>
    <topic-info
      style="margin-top: -10px;"
      image=""
      :header=subTitle[0]
      :description=descriptionDict.travel.furano
      source="" />

    <b-carousel id="travel-maruyama-carousel"
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
               src="@/assets/images/travel/maruyama/img-shrine-1.jpg" alt="image slot">
          <h1>Hokkaido Shrine</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/maruyama/img-zoo-1.jpg" alt="image slot">
          <h1>Maruyama Zoo - Seal</h1>
        </b-carousel-slide>
        <b-carousel-slide>
            <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                 src="@/assets/images/travel/maruyama/img-zoo-2.jpg" alt="image slot">
            <h1>Maruyama Zoo - Polar Bear</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/maruyama/img-zoo-3.jpg" alt="image slot">
          <h1>Maruyama Zoo - Tiger</h1>
        </b-carousel-slide>
         <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/maruyama/img-zoo-4.jpg" alt="image slot">
          <h1>Maruyama Zoo - Red Panda</h1>
        </b-carousel-slide>
      </b-carousel>
      <topic-info
        style="margin-top: -10px;"
        image=""
        :header=subTitle[1]
        :description=descriptionDict.travel.maruyama
        source="" />

      <b-carousel id="travel-otaru-carousel"
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
               src="@/assets/images/travel/otaru/img-otaru-1.jpg" alt="image slot">
          <h1>Otaru Canal</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/otaru/img-otaru-2.jpg" alt="image slot">
          <h1>Wharf</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/otaru/img-otaru-3.jpg" alt="image slot">
          <h1>Hill in Otaru</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/otaru/img-otaru-4.jpg" alt="image slot">
          <h1>Outskirt of Otaru</h1>
        </b-carousel-slide>
      </b-carousel>
      <topic-info
        style="margin-top: -10px;"
        image=""
        :header=subTitle[2]
        :description=descriptionDict.travel.otaru
        source="" />

      <b-carousel id="travel-shiroi-koibito-carousel"
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
               src="@/assets/images/travel/shiroi-koibito/img-shiroi-koibito-1.jpg" alt="image slot">
          <h1>Shiroi Koibito Chocolate Factory</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/shiroi-koibito/img-shiroi-koibito-2.jpg" alt="image slot">
          <h1>Fountain</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/shiroi-koibito/img-shiroi-koibito-3.jpg" alt="image slot">
          <h1>Big Shiroi Koibito Calendar</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/shiroi-koibito/img-shiroi-koibito-4.jpg" alt="image slot">
          <h1>Consadole Sapporo Practice Field</h1>
        </b-carousel-slide>
      </b-carousel>
      <topic-info
        style="margin-top: -10px;"
        image=""
        :header=subTitle[3]
        :description=descriptionDict.travel.chocofactory
        source="" />

      <b-carousel id="travel-moiwa-carousel"
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
               src="@/assets/images/travel/moiwa/img-moiwa-1.jpg" alt="image slot">
          <h1>Cable Car</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/moiwa/img-moiwa-2.jpg" alt="image slot">
          <h1>Ropeway</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/moiwa/img-moiwa-3.jpg" alt="image slot">
          <h1>Lovers Sanctuary - 1</h1>
        </b-carousel-slide>
        <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
               src="@/assets/images/travel/moiwa/img-moiwa-4.jpg" alt="image slot">
          <h1>Lovers Sanctuary - 2</h1>
        </b-carousel-slide>
      </b-carousel>
      <topic-info
        style="margin-top: -10px;"
        image=""
        :header=subTitle[4]
        :description=descriptionDict.travel.moiwa
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
  name: 'Travel',
  components: { TopicInfo },
  data () {
    return {
      subTitle: ['Furano', 'Maruyama', 'Otaru', 'Shiroi-Koibito', 'Moiwa'],
      title: 'Travel',
      descriptionDict: descriptionDict
    }
  }
}
</script>
