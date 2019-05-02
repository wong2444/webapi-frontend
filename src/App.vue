<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                    <el-menu-item index="1">
                        <router-link to="/home">Home</router-link>

                    </el-menu-item>
                    <el-menu-item index="3" v-if="flag">
                        <router-link to="/login">Login</router-link>
                    </el-menu-item>

                    <el-submenu index="2" v-if="!flag">
                        <template slot="title">{{name}}</template>
                        <el-menu-item index="2-1">favorite</el-menu-item>
                        <el-menu-item index="2-2" @click="logout()">logout</el-menu-item>

                    </el-submenu>
                    <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->

                </el-menu>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>Aricles</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title"></template>
                                <el-menu-item index="1-1">
                                    <router-link to="/AddArticle">Add</router-link>
                                </el-menu-item>

                            </el-menu-item-group>

                        </el-submenu>

                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>


    export default {
        data() {
            return {
                activeIndex: '1',
                flag: true,
                name: ''
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            checkLogin() {
                if (localStorage.getItem('token') !== '') {
                    this.flag = false;
                    this.name = localStorage.getItem('name')

                } else {
                    this.flag = true;
                }
            },
            logout() {
                localStorage.setItem("token", '');
                localStorage.setItem("userId", '');
                localStorage.setItem("name", '');
                this.flag = true;
            }
        },
        mounted() {
            this.checkLogin()

        }
    }

</script>

<style>
    #app {

    }

    a {
        text-decoration: none;
    }

    .el-header, .el-footer {
        /*background-color: #B3C0D1;*/
        color: #333;
        text-align: center;
        /*line-height: 60px;*/
    }

    .el-aside {
        /*background-color: #D3DCE6;*/
        color: #333;
        text-align: center;
        /*line-height: 200px;*/
    }

    .el-main {
        padding: 0px;
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
    }

    body > .el-container {
        /*margin-bottom: 40px;*/
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
