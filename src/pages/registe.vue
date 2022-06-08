<template>
  <div class="meg">
    <div class="main mes_p">
      <p>个人信息</p>
      <p><span>学院名称</span><span>冶金与材料工程学院</span></p>
      <p><span>专业班级</span><span>材料科学与工程专业1班</span></p>
      <p><span>学号</span><span>2022042112345</span></p>
      <p><span>姓名</span><span>张三</span></p>
    </div>
    <div class="pics">
        <div class="main">
          <p><span>附件上传</span><img src="../assets/icon_tianjia.png" alt="" @click="handleSubmit"></p>
          <div>
            <p><img src="../assets/icon_pdf.png" alt=""><span>dashdihsa</span><img src="../assets/icon_guanbi.png" alt=""></p>
            <p><img src="../assets/icon_pdf.png" alt=""><span>dashdihsa</span><img src="../assets/icon_guanbi.png" alt=""></p>
          </div>
        </div>
    </div>
    <div class="btns">
      <button @click="$router.go(-1)">返回</button>
      <button @click="result()">提交</button>
    </div>
    <input type="file" accept="application/msword"
      style="display:none"
      @change="changeImage($event)"
      ref="Input">
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
    handleSubmit(){
      this.$refs.Input.click()
    },
    changeImage(e) {
      // 画像对象
      let that = this
      // 文件对象
      const file = e.target.files[0]
      //var reader = new FileReader();
      console.log(file)
      // reader.onload = function(e){
      // 	// 文件的 base64
      //   that.dataURL = e.target.result
      //   that.dataURL = that.dataURL.replace(/^data:\w+\/\w+;base64,/, '')
      //   // base64 to base64url
      //   that.dataURL = Base64.fromUint8Array(Base64.toUint8Array(that.dataURL), true);
      // }
      // reader.readAsDataURL(file);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.main{
  >p{
    margin: 0.2rem 0;
  }
}
.mes_p{
  >p{
    >span:nth-child(1){
      display: inline-block;
      color: #666666;
      width: 1.5rem;
      margin-right: 0.2rem;
    }
  }
}
.pics{
  background: #F5F5F5;
  padding: 0.2rem 0;
  >div{
    background: #ffffff;
    padding: 0.2rem;
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
    >p{
      display: flex;
      justify-content: space-between;
      >span{
        position: relative;
      }
      >span::after{
        content: '*';
        color: red;
        position: absolute;
        top: 0;
        right: -10px;
      }
      >img{
        max-width: 0.4rem;
        max-height: 0.4rem;
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
       width: 5rem;
       background:#FFAF24;
     }
  }
</style>
