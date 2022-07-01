<template>
  <div class="main">
  <p>已选：安全科室 - 安全部 - 张三</p>
  <div class="search">
      <div class="rt">
         <input type="" v-model="key" placeholder="请输入拼音首字母/关键字查询"/>
         <img src="../assets/sousuo_hui.png" alt="" @click="search">
      </div>
  </div>
    <van-radio-group v-model="radio" checked-color="#FFAF24">
          <van-cell  clickable  v-for="i,index in list" :key="index" :title="i.name">
            <template #right-icon>
              <van-radio :name="i.id" />
            </template>
          </van-cell>
    </van-radio-group>
    <button @click="submit">确定</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeNames: ['1'],
      activeNames1:['4'],
      radio:'',
      key:'',
      organization_id:'',
      hidden_id:'',
      list:[]
    }
  },
  created() {
    this.organization_id=this.$route.query.id;
    this.hidden_id=this.$route.query.hidden_id;
    this.getlist()
  },
  mounted() {

  },
  methods:{
      getlist(){
        this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
        var url=this.baseUrl+'api/Index/apppost';
        var data={
                action:'HiddenReport/personnel_list',
                page:1,
                limit:10,
                organization_id:this.organization_id,
                key:this.key
          }
          let _this=this;
          $.post(url,data,function(res){
          			 if(res.code==200){
                    _this.list=res.data.personnel_list;
                    _this.$toast.clear();
          		}
          });
      },
      search(){
        this.getlist()
      },
      submit(){
        if(this.radio){
          this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
          var url=this.baseUrl+'api/Index/apppost';
          var data={
                  action:'HiddenReport/assign_hidden_report',
                  hidden_id:this.hidden_id,
                  operate_web_id:localStorage.getItem('uid'),
                  assign_id:this.radio
            }
            let _this=this;
            $.post(url,data,function(res){
            			 if(res.code==200){
                      _this.$toast(res.msg);
                      _this.$router.push('/my_report')
            		}
            });
        }else{
           this.$toast('请选择指派人');
        }

      }
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
