<template>
  <div class="tab1">
    <!-- 搜索框 -->
    <v-Search />
    <!-- 轮播图 -->
    <v-Swipe :imgArr = "LBPICS" />
    <!-- 常用 -->
    <v-TitleBar leftMsg="常用" iconName="" rightMsg=""  />
    <v-ThreeRowCard :CardData="CardData" @toDetail="toDetail" />
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
import {LBPICS} from '../../config/constant'
import {reqArticleList} from '../../config/api'
export default {
  data() {
    return {
      msg: "123",
      value: "",
      LBPICS,
      CardData: []
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
    this.reqArticleList();
  },
  methods: {
    focusFn() {
      setTimeout(() => {
        this.$router.push("/searchpage");
      }, 150);
    },
    async reqArticleList(){
      const {msg,state,articles} = await reqArticleList();
      if(state == 1){
        this.CardData = articles
      }
    },
    toDetail(item){
      let {id} = item
      console.log('llllll',item)
      this.$router.push({path:'/articledetail',query:{id}})
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