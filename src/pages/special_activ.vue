<template>
  <div class="content">
      <div class="title">
          <span>专项排查活动</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <div class="search">
          <div class="rt">
             <input type="" v-model="key" placeholder="请输入关键词"/>
             <img src="../assets/sousuo_zi.png" alt="">
          </div>
      </div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
         <div class="list" @click="todetail()">
            <div>
               <div class="top">
                 <div></div>
                 <div>
                   <p>专项排查活动名称</p>
                   <p><img src="../assets/icon_time.png" alt=""><span>活动时间：2022.04.20 14:00~17:00</span></p>
                 </div>
               </div>
               <div class="bot">知识讲座内容介绍文字知识讲座内容介绍文字知识讲座内容介绍文字知识讲座内容介绍文字知识讲座内容介绍文字知识讲座内容介绍文字知识讲座内容介绍文字知识讲座内容介绍文字...</div>
            </div>
         </div>
        </van-list>
      </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      show:false,
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
    todetail(){
      this.$router.push('/special_activ_del')
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
.content{
  >.title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0.3rem 0.2rem;
      >span:nth-child(1){
        font-size: 0.3rem;
        font-weight: bold;
        border-left: 0.08rem solid #A7A5FF;
        padding-left: 0.1rem;
      }
      >span:nth-child(2){
        font-size: 12px;    color:#999999;
      }
  }
  .search{
    width: 7.1rem;
    background: #F2F2F2;
    height: 0.8rem;
    display:flex;
    overflow: hidden;
    border-radius: 5px;
    justify-content: space-between;
    box-sizing: border-box;
    margin: auto;
    >.rt{
       width: 100%;
       position: relative;
       >input{
         width: 80%;
         height: 100%;
         border:none;
         background: #F2F2F2;
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
    background:rgba(230,187,185,.1);
    padding-bottom: 0.2rem;
      padding-top: 0.2rem;
    >div{
      background: #FFffff;
      box-sizing: border-box;
      width: 7.1rem;
      margin: auto;
      padding: 0.2rem;
      border-radius: 4px;
      >.top{
        display: flex;
        border-bottom: 1px solid #eee;
          padding-bottom: 0.2rem;
        >div:nth-child(1){
          width: 0.88rem;
          height:0.88rem;
          border-radius: 50%;
          background-image: url('../assets/home_yh_1.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          margin-left: 0.2rem;
          >p:nth-child(1){
               margin-bottom: 0.2rem;
               >span{
                 display: inline-block;
                 text-align: center;
                 line-height: 0.36rem;
                 width: 0.96rem;
                 height: 0.36rem;
                 background:#FFAF24;
                 border-radius:4px;
                 color: #fff;
                 font-size: 0.24rem;
               }
          }
          >p{
            font-size: 0.24rem;
            >img{
              max-width: 0.3rem;
              vertical-align: bottom;
              margin-right: 0.1rem;
            }
          }
        }
      }
      >.bot{
         padding-top: 0.2rem;
        color: #666666;
        font-size: 0.24rem;
      }
    }
  }
}
</style>
