
import http from '../utils/http';
//let resquest = 'http://192.168.3.43/';
let resquest = 'http://glodon.toommi.com/';
let api ="api/Index/apppost"; // http://10.0.0.3:8080/postURL/info/supplement  //跨域--代理请求

export function getdataAPI(params){  //首页
    return http.post(resquest+api,'SafeKnowledge/index',params)
}
export function course_listAPI(params){  //课程列表
    return http.post(resquest+api,'SafeKnowledge/course_list',params)
}
export function exam_infoAPI(params){  //考试信息
    return http.post(resquest+api,'Exam/exam_info',params)
}
export function start_examAPI(params){  //开始考试
    return http.post(resquest+api,'Exam/start_exam',params)
}
export function submit_test_paperAPI(params){  //提交考试
    return http.post(resquest+api,'Exam/submit_test_paper',params)
}
export function exam_recordAPI(params){  //提交结果
    return http.post(resquest+api,'Exam/exam_record',params)
}
