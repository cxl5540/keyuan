<template>
  <div class="main">
      <div class="title">
          <span>考试记录</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <ul>
        <li class="activ">已及格</li>
        <li>未及格</li>
      </ul>
      <div class="list">
          <div v-for="i,index in list" :key='index'>
              <div>
                <p><span>{{i.n}}</span> <span>已通过</span></p>
                <p>考试分数：<span>{{i.t}}</span> </p>
              </div>
              <div class="bot">
                <button @click="see_certificate()">电子证书</button>
                <button @click="study()">查看详情</button>
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
        {n:'学习课程名称学习课程名称',d:'+2',t:'90'},
        {n:'学习课程名称学习课程名称',d:'+2',t:'90'},
        {n:'学习课程名称学习课程名称',d:'+2',t:'90'},
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
        border-left: 0.08rem solid #6DC6F9;
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
  .list{
      >div{
        border: 1px solid #eee;
        box-sizing: border-box;
        padding: 0.2rem 0.1rem;
        margin-bottom: 0.2rem;
        border-radius: 4px;
        >div:nth-child(1){
          width:100%;
          >p{
            margin: 0.2rem 0;
          }
          >p:nth-child(1){
            >span:nth-child(2){
              display: inline-block;
              float: right;
              text-align: center;
              line-height: 0.48rem;
              width: 1.12rem;
              height: 0.48rem;
              background: #D8F2CE;
              border-radius:4px;
              color: #4EA72B;
            }
          }
          >p:nth-child(2){
            font-size: 0.24rem;
            color: #666666;
            >span{
              color: #3EB7FC;
            }
          }
        }
        >div:nth-child(2){
         text-align: center;
         >button{
           width: 1.7rem;
           height: 0.56rem;
           border: 1px solid #3BB5FB ;
           border-radius:0.28rem;
           color:#3BB5FB;
           background: #E9F7FF;
           margin: 0.2rem 0.2rem 0;
           font-size: 12px;
         }
        }
      }
  }
}
</style>
