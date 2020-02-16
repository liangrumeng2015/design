<template>
  <div class="about">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData1"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
      v-if="tableData1"
    >
      <el-table-column prop="majorName1" label="专业" width="120"></el-table-column>
      <el-table-column prop="majorName" label="班级" width="180"></el-table-column>
      <el-table-column prop="amount1" label="编辑" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="primary">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
var that;
import { reqFindClassAll, reqFindMajorInfoAll } from "../config/api";
export default {
  data() {
    return {
      msg: "",
      form:{
name:'',
region:''
      },
      tableData: [
        {
          majorId: "12987122",
          majorName: "王张三",
          amount1: "ee"
        },
        {
          majorId: "12987123",
          majorName: "王李四",
          amount1: "165"
        }
      ],
      tableData1: "",
      majorArr: [],
      gradeArr: []
    };
  },
  mounted() {
    this.getMajorInfo();
  },
  methods: {
    // 所有专业
    async getMajorInfo() {
      const { msg, info, status } = await reqFindMajorInfoAll();
      if (status == 1) {
        this.majorArr = info;
        this.getGradeInfo();
      }
    },
    // 所有班级
    async getGradeInfo() {
      that = this;
      const { msg, info, status } = await reqFindClassAll();
      if (status == 1) {
        that.gradeArr = info;
        // let allArr = info.concat(that.majorArr);
        // that.tableData1 = allArr;
        that.tableData1 = info
        console.log(that.tableData1);
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row,column,rowIndex, columnIndex);
      if (columnIndex === 0) {
        if (row.majorName1) {
          return {  
            rowspan: 1,
            colspan: 1
          };
        } else {
          return {
            rowspan: 1,
            colspan: 1
          };
        }
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.editorBtn {
  margin-left: 20px;
}
</style>
