<template>
  <div class="meg">
    <div class=" mes_p">
      <div style="position: relative;">
        <div class="main">
          <p>隐患名称 <span>xxxxx</span> </p>
          <p>隐患位置 <span>xxxxxxxxxxxxxxxxxxxxx</span></p>
        </div>
        <img src="../assets/zt_dcl.png" alt="">
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
    <div class="process main">
        <h3>流程记录</h3>
        <div>
          <div>
            <p><span>上报人</span><span>2022.04.19 14:53</span> </p>
            <p>花路白</p>
            <img src="../assets/icon_lcd.png" alt="">
          </div>
          <div>
            <p><span>已分派</span><span>2022.04.19 14:53</span> </p>
            <p>张三</p>
            <img src="../assets/icon_lcd.png" alt="">
          </div>
          <p @click="$router.push('/choose_p')">指派任务给他人</p>
        </div>

    </div>
    <div class="btns">
      <button @click="$router.go(-1)">返回</button>
      <button @click="show=true">驳回</button>
      <button @click="$router.push('/deal')">任务完成</button>
    </div>
    <van-popup v-model="show">
        <div class="content">
             <p>驳回原因</p>
             <div>
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
      show:false
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    result(){

    }
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
    >img{
      position: absolute;
      right: 0;
      top:-0.12rem;
      width: 1.44rem;
      height: 1.44rem;
    }
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
.btns{
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
     background:#FF6262;
   }
   >button:nth-child(3){
     width: 3rem;
     background:#FFAF24;
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
.process{
  >div{
    >div{
      border-left: 1px solid #eee;
      box-sizing: border-box;
      padding-left: 0.2rem;
      position: relative;
      >p:nth-child(1){
        display: flex;
        justify-content: space-between;
        >span:nth-child(2){
          color: #999999;
          font-size: 12px;
        }
      }
      >p:nth-child(2){
        padding: 0.2rem 0;
        color: #808080;
      }
      >img{
        position: absolute;
        left:-6px;
        top: 0;
        width: 12px;
        height: 12px;
      }
    }
    >p{
      width: 2.19rem;
      height: 0.54rem;
      font-size: 12px;
      border: 1px solid #76D2B4;
      border-radius: 0.54rem;
      color: #54B897;
      text-align: center;
      line-height: 0.54rem;
      margin-left: 0.2rem;
    }
  }
}
</style>
