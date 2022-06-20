<template>
  <div class="main">
      <div class="login">
        <div>
          <img src="../assets/icon_login.png" alt="">
          <span>张三 | <span style="color: #117EBC;" @click="esc()">退登</span></span>
        </div>
        <div class="mes" @click="$router.push('/message_report')">
           <img src="../assets/icon_tongzhi.png" alt="">
          <span></span>
        </div>
      </div>
      <div class="conten">
        <div class="c_t">
          <h3>隐患上报与管理</h3>
          <div>
            <div @click="$router.push('/danger_report')"><span>隐患上报</span></div>
            <div @click="$router.push('/my_report')"><span>隐患管理</span></div>
          </div>
        </div>
        <div class="c_t c_2">
          <h3>督查上报与安全举报</h3>
          <div>
            <div  @click="$router.push('/danger_report1')"><span>督查上报</span></div>
            <div @click="$router.push('/danger_report1')"><span>安全举报</span></div>
          </div>
        </div>
        <div class="c_t c_3">
          <h3>专项排查活动</h3>
          <div @click="$router.push('/special_activ')">
            <div><span>专项排查活动</span></div>
          </div>
        </div>
       <img src="../assets/img_aqzspt.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    esc(){
      localStorage.clear('uid')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.main{
  >.login{
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0;
    >div:nth-child(1){
      >img{
        max-width: 0.72rem;
        vertical-align: middle;
        margin-right: 0.1rem;
      }
    }
    >.mes{
      position: relative;
      >img{
          max-height: 0.58rem;
      }
      >span{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        background: #FF0000;
        border-radius: 50%;
         position:absolute;
         right: 0.1rem;
         top: 0rem;
      }
    }
  }
  >.conten{
    >.c_t{
      margin-bottom: 0.6rem;
      >h3{
        text-align: center;
      }
      >div{
        display:flex;
        justify-content: space-between;
        >div{
          width: 3.4rem;
          height: 1.48rem;
          color: #fff;
          >span{
            font-weight: bold;
            font-size: 0.32rem;
            display: inline-block;
            margin: 0.3rem;
          }
        }
        >div:nth-child(1){
          background:url('../assets/home_yh_1.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          background:url('../assets/home_yh_2.png');
          background-size: cover;
          background-position: center;
        }
      }
    }
    >.c_2{
      >div{
        >div:nth-child(1){
          background:url('../assets/home_yh_3.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          background:url('../assets/home_yh_4.png');
          background-size: cover;
          background-position: center;
        }
      }
    }
    >.c_3{
      >div{
        width: 100%;
        >div:nth-child(1){
           width: 100%;
           height: 1.3rem;
          background:url('../assets/home_yh_5.png');
          background-size: cover;
          background-position: center;
        }
      }
    }
    >img{
      margin-top: 0.6rem;
    }
  }
}
</style>
