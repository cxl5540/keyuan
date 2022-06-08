<template>
  <div class="main">
      <div>
          <div v-for="i,index in list" :key='index'>
              <div :style="{'border-left':'4px solid' + color[index]}">
                <p><span class="activ">{{i.n}}</span> <span>处理中</span> </p>
                <p><span>{{i.d}}</span> <img src="../assets/icon_enter.png"/></p>
                <p>更新时间：{{i.t}}</p>
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
          {n:'隐患上报',d:'上报隐患标题上报隐患标题',t:'2022.04.20 11:20'},
          {n:'隐患上报',d:'上报隐患标题上报隐患标题',t:'2022.04.20 11:20'},
          {n:'隐患上报',d:'上报隐患标题上报隐患标题',t:'2022.04.20 11:20'},
        ],
        color:[
          '#FFAF24','#FF847F','#6DC6F9'
        ]
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
  >div{
    >div{
      border-bottom: 1px solid #eee;
      padding: 0.2rem 0;
      >div{
        box-sizing: border-box;
        padding-left: 0.2rem;
        position: relative;
        >p:nth-child(1){
          display: flex;
          justify-content: space-between;
          >span:nth-child(1){
            font-weight: bold;
            position: relative;
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
            margin-right: 0.3rem;
          }
        }
        >p:nth-child(2){
          display: flex;
          justify-content: space-between;
          margin: 0.1rem 0;
        }
        >p:nth-child(3){
          color: #999999;
          font-size: 0.24rem;
        }
        .activ::after{
          content: '';
          width: 5px;
          height: 5px;
          background: red;
          border-radius: 50%;
          position: absolute;
          right:-0.2rem;
          top: 0;
        }
      }
    }
  }
}
</style>
