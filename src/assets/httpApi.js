import router from "@/router";
import axios from "axios";
import el from "element-ui/src/locale/lang/el";

//跳转登录界面
const toLogin=()=>{
    router.push({
        path: '/login'
    })
}

//错误信息处理
const errorHandle=(status,other)=>{
    switch (status){
        case 400:
            console.log("信息校验失败");
            break;
        case 401:
            //去登陆
            toLogin();
            //token过时了
            //清楚token存储
            localStorage.removeItem("token");
            console.log("token校验失败");
            break;
        case 404:
            console.log("请求的资源不存在");
            break;
        default:
            console.log(other);
            break;
    }
}


//创建axios实例
var instance=axios.create({timeout:5000});
instance.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
// instance.defaults.headers.common['Authorization']=localStorage.getItem("token"); token在vuex

instance.interceptors.request.use((config)=>{
    console.log(config)
    //判断post请求需要增加qs转化
    if (config.method==='post'){
        config.data=qs.stringify(config.data)
    }
    return config;
}),(error=>{
    return Promise.reject(error);
})

instance.interceptors.response.use(
    //请求成功
    res=>res.status===200?Promise.resolve(res):Promise.reject(res),
    //请求失败
    error => {
        //这里等价于const response=error.response   ES6中变量的解构赋值
        const {response}=error;
        if (response){
            errorHandle(response.status,response.data.message);
            return Promise.reject(response);
        }else {
            console.log("断网了")
        }
    }
)

export default instance;