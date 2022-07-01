// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false
fontSize()
window.onresize = function () {
fontSize()
}

 //Vue.prototype.baseUrl = "http://192.168.3.43/technical_college/" ;
 Vue.prototype.baseUrl = "http://kjxyht.toommi.com/" ;
function fontSize() {
    var size;
    var winW = $(window).width();
    if (winW <= 1750 && winW > 1250) {
        size = Math.round(winW / 17.5);
    } else if(winW <= 1250 && winW > 800){
        size = Math.round(winW / 14.5);
    }
     else if (winW <= 800) {
        size = Math.round(winW / 7.5);
        if (size > 65) {
            size = 65;
        }
    } else {
        size = 100;
    }
    $('html').css({
        'font-size': size + 'px'
    })
}
router.beforeEach((to, from, next) => {
  // 处理访问权限
  if (to.path === '/login') {
    next()
  }
  else {
   // console.log(to.path)
    const uid = localStorage.getItem('uid')
    if (uid) {
      next()
    }
    else {
      next('/login')
    }
  }
})
router.beforeEach((to, from, next) => {
if (to.meta.title) {
  document.title = to.meta.title
 }
next()
})
 Vue.prototype.gettime=function(sec){
     if(!sec){
         return '-'
     }
   var min = Math.floor(sec%3600);
	 var h=Math.floor(sec/3600);
	 var m=parseInt(min/60);
	 var s=parseInt(sec%60);
	 h<10?h='0'+h:h; m<10?m='0'+m:m;s<10?s='0'+s:s;
	 // if(h<1){
		//  return m+':'+s+''
	 // }else{
		//  return h+':'+m+':'+s+''
	 // }
	  return h+':'+m+':'+s+''

    // return Math.floor(sec/3600) + ":" + parseInt(min/60) + ":"+ parseInt(sec%60) + "";
 }

Vue.prototype.getstr=function(str,num){
	if(str!=undefined){
		var length=str.length;
		if(length>num){
			str=str.substring(0,num)+"..."
		}else{
      str=str;
    }
		return str;
	}

}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
