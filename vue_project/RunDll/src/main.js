// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Moment from 'moment'

Vue.config.productionTip = false

// 引入mintUI
import Mint from 'mint-ui';
Vue.use(Mint);
// 引入mintUI 的css
import 'mint-ui/lib/style.css'
import '../static/css/globle.css'

// 引入Axios
Axios.defaults.baseURL = 'http://www.sinya.online/api/';
Vue.prototype.$axios = Axios;


// 注册全局导航组件
import Navbar from "@/components/Common/Navbar"
Vue.component(Navbar.name, Navbar);

// 定义全局时间格式化过滤器
Vue.filter('converTime',function(data,formatStr){
    return Moment(data).format(formatStr);
});
// 字符串裁剪
Vue.filter('strCub',function(str,length){
  return str.substring(0,length)+"...";
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
})
