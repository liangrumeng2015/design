<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="班级名称">
        <el-select v-model="form.grade" placeholder="请选择班级" @change="selectGrade">
          <el-option v-for="(item,idx) in classIdOptions" :key="idx" :label="item.majorName" :value="item.majorId"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <v-ClassTable :classTableData="classTableData"></v-ClassTable>
  </div>
</template>

<script>
var that;
import ClassTable from "../components/ClassTable";
import { reqFindLessonsById,reqFindClassAll } from "../config/api";
export default {
  data() {
    return {
      form:{
        grade:''
      },
      classIdOptions:[],
      classTableData: {
        weeks: ["", "一", "二", "三", "四", "五", "六", "日"],
        courses: []
      }
    };
  },
  mounted() {
    // let userId = JSON.parse(this.$cookie.get("userInfo")).userId;
    this.getAllClassInfo()
  },
  components: {
    "v-ClassTable": ClassTable
  },
  methods: {
    // 查询学生课表
    async findLessonById(classId) {
      that = this;
      var params = {
        classId
      };
      const { msg, status, info } = await reqFindLessonsById(params);
      that.classTableData.courses = info;
    },
    // 所有班级
     async getAllClassInfo(){
      that = this;
      const {msg,info,status } = await reqFindClassAll();
      that.classIdOptions = info;
    },
    selectGrade(val){
      console.log(val)
      this.findLessonById(val)
    }
  }
};
</script>

<style lang="scss" scoped>
.class-table {
  .table-wrapper {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .tabel-container {
    margin: 7px;

    table {
      table-layout: fixed;
      width: 100%;
      // border-left: 1px solid #EBEEF5;

      thead {
        th {
          color: #606266;
          line-height: 17px;
          font-weight: normal;
          border-top: 1px solid #ebeef5;
          border-right: 1px solid #ebeef5;
          border-bottom: 1px solid #ebeef5;
          background: #409eff;
          color: #ffffff;
        }
      }
      tbody {
        // background-color: #eaf2ff;
        td {
          color: #677998;
          line-height: 12px;
          border-right: 1px solid #ebeef5;
          border-bottom: 1px solid #ebeef5;
        }
      }
      th,
      td {
        width: 60px;
        padding: 12px 2px;
        font-size: 12px;
        text-align: center;
      }

      tr td:first-child {
        color: #606266;
        .period {
          font-size: 8px;
        }
      }
    }
  }
}
</style>
