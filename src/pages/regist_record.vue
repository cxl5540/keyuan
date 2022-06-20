<template>
  <div class="content">
      <div class="title">
          <span>征文报名记录</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多数据"
          @load="onLoad"
        >
         <div class="list">
            <div v-for="i,index in list" :key='index'>
               <div class="top">
                 <div :style="{backgroundImage:'url('+baseUrl+i.prize_essay_detail.cover+')'}"></div>
                 <div>
                   <p><span v-if="i.prize_essay_detail.label!==1" :style="{background:i.prize_essay_detail.label==2?'#FFAF24':i.prize_essay_detail.label==3?'#6DC6F9':'#DCDCDC '}">{{i.prize_essay_detail.label==2?'报名中':i.prize_essay_detail.label==3?'审评中':'已结束'}}</span> {{i.prize_essay_detail.name}}</p>
                   <p><img src="../assets/icon_time.png" alt=""><span>{{i.prize_essay_detail.enroll_start_time}}~{{i.prize_essay_detail.publish_time}}</span></p>
                 </div>
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
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page:1,
      pages:'',
    }
  },
  created() {
  },
  mounted() {

  },
  methods:{
  getlist(){
    //this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
    var url=this.baseUrl+'api/Index/apppost';
    var data={
          action:'SafeKnowledge/essay_record_list',
          user_id:localStorage.getItem('uid'),
          page:this.page,
          limit:10
      }
      let _this=this;
      $.post(url,data,function(res){
           if(res.code==200){
              _this.loading = false;
               _this.page++
            _this.pages=res.data.pages;
            var li=res.data.enroll_list;
            for(var i=0;i<li.length;i++){
                _this.list.push(li[i]);
            }
            if (li.length<10) {
              _this.finished = true;
             }
        }
      });
  },
   onLoad(){
     setTimeout(() => {
        this.getlist()
     },1000);
   },
   onRefresh(){
     this.page=1;
     this.refreshing = false;
     this.loading = true;
     this.finished=false;
     this.list=[];
     this.getlist();
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.content{
  >.title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0.3rem 0.2rem;
      >span:nth-child(1){
        font-size: 0.3rem;
        font-weight: bold;
        border-left: 0.08rem solid #FF847F;
        padding-left: 0.1rem;
      }
      >span:nth-child(2){
        font-size: 12px;    color:#999999;
      }
  }
  .list{
    padding-bottom: 0.2rem;
      padding-top: 0.2rem;
    >div{
      background: #FFffff;
      box-sizing: border-box;
      width: 7.1rem;
      margin: auto;
      padding: 0.2rem;
      border-radius: 4px;
      >.top{
        display: flex;
        border-bottom: 1px solid #eee;
          padding-bottom: 0.2rem;
        >div:nth-child(1){
          width: 2.5rem;
          height: 1.4rem;
          border-radius: 3px;
          background-image: url('../assets/home_yh_1.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          margin-left: 0.2rem;
           position: relative;
           width: 4.5rem;
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
          >p:nth-child(2){
            position: absolute;
            bottom: 0;
            left: 0;
            color: #666666;
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
    }
  }
}
</style>
