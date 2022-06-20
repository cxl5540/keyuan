<template>
  <div class="meg">
    <div class="main mes_p">
      <p>个人信息</p>
      <p><span>部门</span><span>{{info.department}}</span></p>
      <p><span>学号</span><span>{{info.student_id}}</span></p>
      <p><span>姓名</span><span>{{info.name}}</span></p>
    </div>
    <div class="pics">
        <div class="main">
          <p><span>附件上传</span><img v-show="!file" src="../assets/icon_tianjia.png" alt="" @click="handleSubmit"></p>
          <div>
            <p v-if="file">
              <img v-if="ext=='pdf'" src="../assets/icon_pdf.png" alt="">
              <img v-else="ext!=='pdf'" src="../assets/icon_word.png"/>
             <span>{{file.name}}</span><img src="../assets/icon_guanbi.png" alt="" @click="colse()"></p>
          </div>
        </div>
    </div>
    <div class="btns">
      <button @click="$router.go(-1)">返回</button>
      <button @click="result()">提交</button>
    </div>
    <input type="file" accept="application/pdf,application/doc,application/docx"
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
      info:'',
      file:'',
      ext:''
    }
  },
  created() {
    this.info=JSON.parse(localStorage.getItem('info'))
  },
  mounted() {

  },
  methods:{
    handleSubmit(){
      this.$refs.Input.click()
    },
    colse(){
      this.file='';
    },
    changeImage(e) {
      // 画像对象
      let that = this
      // 文件对象
      const file = e.target.files[0]
      that.file=file;
       var index = file.name.lastIndexOf(".");
       var ext = file.name.substr(index+1);
       that.ext=ext;
      //var reader = new FileReader();
    },
    result(){
      if(!this.file){
         this.$toast('请上传附件');
         return false;
      }
       this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
       let that = this
       var formData = new FormData();
       formData.append("files",that.file);
       formData.append("action",'SafeKnowledge/prize_essay_enroll');
       formData.append("essay_id",that.info.id);
       formData.append("user_id",localStorage.getItem('uid'));
        $.ajax({
             url:that.baseUrl+'api/Index/apppost',
             type:'POST',
             data:formData,
             cache: false,
             contentType: false,    //不可缺
             processData: false,    //不可缺
             mimeType:"multipart/form-data",
             success:function(res){
                that.$toast.clear();
               var res=JSON.parse(res)
               if(res.code==200){
                 that.$toast(res.msg);
                 that.$router.push('/solicitation')
               }else{
                that.$toast(res.msg);
               }
               console.log(res)
             } ,
           })
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
