<template>
  <div class="page">
    <ul>
      <li :class="report_and_assign==1?'activ':'' " @click="choose_type(1)">我的上报</li>
      <li  :class="report_and_assign==2?'activ':'' " @click="choose_type(2)">我的指派</li>
    </ul>
      <div class="main">
          <div class="search">
              <div class="lt" @click="show = true">{{type}}<img src="../assets/icon_sxuan.png" alt=""></div>
              <div class="rt">
                 <input type="" v-model="key" placeholder="请输入关键词"/>
                 <img src="../assets/sousuo_lv.png" alt="" @click="search">
              </div>
          </div>
          <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多数据"
              @load="onLoad"
            >
             <div class="list">
                <div v-for="i,index in list" :key='index' @click="detail(i.id)">
                    <div class="top">
                        <p><span>{{i.type==4?'(专项上报)':''}} {{getstr(i.name,12)}}</span>
                        <span :style="{background:i.status==1?'#DCDCDC':i.status==2?'#FFE3CA':i.status==3?'#D8F2CE':i.status==4?'#CEEFDD':'#D8BFD8'}">{{i.status==1?'待处理':i.status==2?'处理中':i.status==3?'待完成':i.status==4?'已完成':'已驳回'}}</span>
                        </p>
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
      <p><img src="../assets/icon_zhuyi.png" alt="">待完成：初步排除隐患，后续将系统整治。</p>
  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
      status:'',
      type:'全部',
      show:false,
      actions: [{ name: '全部',status:'' }, { name: '待处理',status:1 }, { name: '处理中' ,status:2}, { name: '待完成',status:3}, { name: '已完成',status:4}],
      key: '',
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page:1,
      pages:'',
      type_r:'',
      report_and_assign:1
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    detail(id){
      if(this.report_and_assign==1){
        this.$router.push({path:'/report_deal',query:{id:id}} )
      }else{
        this.$router.push({path:'/report_deal1',query:{id:id}} )
      }

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
              status:this.status,
              report_and_assign:this.report_and_assign
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
    choose_type(report_and_assign){
      this.report_and_assign=report_and_assign;
      this.onRefresh()
    },
    onSelect(item){
      this.show = false;
      this.type=item.name;
      this.status=item.status;
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
  >p{
    color: #999999;
    font-size: 12px;
    position: fixed;
    bottom: 0.1rem;
    left: 0.2rem;
    >img{
      width: 0.28rem;
      height: 0.28rem;
      vertical-align: bottom;
      margin-right: 0.1rem;
    }
  }
  >ul{
    border-bottom: 1px solid #eee;
    padding: 0;
    margin:0;
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
}
.main{
  padding: 0.2rem;
  background: #F8F8F8;
  >.search{
    width: 100%;
    background: #fff;
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
         background: #fff;
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
          >span:nth-child(2){
            display: inline-block;
            width: 1.12rem;
            height: 0.48rem;
            background: #E7E7E7;
            border-radius:2px;
            font-size: 12px;
            text-align: center;
            line-height: 0.48rem;
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
               position: relative;
               top: 0.05rem;
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
