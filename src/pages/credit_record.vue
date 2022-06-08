<template>
  <div class="main">
      <div class="title">
          <span>学时学分记录</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <ul>
        <li class="activ">必修课</li>
        <li>选修课</li>
      </ul>
      <p>已获得学分：6分 累计学习时长：4:10:00</p>
      <div class="list">
          <div v-for="i,index in list" :key='index'>
              <div>
                <p>{{i.n}}</p>
                <p>学习时长：<span>{{i.t}}</span> </p>
              </div>
              <div>
                <span>{{i.d}}</span> <img src="../assets/icon_enter.png"/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      list:[
        {n:'学习课程名称学习课程名称',d:'+2',t:'1:20:00'},
        {n:'学习课程名称学习课程名称',d:'+2',t:'1:20:00'},
        {n:'学习课程名称学习课程名称',d:'+2',t:'1:20:00'},
      ],
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{

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
  >ul{
    border-bottom: 1px solid #eee;
    padding: 0;
    margin:0 0 0.2rem;
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
  >p{
    text-align: center;
    color: #666666;
    margin: 0.2rem 0;
  }
  .list{
      >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #eee;
        box-sizing: border-box;
        padding: 0.1rem;
        margin-bottom: 0.2rem;
        border-radius: 4px;
        >div:nth-child(1){
          width:80%;
          >p{
            margin: 0.1rem 0;
          }
          >p:nth-child(2){
            font-size: 0.24rem;
            >span{
              color: #3EB7FC;
            }
          }
        }
        >div:nth-child(2){
          width: 20%;
          justify-content: flex-end;
          align-items: center;
          display: flex;
          >span{
            font-weight: bold;
            color: #FEA100;
            font-size: 0.32rem;
            display: inline-block;
            margin-right: 0.2rem;
          }
        }
      }
  }
}
</style>
