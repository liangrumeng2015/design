<template>
  <div>
    <v-TabBar :tabData="tabData" />

    <router-view  />
  </div>
</template>
<script>
import TabBar from "../components/TabBar";
import {tabData} from '../config/constant'
export default {
  data() {
    return {
      msg: "",
      tabData:tabData
    };
  },
  components: {
    "v-TabBar": TabBar
  }
};
</script>