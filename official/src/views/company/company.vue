<template>
  <div class="">
    <Navbar></Navbar>
    <img
      src="../../static/company.png"
      alt=""
      width="100%"
      height="700px"
    >

    <div class="contianer">
      <div class="logo_wrap">
        <img
          src="../../static/intro.png"
          alt=""
          width="176px"
          height="176px"
        >
      </div>

      <div class="wrap fx-row type1">
        <div class="content">
          <p>典毅展览</p>
          <p>典毅展览拥有国家级展会搭建资质、中国展览协会成员、通过了ISO9001/2015质量认证体系。</p>
          <p>典毅展览下设：马腾广州总公司、北京、上海、深圳、杭州、成都、东莞、青岛、重庆、苏州、长沙、南京、武汉、天津、济南、郑州、厦门等20家分公司和4家办处。</p>
          <p>典毅展览拥有员工超过200人，设计师团队超过20人、专业展览项目经理超过80个，是国内最具规模的展会设计装修企业之一。</p>
          <p> 品质升级后的马腾展览立足国内一线展览城市，将以品牌化、优质化、全方位化、体系化的优势为客户创造更好的展览，创造更高的展览价值，让选择马腾的客户体验高端展览。</p>
        </div>
        <div>
          <img
            src="../../static/intro_detail01.png"
            alt=""
            width="525px"
            height="525px"
          >
        </div>
      </div>
      <div class="wrap fx-row type2">
        <img
          src="../../static/intro_detail02.png"
          alt=""
          width="542px"
          height="573px"
        >
        <div class="content">
          <div class="title">我们的定位</div>
          <div class="text">高品质展览服务方案提供商</div>
          <div class="title">我们的使命</div>
          <div class="text">每一次，创造更优秀的展览</div>
          <div class="title">我们的核心价值观</div>
          <div class="text">爱与责任：做最精彩的自己</div>

          <div class="card">
            <div class="text1">客户服务九大理念</div>
            <div class="text2">CUSTOMER SERVICE CONCEPT</div>
          </div>

          <div class="nine_mind">
            <div>①除我以外，所有人都是我的客户。</div>
            <div>②我要针对每个客户的需求提供超预期的服务。</div>
            <div>③我对解决客户问题负有使命感。</div>
            <div>④客户的需求是我成长的养料。</div>
            <div>⑤我要履行我对客户的说有承诺。</div>
            <div>⑥我每天微笑对待所有客户并用眼睛与客户交流。</div>
            <div>⑦我不回答客户“我不知道”。</div>
            <div>⑧我做任何事情都会善始善终并承担责任。</div>
            <div>⑨为客户解决问题是我们存在唯一的价值。</div>
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

export default {
  data () {
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
.contianer {
  .logo_wrap,
  .type1 {
    width: 1200px;
    margin: 0 auto;
  }

  .type1 {
    justify-content: space-between;
    margin-bottom: 70px;
    .content {
      width: 548px;
      margin-top: 133px;
      font-size: 14px;
    }
  }

  .type2 {
    padding-top: 68px;
    background-color: #4f0706;
    height: 722px;
    justify-content: center;
    margin-bottom: 86px;
    .content {
      margin-left: 100px;
      margin-top: 20px;
      width: 558px;
      color: #fff;
      .title {
        font-size: 24px;
        color: #ff3c3a;
        font-weight: 600;
      }

      .text {
        font-size: 24px;
        margin-bottom: 13px;
      }
      .card {
        width: 480px;
        height: 66px;
        border: 1px solid #b11a1a;
        margin-left: -40px;
        padding-left: 40px;
        margin-top: 40px;
        .text1 {
          font-size: 22px;
          font-weight: 500;
          margin-top: 7px;
        }

        .text2 {
          font-size: 12px;
          font-weight: 300;
        }
      }

      .nine_mind {
        margin-top: 15px;
        font-size: 18px;
      }
    }
  }
}
</style>
