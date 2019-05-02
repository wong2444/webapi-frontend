<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span><h1>{{result.article.title}}</h1></span>
            <span><span style="float: left;color: gray">{{result.article.author.name}}</span>       <span
                    style="float: right;color: gray">{{result.article.create_date}}</span> </span>

        </div>
        <div style="float: left;display: flow-root">
            <span>{{result.article.body}}


            <el-button v-if="flag" type="primary" size="mini" icon="el-icon-edit" circle
                       @click="editArticle()"></el-button>

            </span>

            <span v-if="result.article.is_update" style="font-size: xx-small;color: grey">

                    [edit at {{result.article.update_date}}]

                </span>
            <br/>
            <br/>

            <div style="float: left;">
                <span style="float: left;">comments</span><br/>
                <ul style="list-style-type: none;text-align:left;padding: 0px">
                    <li v-for="(item,key) in result.article.comments" v-model="result">
                        <span>{{item.author.name}}: </span>
                        <span>{{item.body}}</span>
                        <span v-if="item._id">
                            <el-button type="primary" size="mini"
                                       icon="el-icon-edit" circle
                                       @click="editComment(item._id,item.body)"></el-button>
                        </span>
                    </li>
                    <li v-if="result.article.comments.length===0">
                        no comment yet
                    </li>
                </ul>
                <el-form :inline="true" :model="comment" class="demo-form-inline" style="float: left;display: block">
                    <el-form-item>
                        <el-input v-model="comment.body" placeholder="left a comment"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">submit</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>


        <br>
    </el-card>


</template>

<script>

    export default {

        data() {
            return {
                result: {},
                flag: true,

                comment: {}
            }
        },
        methods: {
            requestData() {
                this.$http.get("http://127.0.0.1:3000/articles/" + this.$route.params.articleId).then(res => {
                    this.result = res.data;
                    console.log(res)
                    console.log(localStorage.getItem("userId"));

                    if (this.result.article.author._id !== localStorage.getItem("userId")) {
                        this.flag = false;

                    }

                }, res => {
                    console.log(res)
                })

            }, editArticle() {
                this.$router.push({
                    path: '/editArticle/' + this.result.article._id,
                    query: {
                        title: this.result.article.title,
                        body: this.result.article.body,
                        articleId: this.result.article._id
                    }
                })
            }, onSubmit() {
                let headers = {};
                headers['Authorization'] = 'Bearer ' + localStorage.getItem("token");
                this.$http.post("http://127.0.0.1:3000/comments", {
                    "body": this.comment.body,
                    "articleId": this.result.article._id
                }, {headers}).then(res => {
                    this.result = res.data;
                    this.$message(res.data.message);

                }, res => {
                    console.log(res)
                })

            }, editComment(commentId, body) {
                this.$router.push({
                    path: '/editComment/' + commentId,
                    query: {
                        body: body,
                        commentId: commentId,
                        articleId: this.result.article._id
                    }
                })
            }
        },
        mounted() {
            this.requestData();

        }
    }
</script>
<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 95%;
    }
</style>

