<template>
  <div class="tab1">
    <!-- 搜索框 -->
    <div>
      <input type="text" readonly placeholder="找资料" class="search_input" @click="focusFn" />
    </div>
    <!-- 课程icon  -->
    <v-IconItem :dataItem="dataItem" />

    <v-TitleBar leftMsg="最近使用" iconName="arrow" rightMsg="" />
    <v-ThreeRowCard :CardData="CardData" :button="true" />

    <v-TitleBar leftMsg="推荐" iconName="exchange" rightMsg="换一换" />
    <v-ThreeRowCard :CardData="CardData" />

  </div>
</template>
<script>
import IconItem from "../../components/IconItem";
import TitleBar from "../../components/TitleBar";
import ThreeRowCard from "../../components/ThreeRowCard";
export default {
  data() {
    return {
      msg: "123",
      value: "",
      dataItem: [
        {
          icon: "description",
          txt: "课程",
          color: "#09bc9f"
        },
        {
          icon: "send-gift-o",
          txt: "资源",
          color: "#ffb608"
        },
        {
          icon: "apps-o",
          txt: "微应用",
          color: "#ff6f5e"
        }
      ],
      CardData: [
        {
          imgsrc: "http://placehold.it/100",
          bigTxt: "莎士比亚十四行诗，莎士比亚十四行诗莎士比亚十四行诗",
          name: "郭沫若"
        }
      ]
    };
  },
  components: {
    "v-IconItem": IconItem,
    "v-TitleBar": TitleBar,
    "v-ThreeRowCard": ThreeRowCard
  },
  methods: {
    focusFn() {
      setTimeout(() => {
        this.$router.push("/searchpage");
      }, 150);
    }
  }
};

</script>
<style lang="stylus" scoped>
.tab1 {
   padding: 20px 0;
}
.search_input {
  border: none;
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border-radius: 20px;
  text-align: center;
  height: 15px;
  padding: 10px;
  color: #ccc;
  border: 1px solid #6daed1;
}
</style>