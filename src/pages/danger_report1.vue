<template>
  <div class="meg">
    <p><span>督查上报</span><span @click="$router.push('/report_list')">上报记录</span></p>
    <div class=" mes_p">
      <div>
        <div class="main">
          <p>隐患名称<span>*</span> </p>
          <input type="text" placeholder="请输入隐患名称">
        </div>
      </div>
     <div>
       <div class="main">
          <p>隐患位置<span>*</span></p>
          <input type="text"  placeholder="请输入隐患位置">
        </div>
     </div>
     <div>
       <div  class="main">
          <p>隐患描述<span>*</span></p>
          <textarea name="" id="" cols="30" rows="10" placeholder="请输入隐患描述"></textarea>
        </div>
     </div>
    </div>
    <div class="pics">
        <div class="main">
          <p><span>照相上传</span><img src="../assets/icon_paizhao.png" alt="" @click="handleSubmit"></p>
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
    <input type="file"  accept="image/*,video/*"
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

.meg{
  >p{
    display: flex;
    justify-content: space-between;
    background: rgba(109,198,249,0.1);
    padding: 0.2rem;
    >span:nth-child(1){
      font-weight: bold;
    }
    >span:nth-child(2){
      display: inline-block;
      width: 1.46rem;
      height: 0.54rem;
      background: #4CADFF;
      border-radius:2px;
      font-size: 12px;
      text-align: center;
      line-height: 0.54rem;
      color: #fff;
    }
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
        >span{
          color: red;
        }
      }
      >input,textarea{
        width: 100%;
        border: none;
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
