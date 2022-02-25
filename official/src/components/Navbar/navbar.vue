<template>
  <div class="navbar fx-row">
    <img
      src="./../../static/logo.png"
      alt=""
      class="logo"
    >
    <div class="link_list fx-row">
      <router-link to="/index">网站首页</router-link>
      <router-link :to="{name:'example',params:{id:5}}">案例展示</router-link>
      <router-link to="/company">公司简介</router-link>
      <router-link to="/join">联系我们</router-link>
    </div>

    <div class="right fx-row">
      <div class="wrap">
        <div class="text1 fx-row">
          <img
            src="./../../static/phone.png"
            alt=""
            class="phone"
          >
          <span>展览设计搭建咨询</span>
        </div>
        <div class="text2">000-000-0000</div>
        <div class="text3">总部热线：000-000-0000</div>
      </div>
      <div class="wrap">
        <img
          src=""
          alt=""
          class="qrcode"
        >
        <div class="text4">扫一扫</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 1280px;
  margin: 0 auto;
  height: 124px;
  align-items: center;

  .logo {
    width: 100px;
    height: 100px;
  }

  .link_list {
    width: 720px;
    // margin: 0 30px;
    margin-left: 80px;
    a {
      display: inline-block;
      width: 180px;
      text-align: center;
      color: #424242;
      font-size: 18px;
      font-weight: 600;
    }

    .router-link-active {
      color: #fe302f;
    }
  }

  .right {
    margin-left: 60px;
    .wrap {
      margin-left: 40px;
      margin-top: 15px;
      .text1 {
        align-items: center;
        font-size: 16px;

        .phone {
          width: 22px;
          height: 22px;
        }
      }

      .text2 {
        font-size: 22px;
        font-weight: 600;
      }

      .text3 {
        font-size: 14px;
      }

      .text4 {
        font-size: 12px;
        text-align: center;
      }
      .qrcode {
        width: 68px;
        height: 68px;
      }
    }
  }
}
</style>
