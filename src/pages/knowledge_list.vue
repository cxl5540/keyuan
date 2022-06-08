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
             <img src="../assets/sousuo_lv.png" alt="">
          </div>
      </div>
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
         <div class="list">
           <div @click="todetail()">
               <div></div>
               <div>
                 <p>知识资源标题</p>
                 <p>知识资源视频简介知识资源视频简介...</p>
                 <p>分类：治安</p>
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
      actions: [{ name: '全部' }, { name: '国家安全' }, { name: '消防交通' }],
      key: '',
      list: [{n:'2021年安全课程学习',d:'一段文件介绍安全课程一段文件介...'}],
      loading: false,
      finished: true,
      refreshing: false,
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    study(){
      this.$router.push('/course_list')
    },
    see_certificate(){
       this.$router.push('/certificate')
    },
    onSelect(item){
      this.show = false;
      this.type=item.name;
    },
    todetail(){
      this.$router.push('/knowledge_del')
    },
    onLoad(){

    },
    onRefresh(){

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
