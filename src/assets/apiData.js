import axios from "./httpApi";
const base={
    //baseUrl: 'http://localhost:3000',
    baseUrl:'/api',
    banner:'/banner'
}

const banner={
    getData(){
        return axios.get(base,baseUrl+base.banner,{params:{username:'stanxu'}});
    }
}

export default {
    banner
}