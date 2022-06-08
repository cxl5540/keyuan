<template>
  <div class="page">
        <div class="title">
          <span>督查上报记录</span>
          <span @click="$router.go(-1)">返回></span>
        </div>
      <div class="main">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
             <div class="list" @click="$router.push('/report_del')">
                <div v-for="i,index in list" :key='index'>
                    <div class="top">
                        <p><span>{{i.n}}</span></p>
                        <span>隐患位置：{{i.n}}</span>
                    </div>
                    <div class="bot">
                      <p><span><img src="../assets/icon_ren.png"/>上报人：嘻嘻嘻</span> <span>2022.04.19 14:53</span></p>
                    </div>
                </div>
             </div>
            </van-list>
          </van-pull-refresh>
      </div>
  </div>

</template>

<script>
export default {
  name: '',
  data () {
    return {
      type:'全部',
      show:false,
      actions: [{ name: '全部' }, { name: '国家安全' }, { name: '消防交通' }],
      key: '',
      list: [{n:'2021年安全课程学习',d:'一段文件介绍安全课程一段文件介...'}],
      loading: false,
      finished: true,
      refreshing: false,
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    onSelect(item){
      this.show = false;
      this.type=item.name;
    },
    onLoad(){

    },
    onRefresh(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.page{
  >.title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem 0.2rem;
      >span:nth-child(1){
        font-size: 0.3rem;
        font-weight: bold;
        padding-left: 0.1rem;
      }
      >span:nth-child(2){
        font-size: 12px;    color:#999999;
      }
  }
}
.main{
  padding: 0.2rem;
  background: #F8F8F8;
  .list{
    >div{
      border: 1px solid #eee;
      box-sizing: border-box;
      padding: 0.2rem;
      border-radius: 5px;
      margin-bottom: 0.2rem;
      background: #fff;
      margin-top: 0.2rem;
      >.top{
        >p{
          display: flex;
          justify-content: space-between;
          >span:nth-child(1){
            font-size: 0.3rem;
          }
        }
        >span{
          display: inline-block;
          margin: 0.2rem 0;
          color: #999999;
          font-size: 12px;
        }
      }
      >.bot{
         >p{
           display: flex;
           justify-content: space-between;
           >span:nth-child(1){
             >img{
               width: 0.32rem;
               height: 0.32rem;
               vertical-align: middle;
             }
           }
            >span:nth-child(2){
              color: #999999;
              font-size: 12px;
            }
         }
      }
    }
  }

}
</style>
