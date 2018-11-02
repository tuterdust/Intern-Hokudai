<template>
  <div class="main-container">
    <h1 class="home-header">{{ title }}</h1>
    <div class="contact-div">
      <p class="address">Address: {{ address[0] }}</p>
    </div>
    <a :href="sourceLink1" class="source-link">More Information at {{ sourceLink1 }}</a>
    <br><br>
    <div class="contact-div">

    </div>
    <a :href="sourceLink2" class="source-link">More Information at {{ sourceLink2 }}</a>
    <topic-info
      image=""
      header="k"
      description="n"
      source="c" />
  </div>
</template>

<style lang="css" scoped="">
  .address {
    margin: 0px 20%;
    font-size: 20px;
  }

  .source-link {
    font-size: 24px;
    background-color: transparent !important;
  }
</style>

<script>
import TopicInfo from '../components/ContentView'
export default {
  name: 'Contact',
  components: { TopicInfo },
  data () {
    return {
      title: 'Contact',
      subTitle: ['',
        ''],
      address: [`
        Kita 14, Nishi 9, Kita-ku, Sapporo, Hokkaido, 060-0814, Japan
        Graduate School of Information Science and Technology, Hokkaido University`],
      sourceLink1: 'https://www.ist.hokudai.ac.jp/eng/access/',
      sourceLink2: 'https://ime.ist.hokudai.ac.jp/new/access'
    }
  }
}
</script>
