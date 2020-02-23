<template>
  <div style="width:50%">
    <el-form ref="form" :model="form" label-width="180px">
      <el-form-item label="专业名称">
        <el-input v-model="form.className"></el-input>
      </el-form-item>
      <el-form-item label="班级名称">
        <el-input v-model="form.majorName"></el-input>
      </el-form-item>
      <el-button type="primary" @click="insertMaor">提交</el-button>
    </el-form>
  </div>
</template>

<script>
var that;
import {reqInsertMajor,reqFindClassAll,reqUpdateMajorById} from '../config/api'
import {messageTip,loadingTip} from '../config/tools'
export default {
  data() {
    return {
      form: {
        classId: "",
        className:'',
        majorName: "",
        majorId:'',   // 唯一标识
        parentId:'',
      },
      gradeArr: ""
    };
  },
  mounted(){
    if(this.$route.query.parentId){   // 编辑页面
      this.getGradeInfo()
    }
  },
  methods: {
      async insertMaor(){
          const {classId,majorName,parentId,majorId} = this.form;
          let data = {
              parentId:parentId,
              majorName:majorName,
          }
          
          if(this.$route.query.parentId){  // 编辑
            data.majorId = majorId;
            const {status,msg} = await reqUpdateMajorById(data);
            if(status == 1){
              messageTip('success',msg)
            }
            this.$router.push({name:'grade'})
          }else{   // 添加
            const result = await reqInsertMajor(data);
          }
      },
      // 所有班级
    async getGradeInfo() {
      that = this;
      const { msg, info:classArr, status } = await reqFindClassAll();
      if (status == 1) {
        let parentId = that.$route.query.parentId;
        let majorId = that.$route.query.majorId;
        classArr.forEach((item,idx)=>{
          if(parentId == item.parentId && majorId == item.majorId){
            const {majorName,majorName1,parentId,majorId} = item;
            that.form.className = majorName;
            that.form.majorName = majorName1;
            that.form.parentId = parentId;
            that.form.majorId = majorId;
          }
        })
      }
    },
  }
};
</script>