<template>
  <div class="exam">
    <img src="../assets/img_kscj.png" alt="">
    <p class="cords"><span>{{info.scores}}</span><span>分</span></p>
      <div class="main">
          <div class="c_t">
              <ul>
                <li>您<span :style="{'color': info.is_adopt==1?'#2E5638':'red'}">{{info.is_adopt==1?'已通过':'未通过'}}</span>本次考试，请及时前往个人中心 进行浏览和下载电子证书。</li>
                <li>单选题：答对<span>{{info.dd_count}}</span>题&nbsp; 答错<span>{{info.dc_count}}</span>题</li>
                <li>判断题：答对<span>{{info.pd_count}}</span>题&nbsp; 答错<span>{{info.pc_count}}</span>题</li>
                <li>多选：答对<span>{{info.dxd_count}}</span>题&nbsp; 答错<span>{{info.dxc_count}}</span>题</li>
              </ul>
          </div>
          <div class="btns">
            <button @click="$router.push('/text')">返回首页</button>
            <button @click="$router.push('/solicitation')">返回列表</button>
          </div>
      </div>
  </div>
</template>

<script>
  import {exam_recordAPI} from '../api/api.js'
export default {
  name: '',
  data () {
    return {
      info:''
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
          score_id:this.$route.query.score_id,
          user_id:1,
          action:'Exam/exam_record'
        }
        let _this=this;
        $.post(url,data,function(res){
          _this.$toast.clear();
        			 if(res.code==200){
        			_this.info=res.data;
        			}
          });
    },
    start(){
      this.$router.push('/examination')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.exam{
  >.cords{
    position: absolute;
    top:0.4rem;
    left: 0.8rem;
    color: #2E5638;
    font-weight: bold;
    >span:nth-child(1){
      font-size: 1.2rem;
    }
    >span:nth-child(2){
      font-size: 0.4rem;
    }
  }
}

.main{
   text-align: center;
  >.c_t{
    width: 6rem;
    height:6.3rem;
    margin: auto;
    box-sizing: border-box;
    padding: 0.2rem;
    text-align: left;
    background: #FFFFFF;
    box-shadow: 0px 0px 15px 0px rgba(153, 153, 153, 0.35);
    border-radius: 10px;
    >ul{
      >li{
        border-top: 1px solid #eee;
        padding: 0.3rem 0;
        >span{
          color: #FFAF24;
          display: inline-block;
          margin: 0 0.1rem;
        }
      }
      >li:nth-child(2){
         border-top: none;
      }
      >li:nth-child(1){
        border-top: none;
        >span{
          color: #40C298;
          font-size: 0.32rem;
          font-weight: bold;
        }
      }
    }
  }
  >.btns{
    >button{
      width:2.6rem;
      height: 0.88rem;
      background: #FFF6E6;
      border: 1px solid #FFAF24;
      border-radius:0.44rem;
       font-weight: bold;
       color: #FFAF24;
      margin: 0.8rem 0.2rem;
    }
  }

}
@media screen and (min-width: 769px){
  .exam{
    width: 750px;
    margin: auto;
     font-size: 26px;
    >.main{
      width: 100%;
      >.c_t{
        width: 100%;
      }
    }
  }
}
</style>
