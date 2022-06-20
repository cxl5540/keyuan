<template>
  <div>
    <div class="main">
      <Header></Header>
      <div @click="$router.push('/before_exam')">
        <img src="../assets/img_ksrk_1(1).png" alt="">
      </div>
      <div class="mine">
          <div class="title">
            <span>2022年学习任务</span>
            <span @click="$router.push('/mine')">个人中心></span>
          </div>
          <p>必修课：<span>{{schedule_info.compulsory_credit}}</span>分&nbsp;|&nbsp;选修课：<span>{{schedule_info.elective_credit}}</span>分&nbsp;|&nbsp;总课程数：
          <span>{{schedule_info.course_count}}</span>门，您还需要学习<span>{{schedule_info.surplus_compulsory_count}}</span>门必修课，选修课还需<span>{{schedule_info.surplus_elective_count}}</span>分</p>
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
      <div class="study">
         <div class="title">
           <ul>
             <li :class="type==1?'activ':''" @click="choose_type(1)">必修课</li>
             <li :class="type==2?'activ':''" @click="choose_type(2)">选修课</li>
           </ul>
           <span @click="$router.push({path:'/course_list',query:{schedule_id:schedule_info.id}})">进入学习></span>
         </div>
         <div class="list" >
             <div v-for="i,index in course_list" :key='index' @click="course_del(i)">
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
      <div class="sourse">
          <div class="title">
            <span>知识资源库</span>
            <span @click="$router.push({path:'/knowledge_list',query:{schedule_id:schedule_info.id}})">MORE+</span>
          </div>
          <div class="list" >
            <div  v-for="i,index in resource_list" :key='index' @click="knowledge_del(i)">
                <div :style="{backgroundImage:'url('+baseUrl+i.cover+')'}"></div>
                <div>
                  <p>{{getstr(i.title,13)}}</p>
                  <p>{{getstr(i.introduce,15)}}</p>
                  <p>分类：{{i.classify_name}}</p>
                </div>
            </div>
          </div>
      </div>
     <div class="title">
       <span style="border-left: 0.08rem solid #FF847F;">安全知识讲座</span>
       <span style="color:#FF847F;" @click="$router.push('/knowledge_lecture')">MORE+</span>
     </div>
    </div>
    <div class="jz">
        <div class="list main">
           <div v-for="i,index in safe_knowledge_list" :key='index' @click="safe_knowledge_del(i.jump_link)">
              <div class="top">
                <div :style="{backgroundImage:'url('+baseUrl+i.cover+')'}"></div>
                <div>
                  <p><span v-if="i.is_playback==true">回放</span>{{getstr(i.name,15)}}</p>
                  <p><img src="../assets/icon_time.png" alt=""><span>{{i.lecture_time}} {{i.start_time}}~{{i.end_start}}</span></p>
                </div>
              </div>
              <div class="bot">{{i.brief}}</div>
           </div>
        </div>
    </div>
    <div class="main zw">
      <div class="title">
        <span style="border-left: 0.08rem solid #6DC6F9;">有奖征文</span>
        <span style="color:#6DC6F9;" @click="$router.push('/solicitation')">MORE+</span>
      </div>
      <div class="content" @click="$router.push({path:'/solicitation_del',query:{id:prize_essay_list[0].id}} )">
        <div>
          <img :src="baseUrl+prize_essay_list[0].cover" alt="">
          <span :style="{background:baseUrl+prize_essay_list[0].label==2?'#FFAF24':baseUrl+prize_essay_list[0].label==3?'#6DC6F9':'#DCDCDC '}" v-if="prize_essay_list[0].label!==1">{{prize_essay_list[0].label==2?'报名中':prize_essay_list[0].label==3?'审评中':'已结束'}}</span>
        </div>
        <div>
          <p>{{prize_essay_list[0].name}}</p>
          <p><img src="../assets/icon_time.png" alt=""><span>{{prize_essay_list[0].enroll_start_time}}~{{prize_essay_list[0].publish_time}}</span></p>
        </div>
      </div>
      <div class="list">
          <div v-for="i,index in prize_essay_list.slice(1)" @click="$router.push({path:'/solicitation_del',query:{id:i.id}} )">
            <p><span :style="{background:i.label==2?'#FFAF24':i.label==3?'#6DC6F9':'#DCDCDC '}" v-if="i.label!==1" >{{i.label==2?'报名中':i.label==3?'审评中':'已结束'}}</span><span>{{i.name}}</span></p>
            <p><img src="../assets/icon_time.png" alt=""><span>{{i.enroll_start_time}}~{{i.publish_time}}</span></p>
          </div>
      </div>
    </div>
    <footer>
      <p>版权所有：重庆科技学院 渝ICP备13000511号-1 </p>
      <P>渝公网安备 50009802000806号</P>
      <div @click="toTop()"  v-if="topShow">
         <img src="../assets/img_top.png">
      </div>
    </footer>
  </div>
</template>

<script>
  import Header from '../components/header.vue';
  import {getdataAPI} from '../api/api.js'
export default {
  name: '',
  data () {
    return {
      list:[
        {name:'意识比安全知识更重要',sc:'20:49',xf:"2",wc:1,pic:require('../assets/v1.png'),id:1},
        {name:'大学生防溺水',sc:'17:09',xf:"2",wc:2,pic:require('../assets/v2.png'),id:2},
        {name:'国家安全人人有责',sc:'22:18',xf:"2",wc:2,pic:require('../assets/v3.png'),id:3},
      ],
      course_list:'',
      resource_list:'',
      schedule_info:'',
      safe_knowledge_list:'',
      prize_essay_list:[
        {cover:'',label:'',name:'',enroll_start_time:'',publish_time:'',id:''}
      ],
      scrollTop:0,
      topShow:false,
      type:1
    }
  },
  components:{
    Header
  },
  created() {
  },
  mounted() {
    this.getdata()
  },
  destroyed() {
      window.removeEventListener("scroll", this.scrollToTop); //移除滚动条监听
    },
  methods:{
    getdata(){
      this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      // return false;
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/index',
             user_id:1,
             type:this.type
        }
        let _this=this;
        $.post(url,data,function(res){
              _this.$toast.clear();
        			 if(res.code==200){
        			_this.schedule_info=res.data.schedule_info;
        			_this.course_list=res.data.course_list;
        			_this.resource_list=res.data.resource_list;
              _this.safe_knowledge_list=res.data.safe_knowledge_list;
              _this.prize_essay_list=res.data.prize_essay_list;
        			 }
          });
    },
    choose_type(type){
      this.type=type;
      this.getdata()
    },
    scrollToTop() {
        this.scrollTop =
          window.scrollY ||
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        // console.log(this.scrollTop);

        // 计算距离顶部的高度，当高度大于300显示回顶部图标，小于300则隐藏
        if (this.scrollTop > 300) {
          this.topShow = true;
        } else {
          this.topShow = false;
        }
      },
    toTop(){
     let timer = setInterval(() => {
         let ispeed = Math.floor(-this.scrollTop / 5);
         document.documentElement.scrollTop = document.body.scrollTop =
           this.scrollTop + ispeed;
         if (this.scrollTop === 0) {
           clearInterval(timer);
         }
       },16);

    },
    safe_knowledge_del(url){  //讲座详情
      window.open(url)
    },
    course_del(i){  //课程详情
      this.$router.push({path:'/course_del',query:{course_id:i.id,type:this.type,schedule_id:this.schedule_info.id}})
    },
    knowledge_del(i){  //知识库详情
       this.$router.push({path:'/knowledge_del',query:{course_id:i.id,schedule_id:this.schedule_info.id}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.mine{
  >p{
    text-align: left;
    line-height: 0.52rem;
    >span{
      color: #FF847F;
    }
  }
  >.line{
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
}
.study{
  >.title{
    border-bottom: 1px solid #eee;
    padding: 0;
    margin: 0.2rem 0;
    >ul{
      >li{
        display: inline-block;
        font-size: 0.3rem;
        font-weight: bold;
        padding: 0.2rem;
      }
    }
    >span{
      color: #FFAF24 !important;
    }
  }
  >.list{
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
        background-image: url('../assets/v1.png');
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
            line-height: 0.32rem;
            height: 0.32rem;
            font-size:12px;
            text-align: center;
            margin-right: 0.1rem;
            color: #FFffff;
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
.sourse{
  >.title{
    >span:nth-child(1){
       border-left: 0.08rem solid #76D2B4;
    }
    >span:nth-child(2){
      color:#76D2B4;
    }
  }
  >.list{
    >div{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding: 0.2rem 0;
      >div:nth-child(1){
        width: 2.6rem;
        height: 1.46rem;
        background-image: url('../assets/home_yh_1.png');
        background-size: cover;
        background-position: center;
      }
      >div:nth-child(2){
        position: relative;
        width: 4.6rem;
        margin-left: 0.2rem;
        >p:nth-child(2){
          color: #666666;
          font-size: 0.24rem;
          margin: 0.2rem 0;
        }
        >p:nth-child(3){
          color: #999999;
          font-size: 0.24rem;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
}
.jz{
  background:rgba(230,187,185,.1);
  padding-bottom: 0.2rem;
  >.list{
      padding-top: 0.2rem;
    >div{
      background: #FFffff;
      box-sizing: border-box;
      padding: 0.2rem;
      border-radius: 4px;
      >.top{
        display: flex;
        border-bottom: 1px solid #eee;
          padding-bottom: 0.2rem;
        >div:nth-child(1){
          width: 1.5rem;
          height: 1rem;
          border-radius: 3px;
          background-image: url('../assets/home_yh_1.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          margin-left: 0.2rem;
          width: 5rem;
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
      >.bot{
         padding-top: 0.2rem;
        color: #666666;
        font-size: 0.24rem;
      }
    }
  }
}
.zw{
  padding-top: 0.3rem;
  padding-bottom: 0.4rem;
  >.content{
    border: 1px solid #eee;
    border-radius:2px;
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
          vertical-align: bottom;
          margin-right: 0.1rem;
          color: #666666;
        }
      }
    }
  }
  >.list{
    >div{
      padding: 0.2rem 0;
      border-bottom: 1px solid #eee;
      >p:nth-child(1){
        >span:nth-child(1){
          display: inline-block;
          background: #FFAF24;
          border-radius: 3px;
          width: 1.1rem;
          line-height: 0.4rem;
          height: 0.4rem;
          font-size: 12px;
		  text-align: center;
          // margin-righ12px;12px;em;
          color: #FFffff;
          margin-bottom: 0.2rem;
        }
      }
      >p:nth-child(2){
        font-size: 0.24rem;
        >img{
          max-width: 0.3rem;
          vertical-align: bottom;
          margin-right: 0.1rem;
          color: #666666;
        }
      }
    }
  }
}
footer{
  text-align: center;
  width: 100%;
  padding: 0.4rem 0;
  background: #EEEEEE;
  font-size: 0.22rem;
  color: #999999;
  position: relative;
  >div{
    width: 1rem;
    height: 1rem;
    background: #FFFFFF;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: fixed;
    right: 0.2rem;
    bottom:0.5rem;
    >img{
      max-width: 0.48rem;
      margin-top: 0.31rem;
    }
  }
  >p{
    margin: 0.3rem 0;
  }
}
.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0;
    >span:nth-child(1){
      font-size: 0.3rem;
      font-weight: bold;
      border-left: 0.08rem solid #B591CA ;
      padding-left: 0.1rem;
    }
    >span:nth-child(2){
      font-size: 12px;
	  color:#B591CA;
    }
}
</style>
