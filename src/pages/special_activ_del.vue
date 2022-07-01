<template>
  <div>
     <div class="main title">
          <div class="top">
            <div></div>
            <div>
              <p>{{course_detail.name}}</p>
              <p><img src="../assets/icon_time.png" alt=""><span>活动时间：{{course_detail.activity_time}}</span></p>
            </div>
          </div>
     </div>
     <div class="del">
        <div class="main">
          <p>活动描述</p>
          <div v-html="course_detail.brief">

          </div>
        </div>
     </div>
     <div class="btns">
       <button @click="$router.go(-1)">返回</button>
       <button @click="report()" :style="{background:course_detail.is_open?'':'#ccc'}">进入专题活动</button>
     </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        course_detail:''
      }
    },
    created() {
      this.getdata()
    },
    mounted() {

    },
    methods:{
      getdata(){
        this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
        var url=this.baseUrl+'api/Index/apppost';
        var data={
                action:'HiddenReport/special_screening_detail',
                special_id:this.$route.query.id,
          }
          let _this=this;
          $.post(url,data,function(res){
          			 if(res.code==200){
                  _this.$toast.clear();
                  _this.course_detail=res.data.course_detail;
          			 }
            });
       },
        report(){
          if(this.course_detail.is_open){
            this.$router.push({path:'/danger_report',query:{type:4}})
          }

        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.title{
      background: #FFffff;
      box-sizing: border-box;
      width: 7.1rem;
      margin: auto;
      padding: 0.2rem;
      border-radius: 4px;
      >.top{
        display: flex;
          padding-bottom: 0.2rem;
        >div:nth-child(1){
          width: 0.88rem;
          height:0.88rem;
          border-radius: 50%;
          background-image: url('../assets/icon_paicha.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          margin-left: 0.2rem;
          >p:nth-child(1){
               margin-bottom: 0.2rem;
               >span{
                 display: inline-block;
                 text-align: center;
                 line-height: 0.36rem;
                 width: 0.96rem;
                 height: 0.36rem;
                 background:#FFAF24;
                 border-radius:4px;
                 color: #fff;
                 font-size: 0.24rem;
               }
          }
          >p{
            font-size: 0.24rem;
            >img{
              max-width: 0.3rem;
             position: relative;
             top:0.07rem;
              margin-right: 0.1rem;
            }
          }
        }
      }
    }
.del{
  background: #F5F5F5;
  padding: 0.2rem 0;
  margin-bottom: 1.5rem;
  >div{
    background: #fff;
    padding: 0.2rem 0.2rem;
    >p{
      color: #666666;
      margin-bottom: 0.2rem;
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
