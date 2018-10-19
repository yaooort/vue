<template>
  <div id="app">
    <mt-header fixed :title="meta.title" class="titlebar">
      <!-- <div > -->
        <mt-button icon="back" @click="goBack" slot="left" v-show="meta.showBack">返回</mt-button>
      <!-- </div> -->
      <!-- <router-link :to="'0'" v-on:click.native="goBack" slot="left" v-show="meta.showBack"> -->
        <!-- <mt-button icon="back" >返回</mt-button> -->
      <!-- </router-link> -->
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view/>
    <mt-tabbar fixed v-model="selected" v-show="meta.showTabBar">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/home.png"> 首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/vip.png"> 会员
      </mt-tab-item>
      <mt-tab-item id="carts">
        <img slot="icon" src="./assets/carts.png"> 购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/search.png"> 查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
/**
 * meta: {
      title: "购物车",
      showBack: false,
      showTabBar: true,
      showArrow: false,
      showLogin: true,
    }
 */
export default {
  name: "App",
  props: ["titleAndTab"],
  data() {
    return {
      // 默认选择主页
      selected: "home",
      meta: {
        title: "首页",
        showBack: false,
        showTabBar: true,
        showArrow: false,
        showLogin: true
      }
    };
  },
  watch: {
    selected: function(newV, oldV) {
      this.$router.push({
        name: this.selected
      });
    },
    $route(to, from) {
      this.meta = to.meta;
      
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.titlebar {
  height: 48px;
}
</style>
