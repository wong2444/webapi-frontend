import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//1.创建组件
import Home from '../components/Home.vue';
import Detail from '../components/Detail.vue';
import AddArticle from '../components/AddArticle.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import EditArticle from '../components/EditArticle.vue';
import EditComment from '../components/EditComment.vue';
const routes = [
    {path: '/home', component: Home},
    {path: '/detail/:articleId', component: Detail},
    {path: '/AddArticle', component: AddArticle},
    {path: '/login', component: Login},
    {path: '/editArticle/:articleId', component: EditArticle},
    {path: '/editComment/:commentId', component: EditComment},
    {path: '/register', component: Register},
]

const router = new VueRouter({
    routes
})

export default router;