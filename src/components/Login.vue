<template>

    <el-form ref="form" :model="form" label-width="80px">
        <br>
        <el-form-item label="email">
            <el-input v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item label="password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">login</el-button>

        </el-form-item>
    </el-form>

</template>

<script>

    export default {

        data() {
            return {

                form: {
                    email: '',
                    password: ''
                }

            }
        },
        methods: {
            onSubmit() {

                this.$http.post("http://127.0.0.1:3000/user/login",
                    {
                        'email': this.form.email,
                        'password': this.form.password,
                    },
                ).then(res => {
                    this.$message(res.data.message);
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("userId", res.data.userId)
                    localStorage.setItem("name", res.data.name)
                    localStorage.setItem("favList", JSON.stringify(res.data.favor))
                    this.$router.go(0)
                    this.$router.push({path: '/home',})
                }, res => {

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

