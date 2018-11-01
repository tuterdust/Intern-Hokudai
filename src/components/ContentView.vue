<template>
  <div class="introduction-content">
    <img :src="image" />
    <h1 class="intro-header">{{ header }}</h1>
    <div>
      <p>{{ description }}</p>
      <p>{{ source }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicInfo',
  props: ['image', 'header', 'description', 'source'],
  data () {
    return {
      imgSource: require(this.image)
    }
  }
}

</script>

<style scoped>
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

p {
  text-align: justify;
  white-space: normal;
  margin: 0px 250px;
}

</style>
