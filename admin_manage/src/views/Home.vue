<template>
  <div class="home">
    首页
  </div>
</template>

<script>
export default{
  data(){
    return{
      msg:''
    }
  },
  created(){
    console.log(this.$cookie.get('userName'));
  }
}
</script>
