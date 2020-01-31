<template>
  <div>
    <van-steps direction="vertical" :active="1">
      <van-step>
        <div class="step">
          <h3>2019/10/06</h3>
          <p>v 1.0版本上线</p>
        </div>
      </van-step>
      <van-step>
        <div class="step">
          <h3>2019/11/06</h3>
          <p>v 1.0版本上线</p>
        </div>
      </van-step>
      <van-step></van-step>
    </van-steps>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      active: 0
    };
  }
};
</script>
<style lang="stylus" scoped>
.step {
  background: #39b54a;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  height: auto;
  color: #fff;
  border-radius: 5px;

  h3 {
    padding: 10px;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 10px;
    padding-top: 0;
  }
}
</style>