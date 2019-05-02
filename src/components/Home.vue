<template>

        <el-table :data="result.articles" style="width: 100%">
            <el-table-column prop="title" label="title" width="180">
            </el-table-column>
            <el-table-column prop="author.name" label="author">
            </el-table-column>
            <el-table-column prop="create_date" label="create date">
            </el-table-column>
        </el-table>

</template>

<script>
    export default {

        data() {
            return {
                result: {}
            }
        },
        methods: {
            requestData() {
                this.$http.get("http://127.0.0.1:3000/articles").then(res => {
                    this.result = res.data;
                    console.log(res)

                }, res => {
                    console.log(res)
                })

            }
        },
        mounted() {
            this.requestData();
        }
    }
</script>

<style scoped>

</style>