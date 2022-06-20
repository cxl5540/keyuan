<template>
  <div class="main">
      <div class="title">
          <span>知识资源库</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <div class="search">
          <div class="lt" @click="show = true">{{type}}<img src="../assets/icon_sxuan.png" alt=""></div>
          <div class="rt">
             <input type="" v-model="key" placeholder="请输入关键词"/>
             <img src="../assets/sousuo_lv.png" alt=""  @click="search()">
          </div>
      </div>
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="无更多数据"
          @load="onLoad"
        >
         <div class="list">
           <div v-for="i,index in list" :key='index' @click="todetail(i)">
               <div :style="{backgroundImage:'url('+baseUrl+i.cover+')'}"></div>
               <div>
                 <p>{{getstr(i.title,13)}}</p>
                  <p>{{getstr(i.introduce,15)}}</p>
                 <p>分类：{{i.classify_name}}</p>
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
      type:'全部',
      show:false,
      actions:[],
      key: '',
      list:[],
      loading: false,
      finished: false,
      refreshing: false,
      classify_id:'',
      page:1,
      pages:'',
      schedule_info:''
    }
  },
  created() {
    this.schedule_info=this.$route.query.schedule_id;
    this.get_classify_list()
  },
  mounted() {
    // this.getlist()
  },
  methods:{
    getlist(){
      //this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/resource_list',
              classify_id:this.classify_id,
              key:this.key,
              page:this.page,
              limit:10
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                  _this.loading = false;
                   _this.page++
                //_this.$toast.clear();
                _this.pages=res.data.pages;
                var li=res.data.resource_list;
                for(var i=0;i<li.length;i++){
                    _this.list.push(li[i]);
                }
                if (li.length<10) {
                  _this.finished = true;
                 }
        		}
        });
    },
    get_classify_list(){
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/resource_classify_list',
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                _this.actions=res.data.resource_classify_list;
                var obj={};
                obj.id='';obj.name='全部'
                _this.actions[0]=obj;
        		}
          });
    },
    search(){  //搜索
      this.page=1;
      this.refreshing = false;
       this.loading = true;
       this.finished=false;
      this.list=[];
      this.getlist()
    },
    onSelect(item){
      this.show = false;
      this.type=item.name;
      this.classify_id=item.id;
    },
    todetail(i){
       this.$router.push({path:'/knowledge_del',query:{course_id:i.id,schedule_id:this.schedule_info.id}})
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
        border-left: 0.08rem solid #76D2B4;
        padding-left: 0.1rem;
      }
      >span:nth-child(2){
        font-size: 12px;    color:#999999;
      }
  }
  .search{
    width: 100%;
    background: #F2F2F2;
    height: 0.8rem;
    display:flex;
    overflow: hidden;
    border-radius: 5px;
    justify-content: space-between;
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
        width: 4.5rem;
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
</style>
