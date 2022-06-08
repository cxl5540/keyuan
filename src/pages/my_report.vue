<template>
  <div class="page">
    <ul>
      <li class="activ">我的上报</li>
      <li>我的指派</li>
    </ul>
      <div class="main">
          <div class="search">
              <div class="lt" @click="show = true">{{type}}<img src="../assets/icon_sxuan.png" alt=""></div>
              <div class="rt">
                 <input type="" v-model="key" placeholder="请输入关键词"/>
                 <img src="../assets/sousuo_lv.png" alt="">
              </div>
          </div>
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
             <div class="list">
                <div v-for="i,index in list" :key='index' @click="$router.push('/report_deal')">
                    <div class="top">
                        <p><span>{{i.n}}</span><span>待处理</span></p>
                        <span>隐患位置：{{i.n}}</span>
                    </div>
                    <div class="bot">
                      <p><span><img src="../assets/icon_ren.png"/>上报人：嘻嘻嘻</span> <span>2022.04.19 14:53</span></p>
                    </div>
                </div>
             </div>
            </van-list>
          </van-pull-refresh>
      </div>
      <p><img src="../assets/icon_zhuyi.png" alt="">待完成：初步排除隐患，后续将系统整治。</p>
  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
      type:'全部',
      show:false,
      actions: [{ name: '全部' }, { name: '国家安全' }, { name: '消防交通' }],
      key: '',
      list: [{n:'2021年安全课程学习',d:'一段文件介绍安全课程一段文件介...'}],
      loading: false,
      finished: true,
      refreshing: false,
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    onSelect(item){
      this.show = false;
      this.type=item.name;
    },
    onLoad(){

    },
    onRefresh(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.page{
  >p{
    color: #999999;
    font-size: 12px;
    position: fixed;
    bottom: 0.1rem;
    left: 0.2rem;
    >img{
      width: 0.28rem;
      height: 0.28rem;
      vertical-align: bottom;
      margin-right: 0.1rem;
    }
  }
  >ul{
    border-bottom: 1px solid #eee;
    padding: 0;
    margin:0;
    display: flex;
    justify-content: space-around;
    >li{
      display: inline-block;
      font-size: 0.3rem;
      font-weight: bold;
      padding: 0.2rem;
    }
    .activ{
      border-bottom:2px solid  #FFAF24;
    }
  }
}
.main{
  padding: 0.2rem;
  background: #F8F8F8;
  >.search{
    width: 100%;
    background: #fff;
    height: 0.8rem;
    display:flex;
    overflow: hidden;
    border-radius: 5px;
    justify-content: space-between;
    >.lt{
      width: 25%;
      text-align: center;
      line-height: 0.8rem;
      border-right: 1px solid #eee;
      >img{
        max-width: 7px;
        vertical-align: middle;
        margin-left: 0.1rem;
      }
    }
    >.rt{
       width: 75%;
       position: relative;
       >input{
         width: 80%;
         height: 100%;
         border:none;
         background: #fff;
         padding-left: 0.2rem;
       }
       >img{
         position: absolute;
         right:0.2rem;
         top: 0.24rem;
         max-height: 0.32rem;

       }
    }
  }
  .list{
    >div{
      border: 1px solid #eee;
      box-sizing: border-box;
      padding: 0.2rem;
      border-radius: 5px;
      margin-bottom: 0.2rem;
      background: #fff;
      margin-top: 0.2rem;
      >.top{
        >p{
          display: flex;
          justify-content: space-between;
          >span:nth-child(1){
            font-size: 0.3rem;
          }
          >span:nth-child(2){
            display: inline-block;
            width: 1.12rem;
            height: 0.48rem;
            background: #E7E7E7;
            border-radius:2px;
            font-size: 12px;
            text-align: center;
            line-height: 0.48rem;
          }
        }
        >span{
          display: inline-block;
          margin: 0.2rem 0;
          color: #999999;
          font-size: 12px;
        }
      }
      >.bot{
         >p{
           display: flex;
           justify-content: space-between;
           >span:nth-child(1){
             >img{
               width: 0.32rem;
               height: 0.32rem;
               vertical-align: middle;
             }
           }
            >span:nth-child(2){
              color: #999999;
              font-size: 12px;
            }
         }
      }
    }
  }

}
</style>
