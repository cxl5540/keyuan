<template>
  <div class="meg">
    <div class=" mes_p">
      <div>
        <div class="main">
          <p>隐患名称 <span>xxxxx</span> </p>
          <p>隐患位置 <span>xxxxxxxxxxxxxxxxxxxxx</span></p>
        </div>
      </div>
     <div>
       <div  class="main">
          <p>隐患描述</p>
          <div>
            hdddddddddddj
          </div>
        </div>
     </div>
    </div>
    <div class="pics">
        <div class="main">
          <p><span>附件上传</span></p>
          <div>
            <p><img src="../assets/icon_pdf.png" alt=""><span>dashdihsa</span></p>
            <p><img src="../assets/icon_pdf.png" alt=""><span>dashdihsa</span></p>
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
   // margin: 0.2rem 0;
  }
}
.mes_p{
  >div{
    background: #f5f5f5;
    padding-bottom: 0.1rem;
    >div{
      background: #fff;
      margin: 0.1rem 0;
      padding-bottom: 0.2rem;
      >p{
        margin: 0.2rem 0;
      }
    }

  }

}
.pics{
  background: #F5F5F5;
  padding:0 0 0.2rem;
  >div{
    background: #ffffff;
     padding-bottom: 0.2rem;
     >p{
       margin: 0.2rem 0;
     }
    >div{
      >p{
        margin-bottom: 0.2rem;
        >img:nth-child(1){
          max-width: 0.38rem;
        }
        >img:nth-child(3){
           max-width: 0.28rem;
        }
        >img{
          vertical-align: middle;
        }
        >span{
          margin: 0 0.2rem;
        }
      }
    }

  }
}
</style>
