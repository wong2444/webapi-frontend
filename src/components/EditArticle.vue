<template>

    <el-form ref="form" :model="form" label-width="80px">
        <br>
        <el-form-item label="title">
            <el-input v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="body">
            <el-input type="textarea" v-model="form.body"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">edit</el-button>
            <el-button type="danger" @click="onDelete">delete</el-button>
        </el-form-item>
    </el-form>

</template>

<script>

    export default {

        data() {
            return {

                form: {
                    title: '',
                    body: ''
                }

            }
        },
        methods: {
            onSubmit() {
                // let headers = {};
                // headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYW5AZ21haWwuY29tIiwidXNlcklkIjoiNWNjODU4NWUyOTgwMzAzYmMwYTViOTkxIiwiaWF0IjoxNTU2ODY4MjU5LCJleHAiOjE1NTY4NzE4NTl9.CBhGNRUOB0ign7KqL9hzAeW6MlxIfDE-LQk72AJlyN4'
                this.$http.put("http://127.0.0.1:3000/articles/" + this.$route.query.articleId,
                    {
                        'title': this.form.title,
                        'body': this.form.body,
                    }, //{headers}
                ).then(res => {
                    this.result = res.data;
                    console.log(res)
                    this.$message(res.data.message);
                    this.$router.push({path: '/detail/' + this.$route.query.articleId})
                }, res => {
                    console.log(res)
                    this.$message(res.data.message);
                })

            },
            onDelete() {
                this.$confirm('Delete article?', 'Comfirm', {
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No',
                    type: 'warning'
                }).then(() => {
                    this.$http.delete("http://127.0.0.1:3000/articles/" + this.$route.query.articleId
                    ).then(res => {
                        this.$message(res.data.message);
                        this.$router.push({path: '/home'})
                    }, res => {
                        console.log(res)
                        this.$message(res.data.message);
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Cancel'
                    });
                });
            }
        },
        mounted() {

            this.form.title = this.$route.query.title
            this.form.body = this.$route.query.body

        }
    }
</script>
<style scoped>

</style>

