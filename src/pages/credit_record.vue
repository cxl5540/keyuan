<template>
  <div class="main">
      <div class="title">
          <span>学时学分记录</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <ul>
        <li :class="type==1?'activ':''" @click="choose(1)">必修课</li>
        <li  :class="type==2?'activ':''" @click="choose(2)">选修课</li>
      </ul>
      <p>已获得学分：{{learn_credit_count}}分&nbsp;&nbsp;累计学习时长{{gettime(learn_duration_count)}}</p>
      <div class="list">
          <div v-for="i,index in list" :key='index' @click="course_del(i.course_id)">
              <div>
                <p>{{i.course_name}}</p>
                <p>学习时长：<span>{{gettime(i.learn_duration)}}</span> </p>
              </div>
              <div>
                <span>+{{i.learn_credit}}</span> <img src="../assets/icon_enter.png"/>
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
      list:'',
      type:1,
      learn_credit_count:'',
      learn_duration_count:''
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
              action:'SafeKnowledge/credit_record_list',
              user_id:localStorage.getItem('uid'),
              type:this.type
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                _this.$toast.clear();
                _this.list=res.data.learn_list;
                _this.learn_credit_count=res.data.learn_credit_count;
                _this.learn_duration_count=res.data.learn_duration_count;
        			 }
          });
    },
    course_del(course_id){
      this.$router.push({path:'/course_del',query:{course_id:course_id}})
    },
    choose(type){
      this.type=type;
      this.getdata()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.main{
  >.title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem 0;
      >span:nth-child(1){
        font-size: 0.3rem;
        font-weight: bold;
        border-left: 0.08rem solid #76D2B4;
        padding-left: 0.1rem;
      }
      >span:nth-child(2){
        font-size: 12px;    color:#999999;
      }
  }
  >ul{
    border-bottom: 1px solid #eee;
    padding: 0;
    margin:0 0 0.2rem;
    display: flex;
    justify-content: space-around;
    >li{
      display: inline-block;
      font-size: 0.3rem;
      font-weight: bold;
      padding: 0.2rem;
    }
    .activ{
      border-bottom:2px solid  #FFAF24;
    }
  }
  >p{
    text-align: center;
    color: #666666;
    margin: 0.2rem 0;
  }
  .list{
      >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #eee;
        box-sizing: border-box;
        padding: 0.1rem;
        margin-bottom: 0.2rem;
        border-radius: 4px;
        >div:nth-child(1){
          width:80%;
          >p{
            margin: 0.1rem 0;
          }
          >p:nth-child(2){
            font-size: 0.24rem;
            >span{
              color: #3EB7FC;
            }
          }
        }
        >div:nth-child(2){
          width: 20%;
          justify-content: flex-end;
          align-items: center;
          display: flex;
          >span{
            font-weight: bold;
            color: #FEA100;
            font-size: 0.32rem;
            display: inline-block;
            margin-right: 0.2rem;
          }
        }
      }
  }
}
</style>
