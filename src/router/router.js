import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//1.创建组件
import Home from '../components/Home.vue';
import Detail from '../components/Detail.vue';

const routes = [
    {path: '/home', component: Home},
    {path: '/detail:articleId', component: Detail},

]

const router = new VueRouter({
    routes
})

export default router;