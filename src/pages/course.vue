<template>
  <div class="main">
      <div class="title">
          <span>安全课程学习</span>
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
            <div v-for="i,index in list" :key='index'>
                <div class="top">
                    <div></div>
                    <div>
                      <p>{{i.n}}</p>
                      <p>{{i.d}}</p>
                      <div class="line">
                        <span>学习进度:</span>
                        <div>
                          <div></div>
                          <span>60%</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="bot">
                  <button @click="see_certificate()">查看证书</button>
                  <button @click="study()">进入学习</button>
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
      list: [{n:'2021年安全课程学习',d:'一段文件介绍安全课件介...'}],
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
    study(){
      this.$router.push('/course_list')
    },
    see_certificate(){
       this.$router.push('/certificate')
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
.main{
  >.title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem 0;
      >span:nth-child(1){
        font-size: 0.3rem;
        font-weight: bold;
        border-left: 0.08rem solid #FFAF24;
        padding-left: 0.1rem;
      }
      >span:nth-child(2){
        font-size: 12px;
         color:#999999;
      }
  }
  .list{
    >div{
      border: 1px solid #eee;
      box-sizing: border-box;
      padding: 0.2rem;
      border-radius: 5px;
      margin-bottom: 0.2rem;
      >.top{
        display: flex;
        justify-content: space-between;
        height: 1.4rem;
        >div:nth-child(1){
          width: 2.5rem;
          height:1.4rem;
          background-image: url('../assets/home_yh_1.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          margin-left: 0.2rem;
          width: 4.5rem;
          >p:nth-child(2){
             font-size: 12px;
             color: #666666;
             margin: 0.2rem;          }
          >.line{
           font-size: 12px;
           display: flex;
            >p{
              color: #666;
              >span{
                color: #B591CA;
              }
            }
            >div{
              position: relative;
              margin: 0.1rem 0;
              width:55%;
              height: 0.1rem;
              background:rgba(181,145,202,.1);
              border-radius: 4px;
              >div{
                width: 60%;
                height:100%;
                position: absolute;
                left: 0;
                top: 0;
                background:rgba(181,145,202,1);
                border-radius: 4px;
              }
              >span{
                float: right;
                color: #B591CA;
                font-size: 12px;
                position: absolute;
                right: -0.7rem;
                top: -0.06rem;
              }
              }
           }
        }
      }
      >.bot{
        text-align: center;
        >button{
          width: 1.7rem;
          height: 0.56rem;
          border: 1px solid #FF9C00 ;
          border-radius:0.28rem;
          color:#FF9C00;
          background: #FFF6E6;
          margin: 0.3rem 0.2rem 0;
          font-size: 12px;
        }
      }
    }
  }

}
</style>
