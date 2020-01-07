<template>
  <div class="about">
    <split-table
      :headData="headData"
      :bodyData="bodyData"
      @multipleData="multipleData"
      @editData="editData"
      :tableEditFlag="false"
      :checkFlag="false"
    >
      <template slot="operate" slot-scope="props">
        <span @click="splitEdit(props.rowData,'编辑')">
          <el-button type="primary" icon="el-icon-edit" @click="dialogFormVisible=true">修改/新增/删除</el-button>
        </span>
      </template>
    </split-table>
    <!-- 弹框 -->
    <el-dialog :title="modalTitle" :visible.sync="dialogFormVisible" style="width:80%">
      <el-form
        :model="form"
        ref="loginFormRef"
        :rules="loginFormRules"
        style="height:300px;overflow:scroll"
      >
        <el-form-item label="专业名称" prop="userName" :label-width="formLabelWidth">
          <div style="display:flex">
            <el-input :value="modalObj.major" autocomplete="off" readonly></el-input>
            <el-button type="primary" icon="el-icon-edit" class="editorBtn">修改</el-button>
          </div>
        </el-form-item>
        <div v-for="(item,idx) in modalObj.class" :key="idx">
          <el-form-item label="班级名称" prop="userName" :label-width="formLabelWidth">
            <div style="display:flex">
              <el-input :value="item" autocomplete="off" readonly></el-input>
              <el-button type="primary" icon="el-icon-edit" class="editorBtn">修改</el-button>
              <el-button type="primary" icon="el-icon-edit">删除</el-button>
            </div>
          </el-form-item>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
var that;
import SplitTable from "vue-split-table";
export default {
  components: {
    SplitTable
  },
  data() {
    return {
      modalTitle: "",
      modalObj: {
        // modal里面的数据
        major: "",
        class: []
      },
      dialogFormVisible: false,
      form: {
        userName: ""
      },
      loginFormRules: {},
      formLabelWidth: "100px",
      headData: ["专业", "班级"],
      bodyData: [
        { major: "计算机科学与技术", class: ["软件工程", "网络信息安全"] },
        {
          major: "深圳",
          class: ["肠粉", "牛肉火锅"]
        }
      ]
    };
  },
  methods: {
    editData(data) {
      console.log("编辑所在行的值为", data);
    },
    splitEdit(rowData, title) {
      that = this;
      console.log("rowData值为", rowData);
      that.modalTitle = title;
      that.modalObj.major = rowData.major;
      that.modalObj.class = rowData.class;
    },
    multipleData(data) {
      console.log("复选框选择的值为", data);
    }
  }
};
</script>
<style lang="stylus" scoped>
.editorBtn {
  margin-left: 20px;
}
</style>
