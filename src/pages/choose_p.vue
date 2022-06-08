<template>
  <div class="main">
  <p>已选：安全科室 - 安全部 - 张三</p>
  <div class="search">
      <div class="rt">
         <input type="" v-model="key" placeholder="请输入拼音首字母/关键字查询"/>
         <img src="../assets/sousuo_hui.png" alt="">
      </div>
  </div>
    <van-radio-group v-model="radio" checked-color="#FFAF24">
        <van-collapse v-model="activeNames" >
          <van-collapse-item title="标题1" name="1">
              <van-collapse v-model="activeNames1">
                <van-collapse-item title="标题4" name="4">
                  <p clickable @click="radio = '1'"><span> d888 </span> <van-radio name="1"  /></p>
                </van-collapse-item>
                <van-collapse-item title="标题5" name="5">
                  <p clickable @click="radio = '2'"><span> d888 </span>  <van-radio name="2" /></p>
                </van-collapse-item>
                <van-collapse-item title="标题6" name="6">
                  <p><span> d888 </span></p>
                </van-collapse-item>
              </van-collapse>
          </van-collapse-item>
        </van-collapse>
    </van-radio-group>
    <button>确定</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeNames: ['1'],
      activeNames1:['4'],
      radio:'1',
      key:''
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
</style>
