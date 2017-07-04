<template>
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="result.total">
    </el-pagination>
</template>
<script>
    export default{
        data(){
            return {
                result:[],
                currentPage:1
            }
        },
        mounted() {
            this.obtainData();
        },
        methods: {
            obtainData(){
                this.$root.eventHub.$on('getResult',(searchResult)=>{
                    this.result = searchResult;
                })
            },
            handleCurrentChange(page) {
                console.log(`当前页: ${page}`);
                this.$root.eventHub.$emit('handleSizeChange',page)
            }
        }
    }
</script>
<style>
    .el-pagination {
        text-align: center;
    }
    .el-pagination button {
        width: auto;
    }
</style>