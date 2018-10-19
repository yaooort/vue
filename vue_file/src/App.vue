<template>
    <div class="text_show">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "这是一个单页面控件"
    };
  }
};
</script>

<style>
.text_show {
  size: 4em;
  text-decoration-color: brown;
}
</style>

