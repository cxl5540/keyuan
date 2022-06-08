<template>
  <div class="main">
      <p> <span @click="$router.push('/text')">首页</span> > <span @click="$router.go(-1)">知识资源库列表页</span> > 资源库详情</p>
      <p><!-- <span>必修</span> -->安全课程学习标题安全课程学习标题安全课程学 习标题安全课程学习标题</p>
      <p>课程时长：<span>1:00:00&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><!-- 课程学分：<span>2</span> --></p>
      <div class="video">
           <video src="../../static/video/video1.mp4" controls></video>
          <p>
            <span>课程介绍</span>
          </p>
          <div>
            课程内容大纲介绍课程内容大纲介绍课程内容大纲介绍课程内容大纲介绍课程内容大纲介绍课程内容大纲介绍课程内容大纲介绍
          </div>
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
      line-height: 0.32rem;
      height: 0.32rem;
      font-size: 12px;  text-align: center;
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
