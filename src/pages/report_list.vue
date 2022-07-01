<template>
  <div class="page">
        <div class="title">
          <span>{{type_r==2?'督查':'举报'}}上报记录</span>
          <span @click="$router.go(-1)">返回></span>
        </div>
      <div class="main">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多数据"
              @load="onLoad"
            >
             <div class="list">
                <div v-for="i,index in list" :key='index'  @click="$router.push({path:'/report_del',query:{id:i.id}} )">
                    <div class="top">
                        <p><span>{{i.name}}</span></p>
                        <span>隐患位置：{{i.position}}</span>
                    </div>
                    <div class="bot">
                      <p><span><img src="../assets/icon_ren.png"/>上报人：{{i.user_name}}</span> <span>{{i.create_time}}</span></p>
                    </div>
                </div>
             </div>
            </van-list>
          </van-pull-refresh>
      </div>
  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
      type:'全部',
      show:false,
      actions: [{ name: '全部' }, { name: '待处理' }, { name: '处理中' }, { name: '待完成' }, { name: '已完成' }],
      key: '',
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page:1,
      pages:'',
      type_r:''
    }
  },
  created() {
    this.type_r=this.$route.query.type
  },
  mounted() {

  },
  methods:{
    onSelect(item){
      this.show = false;
      this.type=item.name;
    },
    getlist(){
      //this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'HiddenReport/hidden_report_list',
              key:this.key,
              page:this.page,
              limit:10,
              user_id:localStorage.getItem('uid'),
              type:this.type_r,
              status:'',
              report_and_assign:''
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                  _this.loading = false;
                   _this.page++
                _this.pages=res.data.pages;
                var li=res.data.hidden_list;
                for(var i=0;i<li.length;i++){
                    _this.list.push(li[i]);
                }
                if (li.length<10) {
                  _this.finished = true;
                 }
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
.page{
  >.title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem 0.2rem;
      >span:nth-child(1){
        font-size: 0.3rem;
        font-weight: bold;
        padding-left: 0.1rem;
      }
      >span:nth-child(2){
        font-size: 12px;    color:#999999;
      }
  }
}
.main{
  padding: 0.2rem;
  background: #F8F8F8;
  .list{
    >div{
      border: 1px solid #eee;
      box-sizing: border-box;
      padding: 0.2rem;
      border-radius: 5px;
      margin-bottom: 0.2rem;
      background: #fff;
      margin-top: 0.2rem;
      >.top{
        >p{
          display: flex;
          justify-content: space-between;
          >span:nth-child(1){
            font-size: 0.3rem;
          }
        }
        >span{
          display: inline-block;
          margin: 0.2rem 0;
          color: #999999;
          font-size: 12px;
        }
      }
      >.bot{
         >p{
           display: flex;
           justify-content: space-between;
           >span:nth-child(1){
             >img{
               width: 0.32rem;
               height: 0.32rem;
               vertical-align: middle;
             }
           }
            >span:nth-child(2){
              color: #999999;
              font-size: 12px;
            }
         }
      }
    }
  }

}
</style>
