<template>
  <div>
    <div class="main">
      <div class="title">
          <span>安全课程学习</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <div class="top" v-show="show==true">
          <p>必修课：<span>{{schedule_info.compulsory_credit}}</span>分&nbsp;|&nbsp;选修课：<span>{{schedule_info.elective_credit}}</span>分&nbsp;|&nbsp;
          总课程数：<span>{{schedule_info.course_count}}</span>门，您还需要学习<span>{{schedule_info.surplus_compulsory_count}}</span>门，至少<span>{{schedule_info.surplus_elective_count}}</span>门选修课</p>
          <div class="line">
           <p>时长要求：<span>{{schedule_info.learn_duration?gettime(schedule_info.learn_duration):'00:00:00'}}</span>/{{gettime(schedule_info.duration_require)}}</p>
            <div>
             <div :style="{width:(schedule_info.duration_percentage)+'%'}"></div>
             <span>{{schedule_info.duration_percentage}}%</span>
            </div>
          </div>
          <div class="line">
            <p>学分要求：<span>{{schedule_info.learn_credit?schedule_info.learn_credit:'0'}}</span>/{{schedule_info.credit_require}}</p>
            <div>
              <div :style="{width:(schedule_info.credit_percentage)+'%'}"></div>
              <span>{{schedule_info.credit_percentage}}%</span>
            </div>
          </div>
      </div>
      <div class="line line1" v-show="show==false">
        <p>学分要求：<span>{{schedule_info.learn_credit?schedule_info.learn_credit:'0'}}</span>/{{schedule_info.credit_require}}</p>
        <div>
          <div :style="{width:(schedule_info.credit_percentage)+'%'}"></div>
          <span>{{schedule_info.credit_percentage}}%</span>
        </div>
      </div>
      <div class="del">
        {{getstr(schedule_info.brief,show==false?40:schedule_info.brief.length) }}
      </div>
    </div>
    <div class="zd">
      <img v-show="show==true" src="../assets/img_zdxq.png"/>
      <img v-show="show==false" src="../assets/img_zkxq.png"/>
      <p @click="getshow()">{{show==false?'展开详情':'折叠详情'}}</p>
    </div>
    <div class="main">
      <div class="list">
          <div class="title">
            <ul>
              <li :class="activ==0?'activ':''" @click="change(0)">必修课</li>
              <li :class="activ==1?'activ':''" @click="change(1)">选修课</li>
              <li :class="activ==2?'activ':''" @click="change(2)">考试信息</li>
            </ul>
          </div>
          <div class="content" v-show="activ!=2">
              <div v-for="i,index in list" :key='index'  @click="course_del(i)">
                <div :style="{backgroundImage:'url('+baseUrl+i.cover+')'}"></div>
                 <div>
                   <p><span>{{type==1?'必修':'选修'}}</span><span>{{getstr(i.title,6)}}</span></p>
                    <div>
                      <p>时长：{{gettime(i.duration)}}</p>
                      <p>学分：{{i.learn_status}}</p>
                    </div>
                 </div>
                 <img v-show="i.learn_status==1" src='../assets/icon_kcxx_b.png'/>
                <img  v-show="i.learn_status==2" src='../assets/icon_kcxx_s .png' />
              </div>
          </div>
      </div>
      <div class="instudy" v-show="activ==2" @click="toexam()">
          <img src="../assets/img_ksrk_1(1).png" alt="">
          <span :style="{background:schedule_info.credit_percentage!==100?'#DCDCDC':''}">{{schedule_info.credit_percentage==100?'已开启':'未开启'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      str:'一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍',
      show:false,
       list:'',
       activ:0,
       type:1,
       schedule_id:'',
       schedule_info:''
    }
  },
  created() {
    this.schedule_id=this.$route.query.schedule_id;
    this.getdata()
  },
  mounted() {

  },
  methods:{
    getdata(){
      this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      // return false;
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/course_list',
              user_id:localStorage.getItem('uid'),
              type:this.type,
              schedule_id:this.schedule_id
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                _this.$toast.clear();
        			_this.schedule_info=res.data.schedule_info;
        			_this.list=res.data.course_list;
        			 }
          });
    },
    toexam(){  //考试
      if(this.schedule_info.credit_percentage!==100){
        this.$toast('您的学分未达到要求，暂不能考试');
        return false;
      }
      this.$router.push({path:'/before_exam',query:{exam_id:this.schedule_info.id}} )
    },
    getshow(){
      this.show=!this.show
    },
    change(num){  //切换
      this.activ=num;
      if(num==0){
        this.type=1;
        this.getdata()
      }else if(num==1){
         this.type=2;
         this.getdata()
      }
    },
    course_del(i){
      this.$router.push({path:'/course_del',query:{course_id:i.id,type:this.type,schedule_id:this.schedule_info.id}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.main{
  .title{
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
  >.top>p{
    text-align: left;
    line-height: 0.52rem;
    >span{
      color: #FF847F;
    }
  }
  .line{
     margin: 0.2rem 0;
    >p{
      color: #666666;
      >span{
        color: #B591CA;
      }
    }
    >div{
      position: relative;
      margin: 0.2rem 0;
      width: 90%;
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
  .line1{
    display: flex;
    >div{
       width: 60%;
    }
  }
}
.zd{
  position: relative;
  >p{
    position:absolute;
    left: 0;
    top: 0;
    text-align: center;
    width: 90%;
    left: 6%;
    top: 0px;
    color: #666666;
    font-size: 12px;
    line-height: 0.44rem;
  }
}
.del{
  padding: 0.2rem 0;
}
.list{
  >.title{
    border-bottom: 1px solid #eee;
    padding: 0;
    margin: 0.2rem 0;
    >ul{
      width: 100%;
      display: flex;
      justify-content: space-around;
      >li{
        display: inline-block;
        font-size: 0.3rem;
        font-weight: bold;
        padding: 0.2rem;
      }
    }
  }
  >.content{
      overflow: hidden;
      // display: flex;
      // flex-wrap: wrap;
      >div:nth-child(2n){
        float: right;
       // margin-left:0.2rem ;
      }
      >div:nth-child(2n+1){
        float: left;
        //margin-left:0.2rem ;
      }
      >div{
        display: inline-block;
        margin-top: 0.2rem;
        border: 1px solid #DCDCDC;
        width: 3.4rem;
        border-radius: 4px;
        position: relative;
        >div:nth-child(1){
          height: 1.9rem;
          background-image: url('../assets/home_yh_1.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          box-sizing: border-box;
           padding: 0.1rem;
          >p{
            >span:nth-child(1){
              display: inline-block;
              background: #FFAF24;
              border-radius: 3px;
              width: 0.6rem;
              //line-height: 0.32rem;
             // height: 0.32rem;
              font-size: 12px;
               text-align: center;
              margin-right: 0.1rem;
              color: #fff;
              }
            >span:nth-child(2){

            }
          }
          >div{
            padding: 0.2rem 0;
            color: #999999;
          }
        }
        >img{
          position: absolute;
          bottom: 0;
          right: 0;
          height: 0.6rem;
        }
      }
  }
  .activ{
    border-bottom:2px solid  #FFAF24;
  }
}
.instudy{
  position: relative;
  >span{
    display: inline-block;
    width: 1.2rem;
    height: 0.44rem;
    background: #FF847F;
    color: #FFffff;
    line-height: 0.44rem;
    text-align: center;
    border-radius: 0.22rem 0px 0px 0.22rem;
    position:absolute;
    right: 0;
    top: 0.2rem;
  }
}
</style>
