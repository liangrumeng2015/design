<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      highlight-current-row
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
    >
      <el-table-column prop="userName" label="用户名"></el-table-column>
      <el-table-column prop="stuNumber" label="学号"></el-table-column>
      <el-table-column prop="sex" label="性别" :formatter="formateSex"></el-table-column>
      <el-table-column prop="roleId" label="角色"></el-table-column>
      <el-table-column prop="majorId" label="专业"></el-table-column>
      <el-table-column prop="classId" label="班级"></el-table-column>
      <el-table-column prop="state" label="状态">
          
        <!-- <template slot-scope="scope" prop="state">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >{{state}}</el-button>
        </template> -->
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
var that;
import { reqFindUserAll } from "../config/api";
export default {
  data() {
    return {
      msg: "",
      tableData: [],
      loading: true // 加载
    };
  },
  created() {
    this.getUserAll();
  },
  methods: {
    formateSex(row,column,cellValue){
        console.log(row,column,cellValue)
    },
    // 用户信息全量查询
    async getUserAll() {
      that = this;
      const { msg, status, info } = await reqFindUserAll();
      console.log(msg, status, info);
      if (status == 1) {
        that.loading = false;
        that.tableData = info;
      }
    }
  }
};
</script>