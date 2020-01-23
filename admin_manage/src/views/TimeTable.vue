<template>
  <div>
    <v-ClassTable :classTableData="classTableData"></v-ClassTable>
  </div>
</template>

<script>
var that;
import ClassTable from "../components/ClassTable";
import {reqFindLessonByUserId} from '../config/api'
export default {
  data() {
    return {
      classTableData: {
        weeks: ["", "一", "二", "三", "四", "五", "六", "日"],
        courses: []
      }
    };
  },
  mounted() {
    let userId = JSON.parse(this.$cookie.get('userInfo')).userId
    this.findLessonById(userId)
  },
  components: {
    "v-ClassTable": ClassTable
  },
  methods:{
    // 查询学生课表
    async findLessonById(userId) {
      that = this;
      var params = {
        userId
      };
      const { msg, status, info } = await reqFindLessonByUserId(params);
      that.classTableData.courses = info;
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
