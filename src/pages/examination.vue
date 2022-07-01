<template>
  <div class="examnation">
    <div class="main">
       <p><span>共{{question_number}}道题&nbsp;&nbsp;满分{{total_score}}分&nbsp;&nbsp;时长{{exam_time}}分钟</span>&nbsp;&nbsp;<span>倒计时：<span>{{count}}</span></span></p>
       <div class="list">
         <div v-for="i,index in topic_list" :key='index'>
             <p :id="'a'+Number(index+1)+'a'">{{index+1}} 、 {{i.content}} ( {{i.type==1?'单选':i.type==3?'判断':'多选'}} )</p>
              <div  v-for="i_n,i_index in i.answer" :key='i_index'>
               <p class="item" v-if="i_n.name" :class="i_n.isSelect?'active':''"  @click="choose(i_n,index,i_index,i.type)">
                 <span><img src="../assets/icon_check.png" v-show="i_n.isSelect" alt=""></span>
                 <span>{{i_n.name}}</span>
               </p>
              </div>
          </div>
       </div>
       <div class="btns">
         <button @click="$router.go(-1)">返回</button>
         <button @click="show=true">选题</button>
         <button @click="result()">交卷</button>
       </div>
    </div>
    <van-popup v-model="show">
        <div class="content">
             <p>题目选择</p>
             <div>
               <span v-for="i,index in topic_list" @click="goAnchor(i.sort,index)" :class="activ==index?'active_bg':''">{{i.sort}}</span>
             </div>
             <div class="btns">
               <button @click="cansle()">取消</button>
               <button  @click="sure()">确定</button>
             </div>
        </div>
    </van-popup>
  </div>
</template>

<script>
import {start_examAPI,submit_test_paperAPI} from '../api/api.js'
export default {
  name: '',
  data () {
    return {
      show: false,
      topic_list:'',
      exam_time:'',
      question_number:'',
      total_score:'',
      count: '',
      seconds:'',
      attr:['A','B','C','D','E','F'],
      str_answer:'',
      selector:'',
      activ:null,
      timer:null
    }
  },
  created() {
    this.getdata();
  },
  mounted() {
  },
  destroyed() {
     clearInterval(this.timer)
  },
  methods:{
    getdata(){
         this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
         var url=this.baseUrl+'api/Index/apppost';
         var data={
             user_id:localStorage.getItem('uid'),
             exam_id:1,
             action:'Exam/start_exam'
           }
           let _this=this;
           $.post(url,data,function(res){
             _this.$toast.clear();
           			 if(res.code==200){
                  _this.topic_list=res.data.topic_list;
           			 _this.exam_time=res.data.exam_info.exam_time;
           			 _this.seconds=res.data.exam_info.exam_time*60;
           			 _this.question_number=res.data.exam_info.question_number;
           			 _this.total_score=res.data.exam_info.total_score;
           			  _this.Time()
           			}
             });

    },
    choose(item,index,i_index,type){  //选择
      if(type==2){  //多选
        this.topic_list[index].answer[i_index].isSelect=!this.topic_list[index].answer[i_index].isSelect;
        var str='';
        for(var i=0;i<this.topic_list[index].answer.length;i++){
          if(this.topic_list[index].answer[i].isSelect==true){
            str=str+this.attr[i]+','
          }
        }
        if(str){
          this.topic_list[index].select_answer=str.substring(0,str.length - 1)
        }
      }else{
        for(var i=0;i<this.topic_list[index].answer.length;i++){
          this.topic_list[index].answer[i].isSelect=false;
        }
          this.topic_list[index].answer[i_index].isSelect=true;
          this.topic_list[index].select_answer=this.attr[i_index] //选择答案
      }
    },
    goAnchor(selector,index){ //选择题目
      this.selector='#'+'a'+selector+'a' ;
      this.activ=index;
    },
    cansle(){
      this.selector='';
      this.activ=null;
      this.show=false;
    },
    sure(){
      this.show=false;
      this.activ=null;
      if(this.selector){
        $('html,body').scrollTop($(this.selector).offset().top-100);

        // return false;
        // document.querySelector(this.selector).scrollIntoView({
        //     behavior: "smooth",
        //     block:'center',
        //     inline:'end'
        // });
      }

    },
    countDown() {
            let h = parseInt(this.seconds / (60 * 60) % 24);
            h = h < 10 ? "0" + h : h
            let m = parseInt(this.seconds / 60 % 60);
            m = m < 10 ? "0" + m : m
            let s = parseInt(this.seconds % 60);
            s = s < 10 ? "0" + s : s
            this.count = h + ':' + m + ':' + s
        },
        //定时器没过1秒参数减1
      Time() {
       this.timer =setInterval(() => {
            if(this.seconds>=1){
              this.seconds -= 1
              this.countDown()
            }else{
              clearInterval(this.timer)
              this.$dialog.alert({
                title: '提示',
                message: '考试时间已结束，请立即提交试卷',
              }).then(() => {
                this.submit()
              });
            }
          }, 1000)
      },
    result(){  //提交试卷
        this.$dialog.confirm({
          title: '提示',
          message: '确认提交试卷？',
        })
          .then(() => {
            this.submit();
            // on confirm
          })
          .catch(() => {
            this.$toast('已取消')
          });
    },
    submit(){
      var list=this.topic_list;
      var str_answer=''
      for(var i=0;i<list.length;i++){
        if(!list[i].select_answer){
          list[i].select_answer='Z'
        }
         str_answer=str_answer+list[i].select_answer+'&&&'
      }
      this.str_answer=str_answer.substring(0,str_answer.length - 3);

      this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      var url=this.baseUrl+'api/Index/apppost';
      var data={
         user_id:localStorage.getItem('uid'),
         exam_id:1,
         exam_num:this.topic_list[0].exam_num,
         user_answer:this.str_answer,
         surplus_time:this.seconds,
          action:'Exam/submit_test_paper'
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
        			 _this.$toast(res.msg);
        			 setTimeout(res1=>{
        			    _this.$router.push({path:'/after_exam',query:{score_id:res.data.score_id}} )
        			 },200)
        			}
          });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.main{
  >p:nth-child(1){
    margin: 0.1rem 0 0.3rem;
    box-sizing: border-box;
    padding: 0.3rem 0.2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    background: #f1faff;
    position: fixed;
    left:0.2rem;
    top: 0;
    width:7.1rem;
    >span:nth-child(2){
      color: #999999;
      >span{
        color: red;
      }
    }
  }
  >.list{
    padding-bottom: 1.2rem;
    margin-top: 1.4rem;
    >div{
      margin-bottom: 0.2rem;
      >p{
        margin-bottom: 0.2rem;
        line-height: 0.5rem;
      }
      >div{
        .item{
          display: flex;
          margin-bottom: 0.1rem;
          padding: 0.1rem 0;
          >span:nth-child(1){
            width: 0.36rem;
            height: 0.36rem;
            display: inline-block;
            border: 1px solid #AAAAAA;
            border-radius: 50%;
            margin-right: 0.1rem;
            >img{
              width: 100%;
            }
          }
           >span:nth-child(2){
             display: flex;
             width: 90%;
             align-items: center;
           }
        }
        .active{
          background: rgba(255,175,36,.1);
        }
      }

    }

  }
  >.btns{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    box-shadow: 0px 3px 7px 0px rgba(102, 102, 102, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-around;
     padding: 0.2rem 0;
     background: #fff;
    >button{
      border: none;
      height: 0.8rem;
      line-height: 0.8rem;
      color: #fff;
      border-radius: 5px;
    }
     >button:nth-child(1){
        width: 1.74rem;
       background: #4CADFF ;
     }
     >button:nth-child(2){
       width: 1.74rem;
       background: #76D2B4;
     }
     >button:nth-child(3){
       width: 3rem;
       background:#FFAF24;
     }
  }
}
.content{
  width: 7rem;
  height: 9rem;
  background: #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.1rem;
  text-align: center;
  position: relative;
  >p{
    text-align: left;
    padding: 0.2rem;
    font-weight: bold;
  }
  >.btns{
    text-align: center;
    position: absolute;
    bottom: 0.1rem;
    left: 50%;
    width: 7rem;
    margin-left: -3.5rem;
    >button{
      width: 3.13rem;
      height: 0.8rem;
      border: 1px solid #CCCCCC;
      border-radius: 5px;
      color: #999999;
      background: #fff;
    }
    >button:nth-child(2){
      background:#FFAF24;
      color: #fff;
    }
  }
  >div{
    >span{
      display: inline-block;
      width: 0.92rem;
      height: 0.46rem;
      border: 1px solid #BFBFBF;
      border-radius: 2px;
      text-align: center;
      line-height: 0.46rem;
      margin: 0.1rem;
    }
  }
  .active_bg{
    background: #FFAF24;
    color: #fff;
    border: none;
  }
}
@media screen and (min-width: 769px){
  .examnation{
    width: 750px;
    margin: auto;
    font-size: 26px;
    >.main{
      width: 100%;
      >p{
         font-size: 26px;
      }
    }
  }
  .main{
    >.btns{
      width: 750px;
      left:50%;
      margin-left: -375px;
      //font-size: 26px;
    }
  }

}
</style>
