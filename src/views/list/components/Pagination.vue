<template>
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="result.count"
        layout="total, prev, pager, next, jumper"
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
                this.$root.eventHub.$on('getSearchResult',(data)=>{
                    this.result = data;
                })
            },
            // 应该里面还需要一个搜索框的参数
            handleCurrentChange(page) {
                this.$emit('onClickSearch', page)
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
