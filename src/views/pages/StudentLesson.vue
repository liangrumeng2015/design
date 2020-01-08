<template>
  <div>
    <v-ClassTable :classTableData="classTableData" />
  </div>
</template>
<script>
var that;
import ClassTable from "../../components/ClassTable";
import { reqFindLessonByUserId } from "../../config/api";
export default {
  data() {
    return {
      msg: "",
      classTableData:{
          weeks: ["", "一", "二", "三", "四", "五","六","日"],
          courses: [],
      }
    }; 
  },
  components: {
    "v-ClassTable": ClassTable
  },
  created() {
    const { userId, userName, roleId } = JSON.parse(
      this.$cookie.get("userInfo")
    );
    this.findLessonById(userId);
  },
  methods: {
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