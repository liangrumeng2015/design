<template>
  <div>
    <v-ClassTable :classTableData="classTableData" />
  </div>
</template>
<script>
var that;
import ClassTable from "../../components/ClassTable";
import { reqFindTeacherLesson } from "../../config/api";
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
    this.findTeacherLesson(userName);
  },
  methods: {
    // 查询教师课表
    async findTeacherLesson(userName) {
      that = this;
      var params = {
        userName: userName
      };
      const { msg, status, info } = await reqFindTeacherLesson(params);
      that.classTableData.courses = info;
    }
  }
};
</script>