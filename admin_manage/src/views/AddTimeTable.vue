<template>
  <div style="width:50%">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="班级名称">
        <el-select v-model="form.classId" placeholder="请选择班级名称">
          <el-option v-for="(item,idx) in gradeArr" :key="idx" :label="item.majorName" :value="item.majorId"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上下课时间">
        <el-input v-model="form.lessonsTime"></el-input>
      </el-form-item>
      <el-form-item label="课程名称">
        <el-input v-model="form.lessonsName"></el-input>
      </el-form-item>
      <el-form-item label="上课地点">
        <el-input v-model="form.lessonsAddress"></el-input>
      </el-form-item>
      <el-form-item label="任课教师">
        <el-input v-model="form.lessonsTeacher"></el-input>
      </el-form-item>
      <el-form-item label="几周到几周">
        <el-input v-model="form.lessonsRemark"></el-input>
      </el-form-item>
      <el-form-item label="第几节课">
        <el-input v-model="form.lessonsNumber"></el-input>
      </el-form-item>
      <el-form-item label="周几">
        <el-input v-model="form.lessonsNumber"></el-input>
      </el-form-item>
    </el-form>
    <el-button size="large" type="primary" @click="InsertLessons">提交</el-button>
    <el-button size="large">清空</el-button>


  </div>
</template>

<script>
import { reqFindMajorAll,reqInsertLessons } from "../config/api";
export default {
  data() {
    return {
      msg: "",
      gradeArr:[],
      form: {
        classId: "",
        lessonsTime: "",
        lessonsName: "",
        lessonsAddress: "",
        lessonsTeacher: "",
        lessonsRemark: "",
        lessonsNumber: "",
        weekday: ""
      }
    };
  },
  mounted() {
    this.toFindAllMajor();
  },
  methods: {
    // 查询所有专业
    async toFindAllMajor() {
      const { msg, info, status } = await reqFindMajorAll();
      this.gradeArr = info[0].children;
    },
    // 添加课程表信息btn
    async InsertLessons (){

        const {msg, info, status} = await reqInsertLessons(this.form);
    }
  }
};
</script>