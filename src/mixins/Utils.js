import router from '../router'

export default {
  methods: {
    $splitString (str, index) {
      return str.split(': ')[++index]
    },
    $changePage (url) {
      this.$backToPageTop()
      router.push(url)
    },
    $backToPageTop () {
      window.scrollTo(0, 0)
    }
  }
}
