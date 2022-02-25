<template>
  <div class="">
    <Navbar></Navbar>
    <div class="container">
      <div class="detail_wrap fx-row">
        <div class="left_wrap">
          <img
            v-if="main_image"
            :src="baseUrl+ main_image"
            alt=""
            class="current_img"
            width="890px"
            height="595px"
          >

          <div class="select fx-row">
            <div class="select_imgs">
              <img
                :src="baseUrl+ l"
                alt=""
                v-for="(l,i) in imgs"
                :key="i"
                class="img"
                @click="select(i)"
              >
            </div>
          </div>

          <div class="list fx-row">
            <div class="item fx-row">
              <div class="item_name">行业分类</div>
              <div class="item_value">{{hall_cate_name}}</div>
            </div>
            <div class="item fx-row">
              <div class="item_name">展台名称</div>
              <div class="item_value">{{name}}</div>
            </div>
            <div class="item fx-row">
              <div class="item_name">主设计师</div>
              <div class="item_value">{{author}}</div>
            </div>
          </div>

          <div
            class="intro"
            v-html="content"
          >
          </div>
        </div>
        <div class="right_wrap">
          <div class="title">
            本案例设计师简介
          </div>
          <div class="author">
            <img
              src="../../static/dianyi.png"
              alt=""
              class="logo"
            >
            <div class="author_info">
              <div class="real_name">姓名：{{author}}</div>
              <div class="job">职位：{{job}}</div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/navbar'
import Footer from '@/components/Footer/footer'
import { apiGetExampleInfo } from '@/api/api'
export default {
  data () {
    return {
      baseUrl: baseUrl,
      main_image: '',
      content: '',
      hall_cate_name:'',
      name:'',
      imgs: [],
      author:'',
      job:'',
    }
  },

  components: {
    Navbar,
    Footer
  },

  created () {
    this.getData();
  },

  methods: {

    getData () {
      let data = {
        id: this.$route.query.id
      }
      apiGetExampleInfo(data).then(res => {
        this.main_image = res.data.main_image
        if (res.data.small_images != '') {
          this.imgs = res.data.small_images.split(',')
        }
        this.content = res.data.content
        this.hall_cate_name = res.data.hall_cate_name
        this.name = res.data.name
        this.author =res.data.author
        this.job =res.data.job
      })
    },


    select (i) {
      this.main_image = this.imgs[i]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #eaeaea;
  padding-top: 80px;
  padding-bottom: 136px;

  .detail_wrap {
    padding: 20px;
    width: 1160px;
    height: 998px;
    margin: 0 auto;
    background-color: #fff;
    .left_wrap {
      width: 890px;

      .select {
        margin-top: 10px;
        width: 866px;
        height: 101px;
        background: #f4f4f4;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px;
        .select_imgs {
          .img {
            width: 106px;
            height: 70px;
            margin-right: 24px;
            cursor: pointer;
          }
        }
      }

      .list {
        width: 890px;
        height: 53px;
        border: 1px solid #c4c4c4;
        align-items: center;
        margin-top: 12px;
        .item {
          text-align: center;
          height: 53px;
          .item_name {
            width: 96px;
            line-height: 53px;
            background-color: #f2f2f2;
          }
          .item_value {
            width: 200px;
            line-height: 53px;
            background: #ffffff;
          }
        }
      }

      .intro {
        margin-top: 31px;
      }
    }
    .right_wrap {
      margin-left: 60px;
      margin-top: 20px;
      .title {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
      }
      .author {
        margin-top: 16px;

        .logo {
          width: 202px;
          height: 202px;
        }

        .author_info {
          border: 1px solid #c4c4c4;
          text-align: center;
          height: 80px;
          .real_name {
            color: #000;
            font-size: 16px;
            margin-top: 15px;
          }

          .job {
            margin-top: 15px;
            font-size: 14px;
            color: #636363;
          }
        }
      }
    }
  }
}
</style>
