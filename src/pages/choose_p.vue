<template>
  <div class="main">
  <p><b>组织架构</b></p>
<!--  <div class="search">
      <div class="rt">
         <input type="" v-model="key" placeholder="请输入拼音首字母/关键字查询"/>
         <img src="../assets/sousuo_hui.png" alt="">
      </div>
  </div> -->


        <!-- <van-collapse v-model="activeNames" v-for="i,index in list" :key='index'  @change='change(i)'>
          <van-collapse-item :title="i.name" :name="i.id">
              <van-collapse v-model="activeNames1" v-for="i_2,in_2 in i.children" :key='i_2.id'  v-if="i.children" @change='change(i_2)'>
                <van-collapse-item :title="i_2.name" :name="i_2.id"  v-if="i_2.children">
                  <van-collapse v-model="activeNames2" v-for="i_3,in_3 in i_2.children" :key='i_3.id'  v-if="i_2.children"  @change='change(i_3)'>
                    <van-collapse-item :title="i_3.name" :name="i_3.id" >
                      <p v-for="i_4 in i_3.children" v-if="i_3.children" @change='change(i_4)'><span> {{i_4.name}} </span></p>
                    </van-collapse-item>
                  </van-collapse>
                </van-collapse-item>
              </van-collapse>
          </van-collapse-item>
        </van-collapse> -->

        <van-collapse v-model="activeNames" v-for="i,index in list" :key='index' >
          <van-collapse-item  :name="i.id">
             <template #title>
                  <div ><span @click.stop="change(i.id)">{{i.name}}</span> </div>
              </template>
             <van-collapse v-model="activeNames1" v-for="i_2,in_2 in i.children" :key='i_2.id'  v-if="i.children">
               <van-collapse-item  :name="i_2.id"  v-if="i_2.children">
                 <template #title>
                      <div><span @click.stop="change(i_2.id)">{{i_2.name}}</span> </div>
                  </template>
                  <van-collapse v-model="activeNames2" v-for="i_3,in_3 in i_2.children" :key='i_3.id'  v-if="i_2.children" >
                    <van-collapse-item  :name="i_3.id" style="background: rgba(255,175,36,0.1) ;" >
                      <template #title>
                           <div><span @click.stop="change(i_3.id)">{{i_3.name}}</span> </div>
                       </template>
                      <p v-for="i_4 in i_3.children" v-if="i_3.children"><span @click.stop="change(i_4.id)"> {{i_4.name}} </span></p>
                    </van-collapse-item>
                  </van-collapse>
               </van-collapse-item>
             </van-collapse>

          </van-collapse-item>
        </van-collapse>

   <!-- <button>确定</button> -->
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeNames: ['1'],
      activeNames1:['1'],
      activeNames2:['1'],
      radio:'1',
      key:'',
      list: [],
      hidden_id:''
    }
  },
  created() {
    this.hidden_id=this.$route.query.hidden_id
    this.getdata()
  },
  mounted() {

  },
  methods:{
    getdata(){
      //this.$toast.loading({message: '加载中...',forbidClick: true,});//显示loading
      var url=this.baseUrl+'api/Index/apppost';
      var data={
              action:'HiddenReport/organization_list',
        }
        let _this=this;
        $.post(url,data,function(res){
        			 if(res.code==200){
                  _this.list=res.data.menu_list;
                 // _this.$toast.clear();
        		}
        });
    },
    change(id){
      this.$router.push({path:'/choose_per',query:{id:id,hidden_id:this.hidden_id}})
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
    background: rgba(255,132,127,0.1) ;
  }
}
/deep/.van-collapse-item__content>p{
   background:rgba(118,210,180,0.2);
   padding: 0.2rem;
   width: 100%;
   color: #333;
   display: flex;
   justify-content: space-between;
}
[class*=van-hairline]::after{
  border: none;
}
/deep/.van-cell--clickable{
  text-decoration: underline;
}
</style>
