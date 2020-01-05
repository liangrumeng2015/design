<template>
  <div id="login" class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        {{ADMNIN_MANAGE_NAME}}
      </div>
      <el-form
        :model="loginForm"
        :rules="loginFornRules"
        ref="loginFormRef"
        label-width="0px"
        class="login_form"
      > 
        <!-- 用户名 -->
        <el-form-item prop="stuNumber">
          <el-input v-model="loginForm.stuNumber" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-goods"></el-input>
        </el-form-item>
        <!-- button -->
        <el-form-item class="btns">
          <el-button type="primary" @click="toLogin()">登录</el-button>
          <el-button type="info" @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
var that;
import {ADMNIN_MANAGE_NAME,DURATION} from '../config/constant'
import {reqLogin} from '../config/api'
export default {
  data () {
    return {
      ADMNIN_MANAGE_NAME,    
      loginForm: {
        stuNumber: '20190002',
        password: '123456',
        roleId:2
      },
      loginFornRules: {
        stuNumber: [
          { required: true, message: '请输入管理员账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      }
    }
  },
  created(){
      if(this.$cookie.get('userName')){
          this.$router.push({path:'/'})
      }
  },
  methods: {
    //   重置按钮
    resetForm: function () {
      this.$refs.loginFormRef.resetFields();
    },
    // 表单提交
    toLogin: function () {
      that = this;
      that.$refs.loginFormRef.validate(async valid => {
        // 表单与验证
        if (!valid) {
          return
        }
        const {msg,userName,status} = await reqLogin(that.loginForm)
        if(status == -1)
            return that.$message({
                message:msg,
                type:'error',
                duration:DURATION
            })
            that.$message({
                message:msg,
                duration:DURATION,
                type:'success'
            })
        that.$cookie.set('userName',userName);
        setTimeout(()=>{
            that.$router.push('/');
        },DURATION)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  box-sizing: border-box;
  background: url('../assets/login-bg.jpg') no-repeat;
  background-size:100% 100vh
}
.login_box {
  width: 450px;
  height: 300px;
  background: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 2px 2px 10px #e9e8e8;
  .avatar_box {
    position: absolute;
    left: 50%;
    top: 40px;
    font-size: 28px;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #eeeeee;
    }
  }
  .login_form {
    position: absolute;
    bottom: 24px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    .btns {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
