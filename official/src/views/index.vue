<template>
  <div class="page">
    <Navbar></Navbar>
    <el-carousel
      :interval="5000"
      trigger="click"
      height="732px"
      arrow="never"
    >
      <el-carousel-item
        v-for="(item,i) in swiper"
        :key="i"
      >
        <img
          :src="baseUrl+ item.image"
          alt=""
          class="item"
          width="100%"
          height="732px"
        >
      </el-carousel-item>
    </el-carousel>

    <div class="tag">
      <div class="title">
        展会设计搭建
      </div>
      <div class="content">美院首席展会设计，全国直属工厂搭建</div>
    </div>

    <div
      class="example type1 fx-row"
      ref="scroll"
    >
      <div class="left">
        <div
          class="container"
          style="width:494px;height:332px"
        >
          <img
            src="../static/show_01.png"
            alt=""
            width="494px"
            height="332px"
            @click="toExample('1')"
          >
        </div>

      </div>
      <div class="right fx-row">
        <div
          class="container"
          style="width:304px;height:167px"
        >
          <img
            src="../static/show_02.png"
            alt=""
            width="304px"
            height="167px"
            class="right_img"
            @click="toExample('2')"
          >
        </div>
        <div
          class="container"
          style="width:396px;height:167px"
        >
          <img
            src="../static/show_03.png"
            alt=""
            width="396px"
            height="167px"
            class="right_img"
            @click="toExample('3')"
          >
        </div>
        <div
          class="container"
          style="width:304px;height:157px"
        >
          <img
            src="../static/show_04.png"
            alt=""
            width="304px"
            height="157px"
            class="right_img"
            @click="toExample('4')"
          >
        </div>
        <div
          class="container"
          style="width:396px;height:157px"
        >
          <img
            src="../static/show_05.png"
            alt=""
            width="396px"
            height="157px"
            class="right_img"
            @click="toExample('5')"
          >
        </div>

      </div>
    </div>

    <!-- <div class="example type1 fx-row">
      <div
        class="item"
        v-for="(l,i) in example"
        :key="i"
        :style="'background-image: url('+ baseUrl +l.image+');'"
      >
        {{l.name}}
      </div>
    </div> -->

    <div class="tag">
      <div class="title">
        设计搭建案例
      </div>
      <div class="content">美院首席展会设计，全国直属工厂搭建</div>
    </div>

    <div class="example type2 fx-row">
      <div
        class="item"
        v-for="(l,i) in pat_examples"
        :key="i"
        @click="toDeatil(l.id)"
      >
        <div v-if="i<8">
          <div class="imgs">
            <img
              :src="baseUrl+l.main_image"
              alt=""
            >
          </div>

          <div class="bottom_text">{{l.name}}</div>
        </div>

      </div>
    </div>

    <div class="tag">
      <div class="title">
        合作企业
      </div>
      <div class="content">美院首席展会设计，全国直属工厂搭建</div>
    </div>

    <div class="example type3">
      <div class="company_list">
        <img
          :src="baseUrl + item.logo_image"
          alt=""
          v-for="(item,i) in work"
          :key="i"
          width="284px"
          height="100px"
        >
      </div>

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/navbar'
import Footer from '@/components/Footer/footer'
import { apiHome } from '@/api/api'

export default {
  data () {
    return {
      baseUrl: baseUrl,
      swiper: [],
      work: [],
      example: [],
      pat_examples: [],
    }
  },
  components: {
    Navbar,
    Footer
  },
  created () {
    this.getHome()
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll, true);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
  },

  methods: {
    getHome () {
      apiHome().then(res => {
        this.swiper = res.data.thumbs
        this.work = res.data.work_togethers
        this.example = res.data.hallcates
        this.pat_examples = res.data.pat_examples
      })
    },

    toExample (id) {
      this.$router.push({
        name: 'example',
        params: {
          id: id
        }
      })
    },

    toDeatil (id) {
      this.$router.push({
        path: '/example/detail',
        query: {
          id: id
        }
      })
    },

    handleScroll () {
      // console.log(this.$refs);
      // console.log(this.$refs.scroll.offsetTop);
    },
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-carousel__button {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

.tag {
  margin-top: 60px;
  text-align: center;
  color: #000000;

  .title {
    font-size: 36px;
  }

  .content {
    font-size: 14px;
  }
}

.example {
  margin: 60px auto;
}

.type1 {
  width: 1212px;
  .right {
    flex-wrap: wrap;
    margin-left: 6px;
    .right_img {
    }
  }
  .container {
    overflow: hidden;
    margin-bottom: 4px;
    margin-right: 4px;
  }
  .container:hover {
    img {
      transform: scale(1.1);
      transition: transform 0.5s ease;
    }
  }
  img {
    cursor: pointer;
  }
}

.type2 {
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 24.8%;
    position: relative;
    margin-bottom: 5px;
    overflow: hidden;
    cursor: pointer;
    height: 323px;

    .img {
      overflow: hidden;
    }
    img {
      // width: 100%;
      // height: 100%;
      width: 476px;
      height: 323px;
    }

    .bottom_text {
      width: 100%;
      height: 45px;
      bottom: 0;
      position: absolute;
      opacity: 0.6;
      background: #000000;
      color: #ffffff;
      text-align: center;
      line-height: 45px;
    }
  }

  .item:hover {
    img {
      transform: scale(1.1);
      transition: transform 0.5s ease;
    }
  }
}

.type3 {
  background-color: #efeef3;
  height: 345px;

  .company_list {
    width: 1220px;
    margin: 0 auto;
    padding-top: 41px;
    img {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
