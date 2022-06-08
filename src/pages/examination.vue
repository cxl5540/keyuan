<template>
  <div class="examnation">
    <div class="main">
       <p><span>共10道题 满分100分 时长60分钟</span>  <span>倒计时：<span>56:20</span></span></p>
       <div class="list">
         <div v-for="i,index in list" :key='index'>
             <p>{{index+1}} 、 {{i.title}}</p>
              <div v-for="i_n in i.t">
               <p class="item" :class="i_n.chcked?'active':''"><span><img src="../assets/icon_check.png" v-show="i_n.chcked" alt=""></span><span>{{i_n.n}}</span>  </p>
              </div>
          </div>
       </div>
       <div class="btns">
         <button @click="$router.go(-1)">返回</button>
         <button @click="show=true">选题</button>
         <button @click="result()">交卷</button>
       </div>
    </div>
    <van-popup v-model="show">
        <div class="content">
             <p>题目选择</p>
             <div>
               <span v-for="i,index in 30">{{i}}</span>
             </div>
             <div class="btns">
               <button @click="show=false">取消</button>
               <button  @click="show=false">确定</button>
             </div>
        </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      show: false,
      list:[
        {
          title:'下列关于重大危险源监管的描述中，错误的是（ ）',
          t:[
            {n:'A、公安部',chcked:false,},
            {n:'B、公安部',chcked:true,},
            {n:'C、公安部',chcked:false,},
          ]
        },{
          title:'下列关于重大危险源监管的描述中，错误的是（ ）',
         t:[
           {n:'A、公安部1',chcked:false,},
           {n:'B、公安部2',chcked:false,},
           {n:'C、公安部3',chcked:false,},
         ]
        },

      ]
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    result(){
      this.$router.push('/after_exam')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.main{
  >p:nth-child(1){
    margin: 0.3rem 0;
    padding: 0.3rem 0.2rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    background: rgba(109,198,249,0.1);
    >span:nth-child(2){
      color: #999999;
      >span{
        color: red;
      }
    }
  }
  >.list{
    padding-bottom: 1.2rem;
    >div{
      margin-bottom: 0.2rem;
      >p{
        margin-bottom: 0.2rem;
      }
      >div{
        .item{
          display: flex;
          margin-bottom: 0.1rem;
          padding: 0.1rem 0;
          >span:nth-child(1){
            width: 0.36rem;
            height: 0.36rem;
            display: inline-block;
            border: 1px solid #eee;
            border-radius: 50%;
            margin-right: 0.1rem;
            >img{
              width: 100%;
            }
          }
           >span:nth-child(2){
             display: flex;
             width: 90%;
           }
        }
        .active{
          background: rgba(255,175,36,.1);
        }
      }

    }

  }
  >.btns{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    box-shadow: 0px 3px 7px 0px rgba(102, 102, 102, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-around;
     padding: 0.2rem 0;
    >button{
      border: none;
      height: 0.8rem;
      line-height: 0.8rem;
      color: #fff;
      border-radius: 5px;
    }
     >button:nth-child(1){
        width: 1.74rem;
       background: #4CADFF ;
     }
     >button:nth-child(2){
       width: 1.74rem;
       background: #76D2B4;
     }
     >button:nth-child(3){
       width: 3rem;
       background:#FFAF24;
     }
  }
}
.content{
  width: 7rem;
  height: 9rem;
  background: #FFFFFF;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0.1rem;
  text-align: center;
  position: relative;
  >p{
    text-align: left;
    padding: 0.2rem;
    font-weight: bold;
  }
  >.btns{
    text-align: center;
    position: absolute;
    bottom: 0.1rem;
    left: 50%;
    width: 7rem;
    margin-left: -3.5rem;
    >button{
      width: 3.13rem;
      height: 0.8rem;
      border: 1px solid #CCCCCC;
      border-radius: 5px;
      color: #999999;
      background: #fff;
    }
    >button:nth-child(2){
      background:#FFAF24;
      color: #fff;
    }
  }
  >div{
    >span{
      display: inline-block;
      width: 0.92rem;
      height: 0.46rem;
      border: 1px solid #BFBFBF;
      border-radius: 2px;
      text-align: center;
      line-height: 0.46rem;
      margin: 0.1rem;
    }
  }
}
@media screen and (min-width: 769px){
  .examnation{
    width: 750px;
    margin: auto;
    font-size: 26px;
    >.main{
      width: 100%;
      >p{
         font-size: 26px;
      }
    }
  }
  .main{
    >.btns{
      width: 750px;
      left:50%;
      margin-left: -375px;
      //font-size: 26px;
    }
  }

}
</style>
