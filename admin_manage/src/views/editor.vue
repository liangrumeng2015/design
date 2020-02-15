<template>
  <div>
    <el-input placeholder="请输入文章标题" v-model="form.title" /><br/><br/>
    <v-quillEditor v-on:editorContent="editorContent" />
    <div style="width:50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章作者">
          <el-input v-model="form.auhtor"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要">
          <el-input type="textarea" v-model="form.summary"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.ctreatTime" style="width: 100%;" format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="封面图">
          <el-upload
            class="avatar-uploader"
            :action="reqUploadImgApi"
            name="photo"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.photo" :src="form.photo" class="avatar">
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
var that;
import quillEditor from "../components/quillEditor";
import {messageTip} from '../config/tools'
import {reqInsertArticle,reqUpdateArticle,reqFindArtcleAById,reqUploadImgApi} from '../config/api'
export default {
  data() {
    return {
      msg: "",
      reqUploadImgApi,
      form:{
        mdTxt:'',
        title:'',
        auhtor:'',
        summary:'',
        ctreatTime:'',
        photo:''
      },
      imageUrl: '',
      currentId:''
    };
  },
  components: {
    "v-quillEditor": quillEditor
  },
  mounted(){
    if(this.$route.query.id){   // 编辑的
      const id = this.$route.query.id;
      this.currentId = id
      console.log(this.$route.query);
      this.findArtcleAById(id)  
    }
    
  },
  methods:{
      editorContent(data){
          console.log('得到的编辑里面的内容',data);
          this.form.mdTxt = data;
      },
      // 添加文章  + 编辑文章
      async toConfirm(){
        that = this;
        const {mdTxt,title,auhtor,summary,ctreatTime} = this.form;
        if(title == ''){
          messageTip('error','请输入文章标题')
          return;
        }
        if(mdTxt == ''){
          messageTip('error','请输入文章内容')
          return;
        }
        if(auhtor == ''){
          messageTip('error','请输入文章作者')
          return;
        }
        if(summary == ''){
          messageTip('error','请输入文章摘要')
          return;
        }
        if(ctreatTime == ''){
          messageTip('error','请选择文章发布时间')
          return;
        }
        // if(photo == ''){
        //   messageTip('error','请上传文章封面')
        //   return;
        // }

        if(!that.$route.query.id){   // 添加文章
          console.log(that.form);
          const {msg,status} = await reqInsertArticle({...that  .form});
          if(status == 1){
            messageTip('success',msg)
            that.$router.push({path:'/articlelist'})
          } else{
            messageTip('error',msg)
          }
        }else{   // 修改文章
          let params = {
            id:parseInt(that.currentId),
            ...that.form
          }
          console.log(params)
          return;
          const result  = await reqUpdateArticle(params);
        }
      },

      // 根据id查询文章内容
      async findArtcleAById(id){
        const result = await reqFindArtcleAById({id})
      },
      handleAvatarSuccess(res, file) {
        this.photo = URL.createObjectURL(file.raw);
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