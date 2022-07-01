<template>
  <div class="meg">
    <div class=" mes_p">
      <div style="position: relative;">
        <div class="main">
          <p>隐患名称 <span>{{hidden_detail.name}}</span> </p>
          <p>隐患位置 <span>{{hidden_detail.position}}</span></p>
        </div>
        <img v-show="hidden_detail.status==1" src="../assets/zt_dcl.png" alt="">
        <img v-show="hidden_detail.status==2" src="../assets/zt_clz.png" alt="">
        <img v-show="hidden_detail.status==3" src="../assets/zt_dwc.png" alt="">
        <img v-show="hidden_detail.status==4" src="../assets/zt_ywc.png" alt="">
         <img v-show="hidden_detail.status==5||hidden_detail.status==6" src="../assets/ybh.png" alt="">
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
          <div v-if="hidden_detail.file_path">
           <p><img src="../assets/icon_tupian.png" alt=""><a :href="baseUrl+hidden_detail.file_path" target="_blank" style="margin-left: 0.2rem;">附件.{{ext}}</a></p>
          </div>
        </div>
    </div>
    <div class="process main">
        <h3>流程记录</h3>
        <div style="margin-bottom: 1.5rem;">
          <div>
            <p><span>上报人</span><span>{{hidden_detail.create_time}}</span> </p>
            <p>{{hidden_detail.user_name}}</p>
            <img src="../assets/icon_lcd.png" alt="">
          </div>
          <div v-for="i,index in hidden_assign_list" :key='index'>
            <p><span>{{i.type==1?'已分派':i.type==2?'待完成':i.type==3?'已完成':'已驳回'}}</span><span>{{i.create_time}}</span> </p>
            <p>{{i.assign_name}}</p>
            <div>
              <p>{{i.describe}}</p>
              <a v-if="i.file_path" :href="baseUrl+i.file_path" target="_blank">点击查看附件附件</a>
            </div>

            <img src="../assets/icon_lcd.png" alt="">
          </div>
          <p @click="$router.push({path:'/choose_p',query:{hidden_id:id}} )" v-show="hidden_detail.status==2">指派任务给他人</p>
        </div>

    </div>
    <div class="btns">
      <button @click="$router.go(-1)">返回</button>
      <button  @click="back_report()" :style="{background:hidden_detail.status==2?'':'#ccc'}">驳回</button>
      <button @click="submit" :style="{background:hidden_detail.status==2||hidden_detail.status==3?'':'#ccc'}">任务完结</button>
    </div>
    <van-popup v-model="show">
        <div class="content">
             <p>驳回原因</p>
             <div>
                <textarea placeholder="请输入驳回原因" v-model="describe_c" style="width: 100%;border: none;" cols="30" rows="20"></textarea>
             </div>
             <div class="btns">
               <button @click="show=false">取消</button>
               <button  @click="submit_back()">确定</button>
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
      show:false,
      id:'',
      hidden_detail:'',
      ext:'',
      hidden_assign_list:'',
      describe_c:''
    }
  },
  created() {
    this.id=this.$route.query.id;
    this.getdata()
  },
  mounted() {

  },
  methods:{
    back_report(){ //驳回
      if(this.hidden_detail.status==2){
        this.show=true;
      }
    },
    back_submit(){//驳回
      this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'HiddenReport/reject_hidden_report',
              hidden_id:this.id,
              assign_id:localStorage.getItem('uid'),
              describe:this.describe_c
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                  _this.$toast(res.msg);
                  _this.show=false;
                  _this.$toast.clear();
                  _this.$router.go(-1)
        		}
        });
    },
    submit_back(){//驳回
      this.back_submit()
    },
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
                  _this.hidden_assign_list=res.data.hidden_assign_list;
                  _this.$toast.clear();
                  var index = _this.hidden_detail.file_path.lastIndexOf(".");
                  _this.ext = _this.hidden_detail.file_path.substr(index+1);
        		}
        });
    },
    submit(){
      if(this.hidden_detail.status==2||this.hidden_detail.status==3){
        this.$router.push({path:'/deal',query:{id:this.hidden_detail.id}})
      }
    },
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
