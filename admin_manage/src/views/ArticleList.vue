<template>
    <div class="table_part">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        highlight-current-row
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
      >
        <el-table-column prop="auhtor" label="作者"></el-table-column>
        <el-table-column prop="title" label="文章标题"></el-table-column>
        <el-table-column prop="ctreatTime" label="创建时间"></el-table-column>
        <el-table-column prop="summary" label="文章摘要"></el-table-column>
        <el-table-column prop="majorId" label="编辑">
          <template slot-scope="scope">
            <el-button type="primary" @click="toEditor(scope.row)">编辑</el-button>
            <el-button type="danger" @click="toDelUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
import {reqArticleAll,reqDeleteArticle} from '../config/api'
export default {
    data(){
        return{
            msg:'',
            loading:false,
            tableData:[]
        }
    },
    mounted(){
        this.getArticleAll();
    },
    methods:{
        async getArticleAll(){
            this.loading = true;
            const result = await reqArticleAll();
            if(result.state == '1'){
                const {totalCount,articles} = result;
                this.tableData = articles
                this.loading = false;
            }
            
        },
        // 编辑
        toEditor(item){
          const {id} = {...item}
          this.$router.push({path:'/editor',query:{id}})
        },
        // 删除
        async toDelUser({id}){
          const {msg,status,info} = await reqDeleteArticle({id});
          if(status == 1){
            this.$message({
              message: msg,
              type: 'success'
            });
            this.getArticleAll();
          }else{
            this.$message({
              message: msg,
              type: 'error'
            });
          }
        }
    }
}
</script>