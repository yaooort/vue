<template>
  <div class="main_row">
    <h3>{{news_message.title}}</h3>
    <div class="top_line">
      <p>页面阅读:{{news_message.click}}次查看</p>
      <p>时间:{{news_message.add_time|converTime('YYYY-MM-DD')}}</p>
    </div>
    <hr/>
    <div v-html="news_message.content"></div>
  </div>
</template>

<script>
  export default {
    name: "NewsContent",
    data() {
      return {
        news_message: ""
      };
    },
    created() {
      this.$axios
        .get(`getNew/${this.$route.query.id}`)
        .then(res => {
          this.news_message = res.data.message[0];
        })
        .catch(err => {
          console.log("获取新闻详情失败", err);
        });
    }
  };
</script>

<style scoped>
  .main_row{
    padding-bottom: 48px;
  }

  .main_row h3 {
    color: goldenrod;
    margin: 3px;
  }
  
  .top_line {
    width: 100%;
    display: table;
    table-layout: fixed;
    border-spacing: 3px;
  }
  
  .top_line p {
    display: table-cell;
    font-size: 0.01rem;
    color: darkcyan;
  }
</style>
