<template>
  <div class="main">
      <div class="title">
          <span>有奖征文</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <div class="search">
          <!-- <div class="lt" @click="show = true">{{type}}<img src="../assets/icon_sxuan.png" alt=""></div> -->
          <div class="rt">
             <input type="" v-model="key" placeholder="请输入关键词"/>
             <img src="../assets/sousuo_lan.png" alt="" @click="search()">
          </div>
      </div>
      <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" /> -->
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更数据"
          @load="onLoad"
        >
          <div class="list">
              <div class="content" v-for="i,index in list" :key='index'  @click="detail(i.id)">
                <div>
                  <img :src="baseUrl+i.cover" alt="">
                  <span v-if="i.label!==1" :style="{background:i.label==2?'#FFAF24':i.label==3?'#6DC6F9':'#DCDCDC '}">{{i.label==2?'报名中':i.label==3?'审评中':'已结束'}}</span>
                </div>
                <div>
                  <p>{{i.name}}</p>
                  <p><img src="../assets/icon_time.png" alt=""><span>{{i.enroll_start_time}}~{{i.publish_time}}</span></p>
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
      //actions: [{ name: '全部' }, { name: '国家安全' }, { name: '消防交通' }],
      key: '',
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
              action:'SafeKnowledge/prize_essay_list',
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
                var li=res.data.prize_essay_list;
                for(var i=0;i<li.length;i++){
                    _this.list.push(li[i]);
                }
                if (li.length<10) {
                  _this.finished = true;
                 }
        		}
          });
    },
    detail(id){
      this.$router.push({path:'/solicitation_del',query:{id:id}} )
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
  .search{
    width: 100%;
    background: #F2F2F2;
    height: 0.8rem;
    display:flex;
    overflow: hidden;
    border-radius: 5px;
    justify-content: space-between;

    >.rt{
       width:100%;
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
  .content{
    border: 1px solid #eee;
    border-radius:2px;
    margin-top: 0.2rem;
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
        width: 1rem;
        //height: 0.48rem;
        text-align: center;
        //line-height: 0.48rem;
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
          position: relative;
          top:0.07rem;
          margin-right: 0.1rem;
          color: #666666;
        }
      }
    }
  }
}
</style>
