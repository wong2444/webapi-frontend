<template>

    <el-form ref="form" :model="form" label-width="80px">
        <br>
        <el-form-item label="email">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Register</el-button>

        </el-form-item>
    </el-form>

</template>

<script>

    export default {

        data() {
            return {

                form: {
                    email: '',
                    password: '',
                    name: ''
                }

            }
        },
        methods: {
            onSubmit() {

                this.$http.post("http://127.0.0.1:3000/user/signup",
                    {
                        'email': this.form.email,
                        'name': this.form.name,
                        'password': this.form.password,
                    },
                ).then(res => {
                    this.$message(res.data.message);
                    this.$router.push({path: '/home'})
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

