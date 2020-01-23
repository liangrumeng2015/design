<template>
  <div>
    <v-Search btnName="搜索" @searchBtnFn="searchBtnFn" placeholder="请输入要搜索的学号或者用户id" />
    <el-button type="primary" style="margin-top:20px" @click="dialogFormVisible = true">添加用户</el-button>
    <!-- 添加、编辑 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible" style="width:80%" :close-on-click-modal=false>
      <el-form :model="form" ref="loginFormRef" :rules="loginFormRules" style="height:400px;overflow:scroll">
        <el-form-item label="用户名称" prop="userName" :label-width="formLabelWidth">
          <el-input v-model="form.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="学号" prop="stuNumber" :label-width="formLabelWidth">
          <el-input v-model="form.stuNumber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="登录密码" prop="password" :label-width="formLabelWidth">
          <el-input show-password v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" :label-width="formLabelWidth">
          <el-radio-group v-model="form.sex">
            <el-radio  label="0">{{form.sex}}女</el-radio>
            <el-radio  label="1">男</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="角色" prop="roleId" :label-width="formLabelWidth">
          <el-radio v-model="form.roleId" label="0">学生</el-radio>
          <el-radio v-model="form.roleId" label="1">教师</el-radio>
          <el-radio v-model="form.roleId" label="2">管理员</el-radio>
        </el-form-item>
        <el-form-item label="专业" prop="majorId" :label-width="formLabelWidth">
          <el-select v-model="form.majorId" placeholder="请选择">
            <el-option
              v-for="item in majorIdOptions"
              :key="item.majorId"
              :label="item.majorName"
              :value='item.majorId + ""'
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="classId" :label-width="formLabelWidth">
          <el-select v-model="form.classId" placeholder="请选择">
            <el-option
              v-for="item in classIdOptions"
              :key="item.majorId"
              :label="item.majorName"
              :value="item.majorId + ''"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="state" :label-width="formLabelWidth">
          <el-radio v-model="form.state" label="0">0</el-radio>
          <el-radio v-model="form.state" label="1">1</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="toAddUserInfo">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 表格 -->
    <div class="table_part">
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
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            <div>{{scope.row.sex == 0 ? '女':'男'}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="roleId" label="角色" :formatter="roleStatus"></el-table-column>
        <!-- <el-table-column prop="state" label="状态">
          <template slot-scope="scope">
            <el-switch
              :value="scope.row.state == 1?true:false"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
          </template>
        </el-table-column> -->
        <el-table-column prop="majorId" label="编辑">
          <template slot-scope="scope">
            <el-button type="primary" @click="toEditorUser(scope.row)">编辑</el-button>
            <el-button type="danger" @click="toDelUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
var that;
import {
  reqFindUserAll,
  reqFindUserById,
  reqDeleteUser,
  reqFindMajorAll,
  reqFindMajorById,
  reqFindMajorInfoAll,
  reqFindClassAll,
  reqInsertUser,
  reqUpdateUser,
  reqFindName
} from "../config/api";
import Search from "../components/Search";
var that;
export default {
  data() {
    return {
      msg: "",
      tableData: [],
      loading: true, // 加载
      form: {
        userName: "",
        stuNumber: "",
        password: "",
        sex: "0",
        roleId: "0",
        majorId: "",
        classId: "",
        state: "0"
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      loginFormRules: {
        userName: [
          { required: true, message: "请输入用户名称", trigger: "blur" }
        ],
        stuNumber: [{ required: true, message: "请输入学号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", tigger: "blur" }],
        sex: [{ required: true, message: "", tigger: "blur" }],
        roleId: [{ required: true, message: "", tigger: "blur" }],
        majorId: [{ required: true, message: "请选择专业", tigger: "blur" }],
        classId: [{ required: true, message: "请选择班级", tigger: "blur" }],
        state: [{ required: true, message: "请选择状态", tigger: "blur" }]
      },
      majorIdOptions: [],
      classIdOptions: []
    };
  },
  components: {
    "v-Search": Search
  },
  created() {
    this.getUserAll();
    this.toFindAllMajor(); // 查询所有专业
    this.getAllMajorInfo();
    this.getAllClassInfo();
  },
  methods: {
    // 所有专业
    async getAllMajorInfo(){
      that = this;
      const {msg,info,status} = await reqFindMajorInfoAll();
      that.majorIdOptions = info;
    },
    // 所有班级
    async getAllClassInfo(){
      that = this;
      const {msg,info,status } = await reqFindClassAll();
      that.classIdOptions = info;
    },
    // 根据majorId 查询班级
    async toFindAllClass() {
      const { msg, info, status } = await reqFindMajorById();
    },
    // 查询所有专业  （没用）
    async toFindAllMajor() {
      const { msg, info, status } = await reqFindMajorAll();

    },
    // 添加用户
    toAddUserInfo() {
      that = this; 
      that.$refs.loginFormRef.validate(async valid => {
        if (!valid) {
          console.log(valid);
        }else{
           console.log('信息可以提交',that.form);
           const {msg,status,info} = await reqInsertUser(that.form);
            if(status == 1){
              that.$message({
                message:msg,
                type: 'success'
              })
              that.getUserAll();
              that.dialogFormVisible = false;
              
            }else{
              that.$message({
                message:msg,
                type: 'error'
              })
            }
        }
      });
    },
    // 删除用户
    toDelUser(val) {
      that = this;
      const { userId, userName } = val;
      that
        .$confirm(`是否要删除用户：${userName}, 是否继续?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(async() => {
          const { msg, info, status } = await reqDeleteUser({ userId });
          console.log(status);
          if (status == 1) {
            that.$message({
              type: "success",
              message: msg,
              duration: 1000
            });
            that.getUserAll();
            console.log('000000000status1111');
          } else {
            console.log('000000000status------');

            that.$message({
              message: msg,
              type: "error",
              duration: 1000
            });
          }
        })
        .catch(() => {
          that.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      return;
    },
    // 编辑用户
    async toEditorUser(val){
      that = this;
      console.log(val);
      that.form = val;
      that.dialogFormVisible = true;
      console.log(that.form)

    },
    // 搜索确定按钮
    searchBtnFn(inputVal) {
      console.log("搜索确定按钮", inputVal);
      if (inputVal == "") {
        return this.$message({
          message: "搜索内容不能为空",
          duration: 1000
        });
      }
      this.findByUserName(inputVal);
      // this.findUserById(inputVal);  // 根据用户id查询

    },
    // 根据用户名进行查询
    async findByUserName (inputVal){
      that = this;
      var params = {
        username:inputVal
      }
      const {msg,info,status} = await reqFindName(params);
    },
    // 根据用户id进行查询
    async findUserById(userId) {
      that = this;
      var params = {
        userId
      };
      const { msg, status, info } = await reqFindUserById(params);
      console.log(msg, status, info);
      if (status == 1) {
        if (info == null) {
          that.$message({
            message: "暂未查询到信息"
          });
        } else {
          that.tableData = [];
          that.tableData.push(info);
        }
      }
    },
    // 角色
    roleStatus(row) {
      if (row.roleId == 0) {
        return "学生";
      } else if (row.roleId == 1) {
        return "教师";
      } else if (row.roleId == 2) {
        return "管理员";
      }
    },
    // 用户信息全量查询
    async getUserAll() {
      that = this;
      const { msg, status, info } = await reqFindUserAll();
      if (status == 1) {
        that.loading = false;
        that.tableData = info;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.el-input {
  width: 85%;
}

.table_part {
  margin-top: 20px;
}
</style>