<template>
  <div class="main">
      <p> <span @click="$router.push('/text')">首页</span> > <span @click="$router.go(-1)">安全课程列表页</span> > 课程详情</p>
      <p><span v-show="type"> {{type==1?'必修':type==2?'选修':''}} </span>{{course_detail.title}}</p>
      <p>课程时长：<span>{{gettime(course_detail.duration)}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>课程学分：<span>{{course_detail.credit}}</span></p>
      <div class="video">
          <video   id="video" :src="baseUrl+course_detail.path" controls :poster="baseUrl+course_detail.cover"></video>
          <p>
            <span>课程介绍</span>
          </p>
          <div v-html="course_detail.introduce">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      course_id:'',
      course_detail:'',
      schedule_id:'',
      type:'',
      timer:null
    }
  },
  created() {
    this.course_id=this.$route.query.course_id;
    this.schedule_id=this.$route.query.schedule_id;
    if(this.$route.query.type){
      this.type=this.$route.query.type;
    }
    this.getdata();
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    var elevideo = document.getElementById("video");
    let _this=this;
        elevideo.addEventListener('ended', function () { //结束
        _this.course_learn()
        clearInterval(_this.timer)
            console.log("播放结束");
        }, false);
        var sym;
        this.timer= setInterval(function () {
            var time = elevideo.currentTime
            if (time - sym > 1) {
              elevideo.currentTime = sym
            }
            sym = elevideo.currentTime;
              // clearInterval(_this.timer)
          }, 500);
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods:{
    getdata(){
      this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/course_detail',
              course_id:this.course_id
        }
        let _this=this;
        $.post(url,data,function(res){
             _this.$toast.clear();
        			 if(res.code==200){
        			_this.course_detail=res.data.course_detail;
        			}
          });
    },
    course_learn(){  //学习完成
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/course_learn',
              user_id:localStorage.getItem('uid'),
              schedule_id:this.schedule_id,
              course_id:this.course_id,
              type:this.type
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
        			 _this.$toast(res.msg);
        			}
          });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.main{
  >p{
    margin-top: 0.2rem;
  }
  >p:nth-child(1){
    color: #999999;
    font-size: 0.24rem;
  }
  >p:nth-child(2){
    font-size: 0.3rem;
    >span:nth-child(1){
      display: inline-block;
      background: #FFAF24;
      border-radius: 3px;
      width: 0.6rem;
      //line-height: 0.32rem;
      //height: 0.32rem;
      font-size: 12px;
      text-align: center;
      margin-right: 0.1rem;
      color: #FFffff;
    }
  }
  >p:nth-child(3){
    color: #666666;
    padding-bottom: 0.2rem;
    >span{
      color: #FFAF24;
    }
  }
  .video{
    border-top: 1px solid #eee;
    padding-top: 0.2rem;
    >video{
      width: 100%;
      height: 3.9rem;
    }
    >p{
      border-bottom: 1px solid #eee;
      padding: 0.2rem 0;
      >span{
          padding: 0.2rem 0;
         border-bottom:2px solid  #FFAF24;
      }
    }
    >div{
      padding: 0.2rem 0;
    }
  }
}
</style>
