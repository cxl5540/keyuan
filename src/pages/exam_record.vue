<template>
  <div class="main">
      <div class="title">
          <span>考试记录</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <ul>
        <li :class="is_adopt==1?'activ':''" @click="choose(1)">已及格</li>
        <li :class="is_adopt==2?'activ':''" @click="choose(2)">未及格</li>
      </ul>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="无更多数据"
          @load="onLoad"
        >
        <div class="list">
            <div v-for="i,index in list" :key='index' >
                <div>
                  <p><span>{{i.schedule_name}}</span> <span :class="is_adopt==1?'pass':'dispass'">{{is_adopt==1?'已通过':'未通过'}}</span></p>
                  <p>考试分数：<span>{{i.scores}}</span> </p>
                </div>
                <div class="bot">
                  <button @click="see_certificate()">电子证书</button>
                  <button @click="$router.push({path:'/after_exam',query:{score_id:i.id}})">查看详情</button>
                </div>
            </div>
        </div>
      </van-list>
      </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      list:[],
      loading: false,
      finished: false,
      refreshing: false,
      page:1,
      pages:'',
      is_adopt:1
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    getlist(){
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/exam_record_list',
              user_id:1,
              is_adopt:this.is_adopt,
              page:this.page,
              limit:10
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                 _this.loading = false;
                  _this.page++
                  _this.pages=res.data.pages;
                var li=res.data.score_list;
                for(var i=0;i<li.length;i++){
                    _this.list.push(li[i]);
                }
                if (li.length<10) {
                  _this.finished = true;
                 }
        			 }
          });
    },
    choose(type){
      this.is_adopt=type;
      this.page=1;
      this.refreshing = false;
       this.loading = true;
       this.finished=false;
      this.list=[];
      this.getlist();
    },
    onLoad(){
       setTimeout(() => {
         this.getlist()
      },1000);
    },
    onRefresh(){
      setTimeout(res=>{
        this.page=1;
        this.refreshing = false;
         this.loading = true;
         this.finished=false;
        this.list=[];
        this.getlist();
      },500)
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
        border-left: 0.08rem solid #6DC6F9;
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
  .list{
      >div{
        border: 1px solid #eee;
        box-sizing: border-box;
        padding: 0.2rem 0.1rem;
        margin-bottom: 0.2rem;
        border-radius: 4px;
        >div:nth-child(1){
          width:100%;
          >p{
            margin: 0.2rem 0;
          }
          >p:nth-child(1){
            >span:nth-child(2){
              display: inline-block;
              float: right;
              text-align: center;
              line-height: 0.48rem;
              width: 1.12rem;
              height: 0.48rem;
              border-radius:4px;
            }
          }
          >p:nth-child(2){
            font-size: 0.24rem;
            color: #666666;
            >span{
              color: #3EB7FC;
            }
          }
        }
        >div:nth-child(2){
         text-align: center;
         >button{
           width: 1.7rem;
           height: 0.56rem;
           border: 1px solid #3BB5FB ;
           border-radius:0.28rem;
           color:#3BB5FB;
           background: #E9F7FF;
           margin: 0.2rem 0.2rem 0;
           font-size: 12px;
         }
        }
      }
      .pass{
       background: #D8F2CE;
       color: #4EA72B;
      }
      .dispass{
        background: #FFE3CA;
        color: #FF5A00;
      }
  }
}
</style>
