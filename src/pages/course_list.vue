<template>
  <div>
    <div class="main">
      <div class="title">
          <span>安全课程学习</span>
          <span @click="$router.go(-1)">返回></span>
      </div>
      <div class="top" v-show="show==true">
          <p>必修课：<span>40</span>分&nbsp;|&nbsp;选修课：<span>40</span>分&nbsp;|&nbsp;总课程数：<span>40</span>门，您还需要学习<span>40</span>门，至少<span>40</span>门选修课</p>
          <div class="line">
            <p>时长要求：<span>17:28:00</span>/17:28:00</p>
            <div>
              <div></div>
              <span>60%</span>
            </div>
          </div>
          <div class="line">
            <p>学分要求：<span>30</span>/50</p>
            <div>
              <div></div>
              <span>60%</span>
            </div>
          </div>
      </div>
      <div class="line line1" v-show="show==false">
        <p>学习进度：</p>
        <div>
          <div></div>
          <span>60%</span>
        </div>
      </div>
      <div class="del">
        {{getstr(str,show==false?40:str.length) }}
      </div>
    </div>
    <div class="zd">
      <img v-show="show==true" src="../assets/img_zdxq.png"/>
      <img v-show="show==false" src="../assets/img_zkxq.png"/>
      <p @click="getshow()">{{show==false?'展开详情':'折叠详情'}}</p>
    </div>
    <div class="main">
      <div class="list">
          <div class="title">
            <ul>
              <li :class="activ==0?'activ':''" @click="change(0)">必修课</li>
              <li :class="activ==1?'activ':''" @click="change(1)">选修课</li>
              <li :class="activ==2?'activ':''" @click="change(2)">考试信息</li>
            </ul>
          </div>
          <div class="content" v-show="activ!=2">
              <div v-for="i,index in list" :key='index'  @click="course_del(i)">
                <div :style="{backgroundImage:'url('+i.pic+')'}"></div>
                 <div>
                   <p><span>必修</span><span>{{getstr(i.name,6)}}</span></p>
                    <div>
                      <p>时长：{{i.sc}}</p>
                      <p>学分：{{i.xf}}</p>
                    </div>
                 </div>
                 <img v-show="i.wc==1" src='../assets/icon_kcxx_b.png'/>
                <img  v-show="i.wc==2" src='../assets/icon_kcxx_s .png' />
              </div>
          </div>
      </div>
      <div class="instudy" v-show="activ==2">
          <img src="../assets/img_ksrk_1(1).png" alt="">
          <span>已开启</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      str:'一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍一段文字描述课程介绍',
      show:false,
      list:[
        {name:'意识比安全知识更重要',sc:'20:49',xf:"2",wc:1,pic:require('../assets/v1.png'),id:1},
        {name:'大学生防溺水',sc:'17:09',xf:"2",wc:2,pic:require('../assets/v2.png'),id:2},
        {name:'国家安全人人有责',sc:'22:18',xf:"2",wc:2,pic:require('../assets/v3.png'),id:3},
      ],
       activ:0
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
    getshow(){
      this.show=!this.show
    },
    change(num){
      this.activ=num;
    },
    course_del(i){
      var item=JSON.stringify(i);
      this.$router.push({path:'/course_del',query:{i:item}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less">
.main{
  .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem 0;
      >span:nth-child(1){
        font-size: 0.3rem;
        font-weight: bold;
        border-left: 0.08rem solid #FFAF24;
        padding-left: 0.1rem;
      }
      >span:nth-child(2){
        font-size: 12px;
        color:#999999;
      }
  }
  >.top>p{
    text-align: left;
    line-height: 0.52rem;
    >span{
      color: #FF847F;
    }
  }
  .line{
     margin: 0.2rem 0;
    >p{
      color: #666666;
      >span{
        color: #B591CA;
      }
    }
    >div{
      position: relative;
      margin: 0.2rem 0;
      width: 90%;
      height: 0.1rem;
      background:rgba(181,145,202,.1);
      border-radius: 4px;
      >div{
        width: 60%;
        height:100%;
        position: absolute;
        left: 0;
        top: 0;
        background:rgba(181,145,202,1);
        border-radius: 4px;
      }
      >span{
        float: right;
        color: #B591CA;
        font-size: 12px;
        position: absolute;
        right: -0.7rem;
        top: -0.06rem;
      }
    }
  }
  .line1{
    display: flex;
    >div{
       width: 70%;
    }
  }
}
.zd{
  position: relative;
  >p{
    position:absolute;
    left: 0;
    top: 0;
    text-align: center;
    width: 90%;
    left: 6%;
    top: 0px;
    color: #666666;
    font-size: 12px;
    line-height: 0.44rem;
  }
}
.del{
  padding: 0.2rem 0;
}
.list{
  >.title{
    border-bottom: 1px solid #eee;
    padding: 0;
    margin: 0.2rem 0;
    >ul{
      width: 100%;
      display: flex;
      justify-content: space-around;
      >li{
        display: inline-block;
        font-size: 0.3rem;
        font-weight: bold;
        padding: 0.2rem;
      }
    }
  }
  >.content{
      overflow: hidden;
      // display: flex;
      // flex-wrap: wrap;
      >div:nth-child(2n){
        float: right;
       // margin-left:0.2rem ;
      }
      >div:nth-child(2n+1){
        float: left;
        //margin-left:0.2rem ;
      }
      >div{
        display: inline-block;
        margin-top: 0.2rem;
        border: 1px solid #DCDCDC;
        width: 3.4rem;
        border-radius: 4px;
        position: relative;
        >div:nth-child(1){
          height: 1.9rem;
          background-image: url('../assets/home_yh_1.png');
          background-size: cover;
          background-position: center;
        }
        >div:nth-child(2){
          box-sizing: border-box;
           padding: 0.1rem;
          >p{
            >span:nth-child(1){
              display: inline-block;
              background: #FFAF24;
              border-radius: 3px;
              width: 0.6rem;
              line-height: 0.32rem;
              height: 0.32rem;
              font-size: 12px;
               text-align: center;
              margin-right: 0.1rem;
              color: #fff;
              }
            >span:nth-child(2){

            }
          }
          >div{
            padding: 0.2rem 0;
            color: #999999;
          }
        }
        >img{
          position: absolute;
          bottom: 0;
          right: 0;
          height: 0.6rem;
        }
      }
  }
  .activ{
    border-bottom:2px solid  #FFAF24;
  }
}
.instudy{
  position: relative;
  >span{
    display: inline-block;
    width: 1.2rem;
    height: 0.44rem;
    background: #FF847F;
    color: #FFffff;
    line-height: 0.44rem;
    text-align: center;
    border-radius: 0.22rem 0px 0px 0.22rem;
    position:absolute;
    right: 0;
    top: 0.2rem;
  }
}
</style>
