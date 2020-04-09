<template>
  <div>
    <van-steps direction="vertical" :active='0' style="padding-bottom:10px">
      <van-step v-for="(item,idx) in logsData" :key="idx">
        <div class="step">
          <h3 v-html="item.time"></h3>
          <p>{{item.content}}</p>
        </div>
      </van-step>
      <van-step></van-step>
    </van-steps>
  </div>
</template>
<script>
import {logsData} from '../../config/constant'
export default {
  data() {
    return {
      msg: "",
      active: 0,
      logsData
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