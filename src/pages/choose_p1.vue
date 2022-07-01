<template>
  <div class="main">
  <p></p>
  <div class="search">
      <div class="rt">
         <input type="" v-model="key" placeholder="请输入拼音首字母/关键字查询"/>
         <img src="../assets/sousuo_hui.png" alt="">
      </div>
  </div>
  <div>
    <div>
       <!-- 递归组件 -->
       <treeMenu :list='list' />
     </div>
  </div>

    <button>确定</button>
  </div>
</template>

<script>
  import treeMenu from "../components/recursion.vue";
export default {
  name: '',
  data () {
    return {
      activeNames: ['1'],
      activeNames1:['4'],
      radio:'1',
      key:'',
      list: [
             {
               name: '黄焖鸡米饭111111111',
               children: [
                 { name: '二级黄焖鸡' },
                 {
                   name: 'one chicken',
                   children: [
                     { name: '三级黄焖鸡3333', children: [{ name: '四级黄焖鸡' }] }
                   ]
                 }
               ]
             },
             { name: '2222222222' },
             {
               name: '黄焖鸡米饭33333333',
               children: [{ name: '二级黄焖鸡' }, { name: 'one chicken' }]
             }
           ]
     
 

    }
  },
  components: {
      treeMenu,
    },
  created() {

  },
  mounted() {

  },
  methods:{
    open(){
      console.log(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
  .main{
    >p{
      color: #666666;
      padding: 0.3rem 0;
    }
    >button{
      width:7.1rem;
      height: 0.88rem;
      background: #FFAF24;
      border-radius: 5px;
      color: #FFffff;
      border: none;
      position: fixed;
      bottom: 0.2rem;
      left:50%;
      margin-left: -3.55rem;
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
   margin:0 auto 0.3rem;
   >.rt{
      width: 100%;
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
/deep/ .van-collapse-item{
  >.van-cell--clickable{
     background: rgba(109,198,249,0.1)
  }
}
/deep/.van-collapse-item__content{
  .van-cell--clickable{
    background: rgba(255,132,127,0.1) !important;
  }
}
/deep/.van-collapse-item__content>p{
   background: rgba(255,175,36,0.1);
   padding: 0.2rem;
   width: 100%;
   color: #333;
   display: flex;
   justify-content: space-between;
}
/deep/.van-cell--clickable{
      text-decoration: underline;
}
</style>
