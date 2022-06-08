<template>
  <div class="main">
    <div class="title">
        <span>电子证书</span>
        <span @click="$router.go(-1)">返回></span>
    </div>
    <div class="list">
      <div v-for="i,index in list" :key='index'>
          <p>{{i.n}}</p>
          <div>
            <p>证书发放条件：{{i.tj}}</p>
            <p>书发放情况：{{i.qk}}</p>
            <p>证书编号：{{i.bh}}</p>
          </div>
          <img src="../assets/icon_dzzs.png" alt="">
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
        {n:'2022年上半年安全考试',tj:'考试及格',qk:'已发放',bh:'000000'},
        {n:'2022年上半年安全考试',tj:'考试及格',qk:'已发放',bh:'000000'},
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
        font-size: 12px;    
        color:#999999;
      }
  }
  .list{
    >div{
      box-sizing: border-box;
      padding: 0.2rem 0.2rem;
      background: #F8FCFF;
      border: 1px solid #BFBFBF;
      border-radius:5px;
      margin-bottom: 0.2rem;
      position: relative;
      >div{
        color: #666666;
        font-size: 0.24rem;
        >p{
          margin-top: 0.2rem;
        }
      }
      >img{
        position: absolute;
        bottom: 0.2rem;
        right: 0.2rem;
        max-width: 0.9rem;
      }
    }
  }
}
</style>
