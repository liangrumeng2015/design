<template>
  <!-- 登录界面 -->
  <div class="login_page">
    <div class="inner">
      <h3>辅助教学系统</h3>
      <div>
        <van-radio-group v-model="radioStatus" @change="changeFn">
          <van-radio name="2" checked-color="#07c160">管理员</van-radio>
          <van-radio name="1" checked-color="#07c160">教师</van-radio>
          <van-radio name="0" checked-color="#07c160">学生</van-radio>
        </van-radio-group>
      </div>
      <div class="form_part">
        <van-cell-group>
          <van-field
            v-model="username"
            left-icon="user-o"
            required
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field
            v-model="password"
            left-icon="bag-o"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>
        <van-button type="primary" size="large" @click="toLoginFn">登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
var that;
import {reqLogin} from '../config/api';
import {DELAYTIME} from '../config/constant'
export default {
  data() {
    return {
      msg: "",
      username: "",
      password: "",
      radioStatus:''
    };
  },
  created(){
    this.$cookie.delete('userInfo')
  },
  methods: {
    changeFn(name) {
      console.log(name);
      this.radioStatus = name;
    },
    async toLoginFn() {
      that = this;
      const { username, password,radioStatus } = that;
      if (username != "" && password != "" && radioStatus !='') {
        var params = {
          stuNumber:username,
          password,
          roleId:radioStatus
        };
        const {msg,userName,userId,status} = await reqLogin(params);
        if(status == -1){
          that.$toast({
            message:msg
          })
        }else if(status == 1){
          that.$toast({
            message:msg
          })
          setTimeout(()=>{
            that.$router.push({path:'/'})
          },DELAYTIME)
          that.$cookie.set('userInfo',JSON.stringify({userId,userName}))
        }
      }else{
          if(password == ''){
              that.$toast({
                  message:'密码不能为空',
                  position:'center'
              })
          }
          if(username == ''){
              that.$toast({
                  message:'用户名不能为空',
                  position:'center'
              })
          }
          if(radioStatus == ''){
              that.$toast({
                  message:'请选择角色',
                  position:'center'
              })
          }
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.login_page {
  width: 100%;
  min-height: 100vh;

  .inner {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h3 {
      text-align: center;
      padding-bottom: 60px;
      margin: 0;
    }

    .van-radio-group {
      display: flex;

      .van-radio {
        flex: 4;
        justify-content: center;
      }
    }

    .form_part {
      margin: 0 15px;
      margin-top: 40px;

      .van-button {
        margin-top: 20px;
        border-radius 10px
      }
    }
  }
}
</style>