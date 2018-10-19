/*jshint esversion: 6 */

import Vue from './assets/vue';
import App from './app';

let a = 10;
console.log(a);

const mre = () => {
    console.log('调用函数');
};

mre();


new Vue({
    el: '#app_main',
    components: {
        App
    },
    template: `<App/>`
});