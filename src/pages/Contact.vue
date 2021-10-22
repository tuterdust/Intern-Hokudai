<template>
  <div class="main-container">
    <h1 class="home-header">{{ title }}</h1>
    <div class="contact-div">
      <h2>{{ subTitle[0] }}</h2>
      <p class="address">Address: {{ address[0] }}</p>
      <a :href="sourceLink1" class="source-link">More Information at {{ sourceLink1 }}</a>
    </div>
    <div class="contact-div">
      <h2>{{ subTitle[1] }}</h2>
      <p class="address">Address: {{ address[1] }}</p>
      <a :href="sourceLink2" class="source-link">More Information at {{ sourceLink2 }}</a>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .address {
    margin: 0px 20%;
    font-size: 20px;
  }

  .source-link {
    font-size: 24px;
    background-color: transparent !important;
  }

  .contact-div {
    margin: 20px 0px;
  }
</style>

<script>
export default {
  name: 'Contact',
  components: {},
  data () {
    return {
      title: 'Contact',
      subTitle: ['Graduate School of Information Science and Technology',
        'Laboratory of Information Media Environment'],
      address: [`
        Kita 14, Nishi 9, Kita-ku, Sapporo, Hokkaido, 060-0814, Japan
        Graduate School of Information Science and Technology, Hokkaido University`,
      `9 Chome Kita 14 Jonishi, Kita, Sapporo, Hokkaido 060-0814, Japan
        Graduate School of Information Science and Technology, Hokkaido University`],
      sourceLink1: 'https://www.ist.hokudai.ac.jp/eng/access/',
      sourceLink2: 'https://ime.ist.hokudai.ac.jp/new/access'
    }
  }
}
</script>
