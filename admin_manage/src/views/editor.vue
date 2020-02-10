<template>
  <div>
    <el-input placeholder="请输入文章标题" v-model="form.title" /><br/><br/>
    <v-quillEditor v-on:editorContent="editorContent" />
    <div style="width:50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章作者">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要">
          <el-input type="textarea" v-model="form.summary"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.creatTime" style="width: 100%;" format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="封面图">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary" @click="toConfirm">确定</el-button>
    <el-button type="info">取消</el-button>
    
  </div>
</template>
<script>
import quillEditor from "../components/quillEditor";
import {reqInsertArticle,reqFindArtcleAById} from '../config/api'
export default {
  data() {
    return {
      msg: "",
      form:{
        mdTxt:'',
        title:'',
        author:'',
        summary:'',
        creatTime:'',
      },
      imageUrl: ''
    };
  },
  components: {
    "v-quillEditor": quillEditor
  },
  mounted(){
    console.log(this.$route.query)
  },
  methods:{
      editorContent(data){
          console.log('得到的编辑里面的内容',data);
          this.form.mdTxt = data;
      },
      // 添加文章  编辑文章
      async toConfirm(){
        if(!this.$route.query){   // 添加文章
          const result = await reqInsertArticle({...this.form}); 
        }else{   // 修改文章

        }
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(res)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }

  }
};
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;

  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>