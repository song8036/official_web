<template>
  <div class="">
    <Navbar></Navbar>
    <img src="../../static/info.png" alt="" class="introduce_img">

    <img src="../../static/connect_us.png" alt="" class="connect_us">
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/navbar'
import Footer from '@/components/Footer/footer'

export default {
  data() {
    return {}
  },

  components: {
    Navbar,
    Footer
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.introduce_img{
  width: 100%;
  height: 854px;
}
.connect_us{
  width: 1044px;
  height: 531px;
  display:block;
  margin: 24px auto;
}
</style>
