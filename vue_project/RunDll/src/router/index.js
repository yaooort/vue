import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Vip from '@/components/Vip/Vip'
import Carts from '@/components/Carts/Carts'
import Search from '@/components/Search/Search'
import News from '@/components/Home/news/News'
import NewsContent from '@/components/Home/news/NewsContent'
import Photos from '@/components/Home/photo/Photos'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: "首页",
        showBack: false,
        showTabBar: true,
        showArrow: false,
        showLogin: true,
      }
    }, {
      path: '/vip',
      name: 'vip',
      component: Vip,
      meta: {
        title: "会员",
        showBack: false,
        showTabBar: true,
        showArrow: false,
        showLogin: true,
      }
    }, {
      path: '/carts',
      name: 'carts',
      component: Carts,
      meta: {
        title: "购物车",
        showBack: false,
        showTabBar: true,
        showArrow: false,
        showLogin: true,
      }
    }, {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        title: "搜索",
        showBack: false,
        showTabBar: true,
        showArrow: false,
        showLogin: true,
      }
    }, {
      path: '/home/news',
      name: 'newslist',
      component: News,
      meta: {
        title: "新闻列表",
        showBack: true,
        showTabBar: false,
        showArrow: false,
        showLogin: true,
      }
    },
    {
      path: '/news_page',
      name: 'newsContent',
      component: NewsContent,
      props: true,
      meta: {
        title: "新闻详情",
        showBack: true,
        showTabBar: false,
        showArrow: false,
        showLogin: true,
      }
    },{
      path: '/photos/:id',
      name: 'photoList',
      component: Photos,
      meta: {
        title: "图文分享",
        showBack: true,
        showTabBar: false,
        showArrow: false,
        showLogin: true,
      }
    }
  ]
})
