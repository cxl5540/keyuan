<template>
  <div>
    <div class="content">
      <div>
        <img :src="baseUrl+prize_essay_detail.cover" alt="">
        <span  v-if="prize_essay_detail.label!==1" :style="{background:prize_essay_detail.label==2?'#FFAF24':prize_essay_detail.label==3?'#6DC6F9':'#DCDCDC '}">{{prize_essay_detail.label==2?'报名中':prize_essay_detail.label==3?'审评中':'已结束'}}</span>
      </div>
      <div>
        <p>{{prize_essay_detail.name}}</p>
        <p><img src="../assets/icon_time.png" alt=""><span>{{prize_essay_detail.enroll_start_time}}~{{prize_essay_detail.publish_time}}</span></p>
      </div>
    </div>
    <div class="main">
        <div class="lc">
          <button :class="prize_essay_detail.label==2?'active':''">报名中</button>
          <span></span>
          <button :class="prize_essay_detail.label==3?'active':''">审核中</button>
          <span></span>
          <button :class="prize_essay_detail.label==4?'active':''">结果公示</button>
        </div>
        <div class="text">
            <div v-html="prize_essay_detail.content">

            </div>
            <div id="result" v-if="prize_essay_detail.result_publish" v-html="prize_essay_detail.result_publish">
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
        <button @click="$router.push('/registe')" v-if="prize_essay_detail.label==2">点击报名</button>
    </div>
    <div class="ckjg" @click="goAnchor('result')"  v-if="prize_essay_detail.result_publish" >
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
      prize_essay_detail:{}
    }
  },
  created() {
    this.getdata()
  },
  mounted() {

  },
  methods:{
    getdata(){
      this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/prize_essay_detail',
              essay_id:this.$route.query.id,
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                _this.$toast.clear();
                _this.prize_essay_detail=res.data.prize_essay_detail;
        			 }
          });
    },
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
          position: relative;
          top:0.07rem;
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
