<template>
  <div class="content">
      <div class="title">
          <span>安全知识讲座</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <div class="search">
          <div class="lt" @click="show = true">{{year}}<img src="../assets/icon_sxuan.png" alt=""></div>
          <div class="rt">
             <input type="" v-model="key" placeholder="请输入关键词"/>
             <img src="../assets/sousuo_fen.png" alt="" @click="search()">
          </div>
      </div>
     <van-popup v-model="show"  position="bottom">
      <van-picker
        title="请选择年份"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
       </van-popup>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
         <div class="list">
            <div v-for="i,index in list" :key='index'  @click="safe_knowledge_del(i.jump_link)">
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
        </van-list>
      </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      year:'',
      show:false,
      columns: [],
      key: '',
      list:[],
      loading: false,
      finished: true,
      refreshing: false,
      page:1,
      pages:'',
    }
  },
  created() {
    this.getdate();
  },
  mounted() {

  },
  methods:{
    getlist(year){
     // this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/safe_knowledge_list',
              year:year.substring(0,year.length-1),
              key:this.key,
              page:this.page,
              limit:10
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                 _this.loading = false;
                   _this.page++
                  _this.pages=res.data.pages;
                 var li=res.data.safe_knowledge_list;
                //_this.$toast.clear();
        			for(var i=0;i<li.length;i++){
        			    _this.list.push(li[i]);
        			}
        			if (li.length<10) {
        			  _this.finished = true;
        			 }
        		}
          });
    },
    getdate(){
      var nowTime = new Date();
      let year = nowTime.getFullYear();
      for(var i=year;i>=1970;i--){
        this.columns.push(i+'年')
      }
        this.year=this.columns[0];
       this.getlist(this.year);
    },
    search(){  //搜索
      this.page=1;
      this.refreshing = false;
       this.loading = true;
       this.finished=false;
      this.list=[];
      this.getlist(this.year)
    },
    safe_knowledge_del(url){  //讲座详情
      window.open(url)
    },
    onConfirm(val){
      this.year=val;
      this.show=false;
    },
    onCancel(val){
      this.show=false;
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
      this.getlist(this.year);
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
  .search{
    width: 7.1rem;
    background: #F2F2F2;
    height: 0.8rem;
    display:flex;
    overflow: hidden;
    border-radius: 5px;
    justify-content: space-between;
    box-sizing: border-box;
    margin: auto;
    >.lt{
      width: 25%;
      text-align: center;
      line-height: 0.8rem;
      border-right: 1px solid #eee;
      >img{
        max-width: 7px;
        vertical-align: middle;
        margin-left: 0.1rem;
      }
    }
    >.rt{
       width: 75%;
       position: relative;
       >input{
         width: 80%;
         height: 100%;
         border:none;
         background: #F2F2F2;
         padding-left: 0.2rem;
       }
       >img{
         position: absolute;
         right:0.2rem;
         top: 0.24rem;
         max-height: 0.32rem;

       }
    }
  }
  .list{
    background:rgba(230,187,185,.1);
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
</style>
