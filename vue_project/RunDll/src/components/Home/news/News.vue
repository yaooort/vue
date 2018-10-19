<template>
  <div>
    <!-- <Navbar title="name_space"/> -->
    <div class="news">
      <ul>
        <li v-for="(item) in news" :key="item.id">
          <router-link class="item" :to="{name:'newsContent',query:{id:item.id}}">
            <div class="item-left">
              <img v-lazy="item.img_url" alt="">
            </div>
            <div class="item-right">
              <p class="title">{{ item.title }}</p>
              <div>
                <p class="message">{{item.zhaiyao}}</p>
                <p class="tip">点击<span style="color:blue">{{item.click}}</span>次 创建时间:<span style="color:blue">{{item.add_time | converTime('YYYY-MM-DD')}}</span></p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        news: []
      };
    },
    props: ["name_space"],
    created() {
      this.$axios
        .get("getnewslist")
        .then(res => {
          this.news = res.data.message;
        })
        .catch(err => {
          console.log("获取新闻列表失败", err);
        });
    }
  };
</script>

<style scoped>
  .news{
    padding-bottom: 48px;
  }
  .item {
    width: 100%;
    display: flex;
    padding: 5px;
    position: relative;
  }
  
  .item img {
    width: 100%;
    height: 100px;
    display: block;
  }
  
  .item-left {
    width: 110px;
  }
  
  .item-right {
    flex: 1;
    margin: 5px;
  }
  
  .title {
    font-size: 13px;
    color: black;
  }
  
  .message {
    font-size: 5px;
    color: gray;
  }
  
  .tip {
    font-size: 5px;
    color: brown;
    position: absolute;
    bottom: 0;
  }
</style>

