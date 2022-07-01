<template>
  <div class="header">
      <div class="logo">
        <img src="../assets/logo_ky.png" alt="">
      </div>
      <div>
        <div class="mes" @click="$router.push('/message')">
          <img src="../assets/icon_tongzhi.png" alt="">
          <span></span>
        </div>
        <div @click="open">
          <img style="max-height: 0.58rem;" src="../assets/icon_fenlei.png" alt="">
        </div>
      </div>
      <van-popup position="right" v-model="show" style="height: 100%;width: 100%;">
         <div class="main">
           <div class="login">
             <div>
               <img src="../assets/icon_login.png" alt="">
               <span>{{info.name}}</span>
             </div>
             <div>
               <img  @click="close" src="../assets/icon_close.png" alt="">
             </div>
           </div>
           <ul>
             <li v-for="i,index in list" :key='index' @click="gopath(i.url)"><span>{{i.name}}</span> <img src="../assets/icon_enter.png"></li>
           </ul>
         </div>
         <div class="pic" @click="$router.push('/index')">
           <img src="../assets/img_yhsbxt.png" alt="">
         </div>

      </van-popup>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      show:false,
      info:'',
      list:[{ name:'安全课程学习',url:'/course'},{ name:'知识资源库',url:'/knowledge_list'},{ name:'安全知识讲座',url:'/knowledge_lecture'},{ name:'有奖征文',url:'/solicitation'},{ name:'个人中心',url:'/mine'}]
    }
  },
  created() {
     this.info=JSON.parse(localStorage.getItem('info'))
  },
  mounted() {

  },
  methods:{
    open(){
      this.show = true;
    },
    close(){
       this.show = false;
    },
    gopath(url){
       this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.header{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.2rem 0.2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: #fff;
  >div:nth-child(2){
    display: flex;
    >.mes{
      position: relative;

      >img{
         border-right: 1px solid #eee;
         padding-right: 0.3rem;
      }
      >span{
        display: inline-block;
        width: 0.14rem;
        height: 0.14rem;
        background: #FF0000;
        border-radius: 50%;
         position:absolute;
         right: 0.36rem;
         top: 0rem;
      }
    }
    >div:nth-child(2){
      >img{
         padding-left: 0.3rem;
      }
    }
  }
  >.logo>img{
     max-height: 0.58rem;
  }
  >div>.mes>img{
    max-height: 0.58rem;
  }
}
.main{
  >.login{
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0;
    >div:nth-child(1){
      >img{
        max-width: 0.72rem;
        vertical-align: middle;
        margin-right: 0.1rem;
      }
    }
    >div:nth-child(2){
      max-width: 0.36rem;
    }
  }
  >ul{
    >li{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      padding: 0.3rem 0;
      >img{
        max-width: 0.22rem;
      }
    }
  }
}
.pic{
  margin-top: 1.5rem;
}
</style>
