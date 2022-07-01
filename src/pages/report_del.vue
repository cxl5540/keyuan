<template>
  <div class="meg">
    <div class=" mes_p">
      <div>
        <div class="main">
          <p>隐患名称 <span>{{hidden_detail.name}}</span> </p>
          <p>隐患位置 <span>{{hidden_detail.position}}</span></p>
        </div>
      </div>
     <div>
       <div  class="main">
          <p>隐患描述</p>
          <div>
            {{hidden_detail.describe}}
          </div>
        </div>
     </div>
    </div>
    <div class="pics">
        <div class="main">
          <p><span>附件上传</span></p>
          <div  v-if="hidden_detail.file_path">
            <p><img src="../assets/icon_tupian.png" alt=""><a :href="baseUrl+hidden_detail.file_path" target="_blank" style="margin-left: 0.2rem;">附件.{{ext}}</a></p>
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
      id:'',
      hidden_detail:'',
      ext:''
    }
  },
  created() {
    this.id=this.$route.query.id;
    this.getdata()
  },
  mounted() {

  },
  methods:{
    getdata(){
      this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'HiddenReport/hidden_report_see',
              hidden_id:this.id,
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                  _this.hidden_detail=res.data.hidden_detail;
                  _this.$toast.clear();
                  var index = _this.hidden_detail.file_path.lastIndexOf(".");
                  _this.ext = _this.hidden_detail.file_path.substr(index+1);
        		}
        });
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
