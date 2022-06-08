<template>
  <div class="main">
      <div>
          <div v-for="i,index in list" :key='index'>
              <div :style="{'border-left':'4px solid' + color[index]}">
                <span class="activ">{{i.n}}</span>
                <p><span>{{i.d}}</span> <img src="../assets/icon_enter.png"/></p>
                <p>{{i.t}}</p>
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
          {n:'安全学习',d:'2022年度安全课程学习开始',t:'2022.04.20 11:20'},
          {n:'考试开启',d:'2022年度安全课程学习已完成，前往考试',t:'2022.04.20 11:20'},
          {n:'证书发放',d:'2022年度安全课程学习考试电子证书已发放',t:'2022.04.20 11:20'},
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
        >span{
          font-weight: bold;
          position: relative;
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
