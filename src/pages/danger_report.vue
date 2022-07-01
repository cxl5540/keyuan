<template>
  <div class="meg"  style="padding-bottom: 1.5rem;">
     <p v-if="type==2||type==3"><span>{{type==2?'督查上报':'安全举报'}}</span><span @click="$router.push({path: '/report_list',query:{type:type}})">上报记录</span></p>
    <div class=" mes_p">
      <div>
        <div class="main">
          <p>隐患名称<span>*</span> </p>
          <input type="text" v-model="name" placeholder="请输入隐患名称">
        </div>
      </div>
     <div>
       <div class="main">
          <p>隐患位置<span>*</span></p>
          <input type="text"  v-model="position" placeholder="请输入隐患位置">
        </div>
     </div>
     <div>
       <div  class="main">
          <p>隐患描述<span>*</span></p>
          <textarea v-model="describe" cols="30" rows="10" placeholder="请输入隐患描述"></textarea>
        </div>
     </div>
    </div>
    <div class="pics">
        <div class="main">
          <p><span>照相上传</span><img  v-show="!file_upload" src="../assets/icon_paizhao.png" alt="" @click="handleSubmit"></p>
          <div>
            <p v-if="file_upload">
              <img v-if="ext=='mp4'" src="../assets/icon_shipin.png" alt="">
              <img v-else="ext!=='mp4'" src="../assets/icon_tupian.png"/>
              <span>{{file_upload.name}}</span><img src="../assets/icon_guanbi.png" alt="" @click="colse()">
             </p>
          </div>
        </div>
    </div>
    <div class="btns">
      <button @click="$router.go(-1)">返回</button>
      <button @click="submit()">提交</button>
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
      position:'',
      name:'',
      describe:'',
      file_upload:'',
      type:1,
      ext:''
    }
  },
  created() {
      this.type=this.$route.query.type;
  },
  mounted() {

  },
  methods:{
    handleSubmit(){
      this.$refs.Input.click()
    },
    changeImage(e) {
      let that = this
      // 文件对象
      const file_upload = e.target.files[0];
      console.log(file_upload)
       that.file_upload=file_upload;
       var index = file_upload.name.lastIndexOf(".");
       var ext = file_upload.name.substr(index+1);
       that.ext=ext;
        that.$refs.Input.value = '';
    },
    colse(){
      this.file_upload='';
    },
    submit(){
      if(!this.file_upload||!this.name||!this.position||!this.describe){
         this.$toast('请填写完整信息');
         return false;
      }
       this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
       let that = this
       var formData = new FormData();
       formData.append("file_upload",that.file_upload);
       formData.append("action",'HiddenReport/hidden_report_add');
       formData.append("type",that.type);
       formData.append("describe",that.describe);
       formData.append("position",that.position);
       formData.append("name",that.name);
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
                 that.$router.push('/report_list')
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
   // margin: 0.2rem 0;
  }
}
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
     background: #fff;
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
