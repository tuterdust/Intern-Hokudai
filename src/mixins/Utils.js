import router from '@/router'

export default {
  methods: {
    $changePage (url) {
      this.$backToPageTop()
      router.push(url)
    },
    $backToPageTop () {
      window.scrollTo(0, 0)
    }
  }
}
