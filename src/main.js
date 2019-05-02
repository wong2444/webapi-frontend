import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/router.js';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
    el: "#app",
    render: h => h(App),
    router,
}).$mount('#app')
