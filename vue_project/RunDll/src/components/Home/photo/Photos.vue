<template>
    <div class="main">
        <div class="category-list">
            <ul class="list">
                <li v-for="item in categorys" :key="item.id">
                    <a>{{item.title}}</a>
                </li>
            </ul>
        </div>
        <div>
            <ul class="photo-list">
                <li v-for="(item) in photos" :key="item.id">
                    <a href="javascript:void(0);">
                        <img class="img_ph" v-lazy="item.img_url" alt="">
    
                    </a>
                    <p>
                        <span style="color:white">{{item.title}}</span>
                        <br/>
                        <span>{{item.content | strCub(55)}}</span>
                    </p>
                </li>
            </ul>
    
        </div>
    </div>
</template>

<script>
    export default {
        name: "Photos",
        data() {
            return {
                photos: [],
                categorys: [{
    
                }]
            }
        },
        created() {
            this.$axios.get("getimgcategory").then(res => {
                console.log(res);
                this.categorys = [];
                this.categorys.push({
                    title: '全部',
                    id: 0
                })
                this.categorys.push(res.data.message);
            }).catch(err => {
                console.log('获取图文分类失败', err);
            });
            this.$axios.get(`getimages/${this.$route.query.id}`).then(res => {
                console.log(res);
                this.photos = res.data.message;
            }).catch(err => {
                console.log('获取图文列表失败', err);
            })
        }
    };
</script>

<style scoped>
    .list {
        overflow-x: auto;
        /* //设置x轴可滑动  */
        list-style: none;
        /* //去掉li上的小点  */
        white-space: nowrap;
        /* //元素不换行  */
        width: auto;
    }
    
    .list li {
        margin: 5px;
        background-color: aliceblue;
        /* //每个li设置间距为20px  */
        display: inline-block;
        /* //让所有的li在一行 注意这里不能用 */
        /* float: left; */
        /* 因为设置float后里超过一屏后会自动换行 */
    }
    
    .list li a {
        margin: 20px 20px 20px 20px;
    }
    
    .photo-list li {
        width: 100%;
        margin-bottom: 10px;
        /* // 使用相对定位 */
        position: relative;
        /* // 高度设置为0，使用padding来设置高度 */
        height: 0;
        overflow: hidden;
        /* // 使用padding-top也可，使用padding来撑高容器，高度为宽度的 54.545454% */
        padding-bottom: 100%;
    }
    
    .photo-list a {
        /* // 使用绝对定位 */
        position: absolute;
        /* // 宽高为容器的宽高 */
        width: 100%;
        height: 100%;
        top: 0;
        left: 0
    }
    
    .photo-list p {
        background-color: rgba(0, 0, 0, 0.7);
        /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 8px;
        font-size: 0.3rem;
        color: gray
    }
    
    .img_ph {
        width: 100%;
        height: 100%;
    }
    
    .main {
        padding-bottom: 48px;
    }
</style>

