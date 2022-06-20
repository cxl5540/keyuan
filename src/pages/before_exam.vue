<template>
  <div class="exam">
    <img src="../assets/img_kqxz_2.png" alt="">
      <div class="main">
          <div class="c_t">
              <ul>
                <li>试卷名称：{{info.name}}</li>
                <li>考试题目：共{{info.question_number}}道</li>
                <li>考试分值：{{info.total_score}}分</li>
                <li>考试时间：{{info.exam_time}}分钟</li>
                <li>注意事项：{{info.take_note}}</li>
              </ul>
          </div>
          <button @click="start()">开始答题</button>
          <span @click="$router.push('/text')">返回首页</span>
      </div>
  </div>
</template>

<script>
import {exam_infoAPI} from '../api/api.js'
export default {
  name: '',
  data () {
    return {
      info:''
    }
  },
  created() {
    this.getinfo()
  },
  mounted() {

  },
  methods:{
    getinfo(){
        // var data={
        //     exam_id:1,
        //   }
        //  exam_infoAPI(data).then(res =>{
        //    if(res.code==200){
        //      this.info=res.data;
        //    }

        //    }).catch(err =>{
        //        console.log(err)
        //    })

        this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
        var url=this.baseUrl+'api/Index/apppost';
        var data={
            exam_id:1,
            action:'Exam/exam_info'
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
      this.$router.push({path:'/examination'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">


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
      }
      >li:nth-child(1){
        border-top: none;
      }
    }
  }
  >button{
    width:100%;
    height: 0.88rem;
    background: #FFAF24;
    border-radius:0.44rem;
    color: #FFffff;
    border: none;
    margin: 0.5rem 0;
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
      >button{
        height: 88px;
      }
    }
  }
}
</style>
