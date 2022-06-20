<template>
  <div>
     <div class="bg">
        <div class="mine main">
          <div class="hed">
            <div class="login">
              <div>
                <img src="../assets/icon_login.png" alt="">
                <div>
                    <p>张三</p>
                    <p>某某某某某学院 | 某某科室 | 某某部门</p>
                </div>
              </div>
              <div @click="goindex()">
                <span>返回首页></span>
              </div>
            </div>
            <div class="ks">
              <p>必修课：<span>{{schedule_info.compulsory_credit}}</span>分&nbsp;|&nbsp;选修课：<span>{{schedule_info.elective_credit}}</span>分&nbsp;|&nbsp;
              总课程数：<span>{{schedule_info.course_count}}</span>门，您还需要学习<span>{{schedule_info.surplus_compulsory_count}}</span>门必修课，选修课还需<span>{{schedule_info.surplus_elective_count}}分</span></p>
              <div class="line">
                <p>时长要求：<span>{{schedule_info.learn_duration?gettime(schedule_info.learn_duration):'00:00:00'}}</span>/{{gettime(schedule_info.duration_require)}}</p>
                <div>
                  <div  :style="{width:(schedule_info.duration_percentage)+'%'}"></div>
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
              <button @click="$router.push({path:'/course_list',query:{schedule_id:schedule_info.id}})">进入学习</button>
            </div>
          </div>
          <div class="list">
            <ul>
              <li v-for="i,index in list" :key='index'  @click="gopath(i.url)"><span  :style="{'border-left':'4px solid' + i.sty}">{{i.name}}</span> <img src="../assets/icon_enter.png"></li>
            </ul>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
        schedule_info:{},
        list:[{ name:'安全课程学习',sty:'#FFAF24',url:'/course'},{ name:'学时学分记录',sty:'#76D2B4',url:'/credit_record'},{ name:'考试记录',sty:'#6DC6F9',url:'/exam_record'},{ name:'征文报名记录',sty:'#FF847F',url:'/regist_record'}]
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
              action:'SafeKnowledge/personal',
              user_id:1,
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                _this.$toast.clear();
                _this.schedule_info=res.data.schedule_info;
        			 }
          });
    },
    goindex(){
      this.$router.push('/')
    },
    gopath(url){
     this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.bg{
  height:3.4rem;
  background: #C6CBF1;
  float: inherit;
}
.mine{
  position: relative;
  top: 0.5rem;
  >.hed{
    box-sizing: border-box;
    padding:0.3rem 0.1rem;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(102, 102, 102, 0.2);
  }
  >.list{
    >ul{
      >li{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding: 0.3rem 0;
        >span{
          display: inline-block;
          padding-left: 0.2rem;
        }
        >img{
          max-width: 0.22rem;
        }
      }
    }
  }
  .login{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
   // padding: 0.4rem 0;
    >div:nth-child(1){
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      color: #666666;
      >div>p:nth-child(1){
        font-size: 0.32rem;
      }
      >img{
        max-width: 0.72rem;
        vertical-align: middle;
        margin-right: 0.1rem;
      }
    }
    >div:nth-child(2){
      color: #999999;
    }

  }
  .ks{
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
          font-size: 12px;      position: absolute;
          right: -0.7rem;
          top: -0.06rem;
        }
      }
    }
    >button{
      height: 0.88rem;
      line-height: 0.88rem;
      font-weight: bold;
      color: #FFAF24;
      width: 100%;
      border-radius: 0.44rem;
      background: #FFF6E6;
      border: 1px solid #FFAF24;
      margin: 0.2rem 0;
    }
  }
}
</style>
