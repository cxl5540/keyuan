import axios from 'axios';
import {Toast} from 'vant'
const service = axios.create({
    baseURL:process.env.BASE_URL,
    timeout:10000
})
//请求拦截器
service.interceptors.request.use(function(config){
       Toast.loading({
         message: '加载中...',
         forbidClick: true,
       });//显示loading
    config.data = config.data;  //根据后端数据格式，可做相应的数据转换 JSON.stringify() 或 qs.stringify()
    //设置header的配置信息，跟后端配合设置
    config.headers = {
       "Content-type":"application/json;charset=UTF-8",
    }

    //设置 token ,根据需要设置
    // const token = getCookie('token');
    // if(token){
    //     config.params = {'token':token};
    //     config.headers.token = token;
    // }
    return config;
},function(error){
  //  Toast.close();  //关闭loading
    return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(function(response){
    //Toast.close();  //关闭loading
    return response.data;
},function(error){
   // Toast.close();  //关闭loading
    if(error || error.response){
        switch(error.response.status){
            case 400:
                error.message = '错误请求';
                break;
            case 401:
                error.message = '未授权，请重新登录'
                break;
            case 403:
                error.message = '拒绝访问'
                break;
            case 404:
                error.message = '请求错误,未找到该资源';
                window.location.href = '/notFound';
                break;
            case 405:
                error.message = '请求方法未允许';
                break;
            case 408:
                error.message = '请求超时';
                break;
            case 500:
                error.message = '服务器端出错';
                break;
            case 501:
                error.message = '网络未实现';
                break;
            case 502:
                error.message = '网络错误';
                break;
            case 503:
                error.message = '服务不可用';
                break;
            case 504:
                error.message = '网络超时';
                break;
            case 505:
                error.message = 'http版本不支持该请求';
                break;
            default:
                error.message = `连接错误${error.response.status}`
        }
    }else{
        if(JSON.stringify(error).includes('timeout')){
            Message.error('服务器响应超时，请刷新当前页')
        }
        error.message('连接服务器失败')
    }

    Message.error(error.message)
    return Promise.resolve(error.response)
})

export default service
