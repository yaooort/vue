<template>
  <div>
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="(item,index) in ads" :key="index">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    <div class="list">
      <ul>
        <li v-for='(grid) in grids' :key="grid.id">
          <router-link :to="grid.router">
            <img :src="grid.src" alt="">
            <p>{{grid.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import src1 from "../../assets/新闻资讯.png";
  import src2 from "../../assets/图文分享.png";
  import src3 from "../../assets/商品展示.png";
  import src4 from "../../assets/咨询.png";
  import src5 from "../../assets/留言反馈.png";
  import src6 from "../../assets/联系我们.png";
  var grids = [{
      id: 1,
      src: src1,
      title: "新闻资讯",
      router: {
        name: 'newslist'
      }
    },
    {
      id: 2,
      src: src2,
      title: "图文分享",
      router: {
        name: 'photoList',
        query: {
          id: 0
        }
      }
    },
    {
      id: 3,
      src: src3,
      title: "商品展示",
      router: {
        name: 'newslist'
      }
    },
    {
      id: 4,
      src: src4,
      title: "咨询",
      router: {
        name: 'newslist'
      }
    },
    {
      id: 5,
      src: src5,
      title: "留言反馈",
      router: {
        name: 'newslist'
      }
    },
    {
      id: 6,
      src: src6,
      title: "联系我们",
      router: {
        name: 'newslist'
      }
    }
  ];
  
  export default {
    name: "Home",
    data() {
      return {
        ads: [],
        grids: grids
      };
    },
    created() {
      this.$axios
        .get("getlunbo")
        .then(res => {
          this.ads = res.data.message;
        })
        .catch(err => {
          console.log("获取轮播广告失败", err);
        });
    }
  };
</script>

<style scoped>
  .swipe {
    height: 210px;
    width: 100%;
    padding: 0px;
  }
  
  .swipe img {
    padding: 0px;
    height: 210px;
    width: 100%;
    background-color: blueviolet;
  }
  
  .list {
    width: 100%;
  }
  
  .list ul {
    display: flex;
    flex-wrap: wrap;
  }
  
  .list ul li {
    width: 33%;
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
  }
  
  .list ul li a {
    display: inline-block;
    text-decoration: none;
    margin: 0 auto;
    width: 100%;
  }
  
  .list ul li a img {
    width: 30px;
    margin-top: 10px;
  }
  
  .list ul li a p {
    width: 100%;
    color: gray;
  }
</style>