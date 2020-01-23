<template>
  <!-- 左侧nav栏 -->
  <div class="left_nav">
    <el-row>
      <el-col>
        <el-menu
          default-active="this.$route.path"
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
          <el-menu-item index="/grade">
            <i class="el-icon-menu"></i>
            <span slot="title">专业及班级管理</span>
          </el-menu-item>
          <el-menu-item index="/timetable">
            <i class="el-icon-document"></i>
            <span slot="title">课程表管理</span>
          </el-menu-item>
          <el-menu-item index="/usermanagement">
            <i class="el-icon-setting"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/editor">
            <i class="el-icon-setting"></i>
            <span slot="title">文章编辑</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.left_nav{
    width 100%
    height 100%
    background rgb(84, 92, 100);
    .el-menu-item{
        width 200px
    }
}
</style>