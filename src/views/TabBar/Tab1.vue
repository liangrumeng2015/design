<template>
  <div class="tab1">
    <!-- 搜索框 -->
    <v-Search />
    <!-- 轮播图 -->
    <v-Swipe />
    <!-- 常用 -->
    <v-TitleBar leftMsg="常用" iconName="arrow" rightMsg=""  />
    <v-ThreeRowCard :CardData="CardData" :button="true" btnMsg="取消常用" />
    <!-- 推荐 -->
    <v-TitleBar leftMsg="推荐" iconName="exchange" rightMsg="换一换" />
    <v-ThreeRowCard :CardData="CardData" :button="true" btnMsg="+常用"/>
  </div>
</template>
<script>
import IconItem from "../../components/IconItem";
import TitleBar from "../../components/TitleBar";
import ThreeRowCard from "../../components/ThreeRowCard";
import Search from '../../components/Search';
import Swipe from '../../components/Swipe';
export default {
  data() {
    return {
      msg: "123",
      value: "",
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
    "v-TitleBar": TitleBar,
    "v-ThreeRowCard": ThreeRowCard,
    "v-Search":Search,
    "v-Swipe":Swipe
  },
  created(){
    if(!JSON.parse(this.$cookie.get('userInfo'))){
      this.$router.push({path:'/login'})
    }else{
      console.log(JSON.parse(this.$cookie.get('userInfo')));
    }
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
   min-height 100vh;
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