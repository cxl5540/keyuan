<template>
  <div class="main">
    <h3 style="text-align: center;">登录</h3>
   <van-cell-group>
     <van-field v-model="value" label="学号" placeholder="请输入学号" />
   </van-cell-group>
   <p>测试账号：2022062000001，2022062000002</p>
   <button @click="login()">登录</button>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      value:''
    }
  },
  created() {
  },
  mounted() {

  },

  methods:{
    login(){
      if(!this.value){
        this.$toast('请输入学号');
        return false;
      }
      this.$toast.loading({message: '登录中...',forbidClick: true,});//显示loading
      // return false;
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'SafeKnowledge/login_verify',
               student_id:this.value,
        }
        let _this=this;
        $.post(url,data,function(res){
              _this.$toast.clear();
        			 if(res.code==200){
                 localStorage.setItem('uid',res.data.user_info.id);
                 localStorage.setItem('info',JSON.stringify(res.data.user_info));
                 _this.$router.push('/text')
        			 }else{
                  _this.$toast(res.msg);
               }
          });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
button{
      width:7.1rem;
      height: 0.88rem;
      background: #FFAF24;
      border-radius: 5px;
      color: #FFffff;
      border: none;
      position: fixed;
      bottom: 1.2rem;
      left:50%;
      margin-left: -3.55rem;
    }
</style>
