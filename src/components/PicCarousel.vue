<template lang="html">
  <div class="pic_carousel">
    <h1>{{ msg1 }}</h1>
    <button type="button" name="button" v-on:click="alertMsg">click me</button>
  </div>
</template>

<script>
export default {
  name: 'PicCarousel',
  data () {
    return {
      msg1: 'Hello Carousel'
    }
  },
  methods: {
    alertMsg () {
      alert('Clicked')
    }
  }
}
</script>

<style lang="css">
</style>
