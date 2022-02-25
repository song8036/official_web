<template>
  <div class="">
    <Navbar></Navbar>
    <div class="container">
      <div class="wrap">
        <div class="tabs fx-row">
          <div class="left_title">
            行业类型
          </div>
          <el-tabs
            v-model="activeName"
            @tab-click="handleClick"
          >
            <!-- <el-tab-pane
              label="不限"
              name="0"
            ></el-tab-pane> -->
            <el-tab-pane
              v-for="(l,i) in types"
              :key="i"
              :label="l.name"
              :name="l.id+''"
            ></el-tab-pane>
          </el-tabs>

        </div>
        <div class="list fx-row">
          <div
            class="item"
            v-for="(l,i) in list"
            :key="i"
          >
            <div class="img">
              <img
                :src="baseUrl+ l.main_image"
                alt=""
                width="372px"
                height="270px"
                class="large_img"
              >
            </div>

            <div class="bottom fx-row">
              <img
                src="../../static/dianyi.png"
                alt=""
                class="logo"
                width="78px"
                height="78px"
              >
              <div class="bottom_right fx-col">
                <div class="title">
                  {{l.name}}
                </div>
                <div class="bottom_wrap fx-row">
                  <!-- <div class="types">行业：企业文化展</div> -->
                  <router-link
                    :to="{path:'/example/detail',query:{id:l.id}}"
                    class="detail_btn"
                  >查看详情</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pages">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            :total="total"
            :page-size='12'
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>

      </div>

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/navbar'
import Footer from '@/components/Footer/footer'
import { apiExampleList } from '@/api/api'

export default {
  data () {
    return {
      baseUrl: baseUrl,
      activeName: '',
      total: 0,
      page: 1,
      types: [],
      list: [],
    }
  },

  components: {
    Navbar,
    Footer
  },

  created () {
    // console.log(this.$route.params);
    if (this.$route.params.id) { this.activeName = this.$route.params.id + '' }
    else {
      this.activeName = '5'
    }
    this.page = 1
    this.getData(this.page, this.activeName);
  },

  methods: {
    getData (page, id) {
      let data = {
        page: page,
        id: id,
      }
      apiExampleList(data).then(res => {
        this.types = res.data.hallcates
        this.list = res.data.example_list
        this.total = res.data.example_cate_count
      })
    },

    handleClick (tab, event) {
      console.log(tab.name);
      this.page = 1;
      this.getData(this.page, tab.name)
    },

    handleCurrentChange (val) {
      this.page = val
      this.getData(this.page, this.activeName)
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #f7f7f7;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 100px;
    /deep/ .tabs {
      align-items: center;
      border: 1px solid #c4c4c4;
      height: 50px;
      .left_title {
        width: 144px;
        text-align: center;
        border-right: 1px solid #c4c4c4;
        height: 50px;
        line-height: 50px;
        margin-right: 20px;
      }

      .el-tabs__header {
        margin: 0;
      }

      .el-tabs__item.is-active {
        height: 26px;
        line-height: 26px;
        background: #d32625;
        color: #fff;
        text-align: center;
        padding: 0 20px;
      }
      .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),
      .el-tabs--bottom .el-tabs__item.is-top:nth-child(2),
      .el-tabs--top .el-tabs__item.is-bottom:nth-child(2),
      .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
        padding: 0 20px;
      }

      .el-tabs__item:hover {
        // color: #000;
      }
      .el-tabs__active-bar {
        height: 0;
      }
      .el-tabs__nav-wrap::after {
        height: 0;
      }
    }
    .list {
      margin-top: 24px;
      flex-wrap: wrap;
      // justify-content: space-between;
      .item {
        // background-color: #fff;
        border: 1px solid #c4c4c4;
        margin-bottom: 18px;
        margin-right: 10px;
        padding: 8px;
        border-radius: 5px;

        .img {
          overflow: hidden;
        }

        .bottom {
          margin-top: 12px;
          margin-bottom: 18px;
          .bottom_right {
            margin-left: 16px;
            font-weight: 600;
            justify-content: space-between;
            .title {
              font-size: 16px;
            }

            .bottom_wrap {
              align-items: center;
              .types {
                font-size: 12px;
              }

              .detail_btn {
                display: block;
                width: 80px;
                height: 29px;
                border: 1px solid #ff4e43;
                border-radius: 4px;
                color: #ff4e43;
                font-size: 14px;
                text-align: center;
                line-height: 29px;
                // margin-left: 22px;
              }
            }
          }
        }
      }

      .item:hover {
        border: 1px solid #d32625;
        cursor: pointer;
        .large_img {
          transform: scale(1.1);
          transition: transform 0.5s ease;
        }
      }
    }

    /deep/ .pages {
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #d32625;
        color: #fff;
      }
      .el-pagination.is-background .el-pager li.active {
        color: #fff;
        cursor: default;
      }
      .el-pagination.is-background .el-pager li:hover {
        color: #d32625;
      }
      .el-pagination.is-background .el-pager li:not(.disabled):hover {
        color: #d32625;
      }

      .el-pagination.is-background .el-pager li:not(.disabled).active:hover {
        background-color: #d32625;
        color: #fff;
      }
      /*带背景的分页按钮背景色end*/

      /*不带背景的分页按钮背景色begin*/
      .el-pager li.active {
        color: #d32625;
        cursor: default;
      }
      .el-pagination .el-pager li:hover {
        color: #d32625;
      }
      .el-pagination .el-pager li:not(.disabled):hover {
        color: #d32625;
      }

      .el-pagination.is-background .btn-next,
      .el-pagination.is-background .btn-prev,
      .el-pagination.is-background .el-pager li {
        background-color: #fff;
        border: 1px solid #e9e8e8;
        padding: 0 10px;
      }
    }
  }
}
</style>
