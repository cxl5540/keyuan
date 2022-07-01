import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import text from '@/pages/text'
import mine from '@/pages/mine'
import course from '@/pages/course'
import course_list from '@/pages/course_list'
import course_del from '@/pages/course_del'
import certificate from '@/pages/certificate'
import knowledge_list from '@/pages/knowledge_list'
import knowledge_del from '@/pages/knowledge_del'
import knowledge_lecture from '@/pages/knowledge_lecture'
import solicitation from '@/pages/solicitation'
import solicitation_del from '@/pages/solicitation_del'
import before_exam from '@/pages/before_exam'
import examination from '@/pages/examination'
import after_exam from '@/pages/after_exam'
import message from '@/pages/message'
import credit_record from '@/pages/credit_record'
import exam_record from '@/pages/exam_record'
import regist_record from '@/pages/regist_record'
import registe from '@/pages/registe'
import danger_report from '@/pages/danger_report'
import danger_report1 from '@/pages/danger_report1'
import my_report from '@/pages/my_report'
import message_report from '@/pages/message_report'
import report_list from '@/pages/report_list'
import report_del from '@/pages/report_del'
import special_activ from '@/pages/special_activ'
import special_activ_del from '@/pages/special_activ_del'
import report_deal from '@/pages/report_deal'
import report_deal1 from '@/pages/report_deal1'
import deal from '@/pages/deal'
import choose_p from '@/pages/choose_p'
import choose_per from '@/pages/choose_per'
import login from '@/pages/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'text',
      component: text
    },
    {
      path: '/text',
      name: 'text',
      component: text,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/mine',
      name: 'mine',
      component: mine,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/course',
      name: 'course',
      component:course,
      meta:{ keepAlive:true,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/course_list',
      name: 'course_list',
      component:course_list,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/course_del',
      name: 'course_del',
      component:course_del,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/certificate',
      name: 'certificate',
      component:certificate,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/knowledge_list',
      name: 'knowledge_list',
      component:knowledge_list,
      meta:{ keepAlive:true,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/knowledge_del',
      name: 'knowledge_del',
      component:knowledge_del,
       meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/knowledge_lecture',
      name: 'knowledge_lecture',
      component:knowledge_lecture,
      meta:{ keepAlive:true,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/solicitation',
      name: 'solicitation',
      component:solicitation,
      meta:{ keepAlive:true,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/solicitation_del',
      name: 'solicitation_del',
      component:solicitation_del,
       meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/before_exam',
      name: 'before_exam',
      component:before_exam,
      meta:{ keepAlive:true,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/examination',
      name: 'examination',
      component:examination,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/after_exam',
      name: 'after_exam',
      component:after_exam,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/message',
      name: 'message',
      component:message,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/credit_record',
      name: 'credit_record',
      component:credit_record,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/exam_record',
      name: 'exam_record',
      component:exam_record,
      meta:{ keepAlive:true,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/regist_record',
      name: 'regist_record',
      component:regist_record,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/registe',
      name: 'registe',
      component:registe,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/danger_report',
      name: 'danger_report',
      component:danger_report,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/danger_report1',
      name: 'danger_report1',
      component:danger_report1,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/my_report',
      name: 'my_report',
      component:my_report,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/message_report',
      name: 'message_report',
      component:message_report,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/report_list',
      name: 'report_list',
      component:report_list,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/report_del',
      name: 'report_del',
      component:report_del,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/special_activ',
      name: 'special_activ',
      component:special_activ,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/special_activ_del',
      name: 'special_activ_del',
      component:special_activ_del,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/report_deal',
      name: 'report_deal',
      component:report_deal,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/report_deal1',
      name: 'report_deal1',
      component:report_deal1,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/deal',
      name: 'deal',
      component:deal,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/choose_p',
      name: 'choose_p',
      component:choose_p,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/choose_per',
      name: 'choose_per',
      component:choose_per,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    },{
      path: '/login',
      name: 'login',
      component:login,
      meta:{ keepAlive:false,title:'重庆科技学院安全宣教平台'}
    }
  ]
})
