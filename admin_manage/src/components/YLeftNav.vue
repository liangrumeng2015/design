<template>
  <!-- 左侧nav栏 -->
  <div class="left_nav">
    <el-row>
      <el-col>
        <el-menu
          :default-active="currentIdx"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

<el-menu-item index="/usermanagement">
            <i class="el-icon-setting"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>

          <el-submenu index="/grade">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>专业/班级管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/grade">
                <i class="el-icon-menu"></i>
                <span slot="title">班级列表</span>
              </el-menu-item>
              <el-menu-item index="/addgrade">
                <i class="el-icon-menu"></i>
                <span slot="title">增加/编辑班级</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>          
          

          <el-submenu index="/timetable">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>课表管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/timetable">
                <i class="el-icon-document"></i>
                <span slot="title">课程表管理</span>
              </el-menu-item>
              <el-menu-item index="/addtimetable">
                <i class="el-icon-document"></i>
                <span slot="title">增加/编辑课表</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          
          <el-submenu index="/articlelist">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/articlelist">
                <i class="el-icon-setting"></i>
                <span slot="title">文章列表</span>
              </el-menu-item>
              <el-menu-item index="/editor">
                <i class="el-icon-setting"></i>
                <span slot="title">编辑/增加文章</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      currentIdx: ""
    };
  },
  mounted() {
    this.currentIdx = this.$route.path;
  }
};
</script>
<style lang="stylus" scoped>
.left_nav {
  width: 100%;
  height: 100%;
  background: rgb(84, 92, 100);

  .el-menu-item {
    width: 200px;
  }
}
</style>