<template>
  <div class="introduction-content">
    <img :src=image />
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
  props: ['image', 'header', 'description', 'source']
}

</script>

<style scoped>
.introduction-content {
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.intro-header {
  width: 80%;
  margin: 2% auto;
}

p {
  text-align: justify;
  white-space: pre-line;
  margin: 0px 250px;
}

img {
  max-width: 500px;
}

</style>
