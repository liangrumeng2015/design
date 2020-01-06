<template>
  <div class="home">
    <el-container class="container">
      <el-header>
        <v-YHeader :title="ADMNIN_MANAGE_NAME" :logo="LOGO" username="张三" @toConfirm="toConfirm" @toCancel="toCancel" />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <v-YLeftNav />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
var that;
import YHeader from "../components/YHeader";
import YLeftNav from '../components/YLeftNav';
import {ADMNIN_MANAGE_NAME,LOGO,DURATION} from '../config/constant'
export default {
  data() {
    return {
      msg: "",
      ADMNIN_MANAGE_NAME,
      LOGO,
      
    };
  },
  components: {
    "v-YHeader": YHeader,
    "v-YLeftNav":YLeftNav
  },
  created() {
    if (!this.$cookie.get("userName")) {
      this.$router.push({ path: "/login" });
    }
  },
  methods:{
    toConfirm(){
      that = this;
      console.log('点击了确定按钮')
      that.$cookie.delete('userName');
      that.$message({
        message:'成功退出',
        type:'success',
        duration:DURATION
      })
      setTimeout(()=>{
        that.$router.push({path:'/login'})
      },DURATION)
    },
    toCancel(){
      console.log('点击了取消按钮')
    }
  }
};
</script>
<style lang="stylus" scoped>
.home{
  height 100%
  .container{
    height 100%
  }
}
.el-header{
  padding 0
}
</style>
