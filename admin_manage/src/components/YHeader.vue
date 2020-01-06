<template>
  <!-- 头部组件
    组件的使用 
     <v-YHeader :title="ADMNIN_MANAGE_NAME" :logo="LOGO" username="张三" @toConfirm="toConfirm" @toCancel="toCancel" />
    @params title  项目名称
    @params logo  项目的logo图
    @params  username   用户名
    @params  toConfirm  callback
    @params  toCancel   callback
  -->
  <div class="header">
    <div class="header_left">
      <img :src="logo" />
      <p>{{title}}</p>
    </div>
    <div class="header_right">
      <div>
        <span>欢迎, {{username}}</span>
      </div>
      <div>
        <el-popconfirm title="确定要退出？" placement="bottom" @onConfirm="toConfirm" @onCancel="toCancel">
          <el-button slot="reference">退出</el-button>
        </el-popconfirm>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    logo: {
      type: String
    },
    username:{
        type:String
    }
  },
  methods:{
      toConfirm(){
          this.$emit('toConfirm','')
      },
      toCancel(){
          this.$emit('toCancel','')
      }
  }
};
</script>
<style lang="stylus" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  height: 60px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header_left {
    display: flex;
    align-items: center;

    img {
      width: 50px;
    }

    p {
      padding-left: 15px;
      font-size 18px
      font-weight bold
    }
  }

  .header_right {
    margin-right: 10px;
    display flex
    align-items center
    span{
        padding-right 20px
        font-size 15px
    }
    .el-popconfirm {
      background: red;
    }
  }
}
</style>