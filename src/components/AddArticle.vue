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
            <el-button type="primary" @click="onSubmit">create</el-button>

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
                let headers = {};
                headers['Authorization'] = 'Bearer '+localStorage.getItem("token")
                this.$http.post("http://127.0.0.1:3000/articles/",
                    {
                        'title': this.form.title,
                        'body': this.form.body,
                    }, {headers}
                ).then(res => {
                    this.result = res.data;
                    console.log(res)
                    this.$message(res.data.message);
                    this.$router.push({path: '/home'})
                }, res => {
                    console.log(res)
                    this.$message(res.data.message);
                })

            }
        },
        mounted() {


        }
    }
</script>
<style scoped>

</style>

