import axios from 'axios'

axios.create({
    thimeout: 10000,
    baseURL: process.env.API,
    responseType: 'json',
});
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.interceptors.request.use(function (config) {
    console.log('start', config);
    // 在发送请求之前做些什么
    let lang = window.localStorage.getItem('language');
    let langObj = {
        'zh_CN': 'zh-CN',   // 中文语言包
        'en_US': 'en',   // 英文语言包
        'zh_CT': 'zh-CT'   // 繁体语言包
    };
    if (lang) {
        config.headers['Accept-Language'] = langObj[lang];
    } else {
        config.headers['Accept-Language'] = 'zh-CN';
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default axios