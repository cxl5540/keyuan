<template>
  <div>
    <div class="content">
      <div>
        <img src="../assets/home_yh_4.png" alt="">
        <span>已结束</span>
      </div>
      <div>
        <p>有奖征文题目有奖征文题目有奖征文题目</p>
        <p><img src="../assets/icon_time.png" alt=""><span>2022.04.20 14:00~17:00</span></p>
      </div>
    </div>
    <div class="main">
        <div class="lc">
          <button class="active">报名中</button>
          <span></span>
          <button>审核中</button>
          <span></span>
          <button>结果公示</button>
        </div>
        <div class="text">
            <div>
              <h3>征文报名时间：</h3>
              <div>
                报名时间：2022.04.20~2022.04.30
              </div>
            </div>
            <div>
              <h3>征文内容及格式：</h3>
              <div>
                征文内容及格式征文内容及格式征文内容及格式征文内容及格式征文内容及格式征文内容及格式征文内容及格式征文内容及格式征文内容及格式征文内容及格式征文<br>
              </div>
            </div>
            <div>
              <h3>评审方式及联系方式：</h3>
              <div>
                审方式介绍评审方式介绍评审方式介绍
              </div>
            </div>
            <div id="result">
              <h3>结果公示：</h3>
              <div>
                结果公示<br>
                结果公示<br>
                结果公示<br>
                结果公示<br>
                结果公示<br>
              </div>
            </div>
        </div>
        <button @click="$router.push('/registe')">点击报名</button>
    </div>
    <div class="ckjg" @click="goAnchor('result')">
      <p>查<br>看<br>结<br>果</p>
      <img src="../assets/icon_ckjg.png" alt="">
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
    goAnchor() {//参数selector是id选择器（#anchor14）
        document.querySelector('#result').scrollIntoView({
            behavior: "smooth"
        });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  .content{
    >div:nth-child(1){
      height: 3.5rem;
      border-radius: 2px 2px 0px 0px;
      position: relative;
      >img{
        width: 100%;
        height: 100%;
      }
      >span{
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        display: inline-block;
        width: 1.1rem;
        height: 0.48rem;
        text-align: center;
        line-height: 0.48rem;
        text-align: center;
        background: #CCCCCC;
        color: #FFffff;
        border-radius: 3px;
      }
    }
    >div:nth-child(2){
      box-sizing: border-box;
      padding: 0.2rem;
      >p:nth-child(1){
        margin: 0.2rem 0;
      }
      >p:nth-child(2){
        font-size: 0.24rem;
        >img{
          max-width: 0.3rem;
          vertical-align: middle;
          margin-right: 0.1rem;
          color: #666666;
        }
      }
    }
  }
  .main{
    >.lc{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.3rem 0;
      >button{
        width: 1.5rem;
        height: 0.54rem;
        background: #CCCCCC;
        border-radius: 2px;
        color: #FFffff;
        border: none;
        font-size: 0.24rem;
      }
      >span{
        display: inline-block;
        width: 1.18rem;
        height: 1px;
        background: #CCCCCC;
      }
      .active{
        background: #6DC6F9;
      }
    }
    >.text{
      padding-bottom: 1.2rem;
      >div{
        margin: 0.2rem 0;
        >h3{
          font-size: 0.28rem;
        }
        >div{
          font-size: 0.24rem;
        }
      }
    }
    >button{
      width:7.1rem;
      height: 0.88rem;
      background: #FFAF24;
      border-radius: 5px;
      color: #FFffff;
      border: none;
      position: fixed;
      bottom: 0.2rem;
      left:50%;
      margin-left: -3.55rem;
    }
  }
  .ckjg{
    width: 0.7rem;
    height: 1.6rem;
    background: #FFFFFF;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
    border-radius:5px 0px 0px 5px;
    position: fixed;
    right: 0;
    top: 50%;
    font-size: 0.24rem;
    text-align: center;
    >img{
      max-height: 10px;
    }
  }
</style>
