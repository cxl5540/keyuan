<template>
  <div class="content">
      <div class="title">
          <span>征文报名记录</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
         <div class="list">
            <div>
               <div class="top">
                 <div></div>
                 <div>
                   <p><span>报名中</span> 知识讲座名称知识讲座名称知识讲座名称</p>
                   <p><img src="../assets/icon_time.png" alt=""><span>2022.04.20 14:00~17:00</span></p>
                 </div>
               </div>
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
        border-left: 0.08rem solid #FF847F;
        padding-left: 0.1rem;
      }
      >span:nth-child(2){
        font-size: 12px;    color:#999999;
      }
  }
  .list{
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
          width: 2.5rem;
          height: 1.4rem;
          border-radius: 3px;
          background-image: url('../assets/home_yh_1.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          margin-left: 0.2rem;
           position: relative;
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
          >p:nth-child(2){
            position: absolute;
            bottom: 0;
            left: 0;
            color: #666666;
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
    }
  }
}
</style>
