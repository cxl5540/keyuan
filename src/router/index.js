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
import deal from '@/pages/deal'
import choose_p from '@/pages/choose_p'
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
      component: text
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },{
      path: '/mine',
      name: 'mine',
      component: mine
    },{
      path: '/course',
      name: 'course',
      component:course
    },{
      path: '/course_list',
      name: 'course_list',
      component:course_list
    },{
      path: '/course_del',
      name: 'course_del',
      component:course_del
    },{
      path: '/certificate',
      name: 'certificate',
      component:certificate
    },{
      path: '/knowledge_list',
      name: 'knowledge_list',
      component:knowledge_list
    },{
      path: '/knowledge_del',
      name: 'knowledge_del',
      component:knowledge_del
    },{
      path: '/knowledge_lecture',
      name: 'knowledge_lecture',
      component:knowledge_lecture
    },{
      path: '/solicitation',
      name: 'solicitation',
      component:solicitation
    },{
      path: '/solicitation_del',
      name: 'solicitation_del',
      component:solicitation_del
    },{
      path: '/before_exam',
      name: 'before_exam',
      component:before_exam
    },{
      path: '/examination',
      name: 'examination',
      component:examination
    },{
      path: '/after_exam',
      name: 'after_exam',
      component:after_exam
    },{
      path: '/message',
      name: 'message',
      component:message
    },{
      path: '/credit_record',
      name: 'credit_record',
      component:credit_record
    },{
      path: '/exam_record',
      name: 'exam_record',
      component:exam_record
    },{
      path: '/regist_record',
      name: 'regist_record',
      component:regist_record
    },{
      path: '/registe',
      name: 'registe',
      component:registe
    },{
      path: '/danger_report',
      name: 'danger_report',
      component:danger_report
    },{
      path: '/danger_report1',
      name: 'danger_report1',
      component:danger_report1
    },{
      path: '/my_report',
      name: 'my_report',
      component:my_report
    },{
      path: '/message_report',
      name: 'message_report',
      component:message_report
    },{
      path: '/report_list',
      name: 'report_list',
      component:report_list
    },{
      path: '/report_del',
      name: 'report_del',
      component:report_del
    },{
      path: '/special_activ',
      name: 'special_activ',
      component:special_activ
    },{
      path: '/special_activ_del',
      name: 'special_activ_del',
      component:special_activ_del
    },{
      path: '/report_deal',
      name: 'report_deal',
      component:report_deal
    },{
      path: '/deal',
      name: 'deal',
      component:deal
    },{
      path: '/choose_p',
      name: 'choose_p',
      component:choose_p
    }
  ]
})
