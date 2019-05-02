<template>

    <el-table :data="result.articles" style="width: 100%">
        <el-table-column prop="title" label="title" width="180">
        </el-table-column>
        <el-table-column prop="author.name" label="author">
        </el-table-column>
        <el-table-column prop="create_date" label="create date">
        </el-table-column>
        <el-table-column
                fixed="right"
                label=""
                width="100">
            <template slot-scope="scope">
                <el-button @click="read(result.articles[0]._id)" type="text" size="small">read</el-button>

            </template>
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
                    console.log(res.data)

                }, res => {
                    console.log(res)
                })

            },
            read(articleId) {
                this.$router.push({path: '/detail/' + articleId})
            }
        },
        mounted() {
            this.requestData();
        }
    }
</script>

<style scoped>

</style>