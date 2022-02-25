<template>
  <div class="footer">
    <div class="fx-row container">
      <div class="wrap_left">
        <div class="link_list fx-row">
          <div class="item">
            <div class="title">
              公司简介
            </div>
            <router-link to="/join">关于我们</router-link>
            <router-link to="/join">企业文化</router-link>
          </div>

          <div class="item">
            <div class="title">
              展台搭建
            </div>
            <router-link to="/example">精品案例</router-link>
          </div>

          <div class="item">
            <div class="title">
              施工工艺
            </div>
          </div>
        </div>
      </div>
      <div class="wrap_middle fx-row">
        <img src="../../static/logo.png" alt="" class="brand">
        <img src="../../static/logo_02.png" alt="" class="brand">
        <img src="../../static/logo_03.png" alt="" class="brand">
      </div>
      <div class="wrap_right">
        <div class="text1 fx-row">
          <img src="./../../static/phone.png" alt="" class="phone">
          <span>全国统一免费咨询热线</span>
        </div>
        <div class="text2">000-000-0000</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 219px;
  background-color: #030406;

  .container {
    width: 1280px;
    margin: 0 auto;

    .wrap_left {
      margin-top: 32px;

      .link_list {

        .item {
          margin-right: 44px;

          .title {
            font-size: 15px;
            color: #FFFFFF;
          }

          a {
            margin-top: 4px;
            font-size: 13px;
            color: #A0A0A0;
            display: block;
          }
        }
      }

    }

    .wrap_middle {
      width: 500px;
      margin-left: 80px;
      margin-top: 32px;
      justify-content: space-around;
      .brand {
        width: 100px;
        height: 100px;
      }
    }

    .wrap_right {
      margin-left: 50px;
      margin-top: 32px;
      color: #ffffff;
      .text1{
        font-size: 24px;
        align-items: center;
      }

      .text2{
        font-size: 30px;
        font-weight: 500;
        margin-top: 10px;
      }
    }

  }
}
</style>
